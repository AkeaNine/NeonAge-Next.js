import client from "../Sanity";

async function GettagsName({ product }: any) {
  const tags = [];
  if (product && product.tags) {
    for (const tagRef of product.tags) {
      const ref = tagRef._ref;
      const tagQuery = `*[_type == "productstags" && _id == $ref]{
        name
      }`;

      const tag = (await client.fetch(tagQuery, { ref }))[0];

      if (tag) {
        tags.push(tag.name);
      } else {
        return;
      }
    }
  } else {
    return;
  }
  return tags;
}

async function GetcategoriesName({ product }: any) {

  const categories = [];
  if (product && product.category) {
    for (const catRef of product.category) {
      const ref = catRef._ref;
      const catQuery = `*[_type == "category" && _id == $ref]{
        name
      }`;

      const cat = (await client.fetch(catQuery, { ref }))[0];

      if (cat) {
        categories.push(cat.name);
      } else {
        return;
      }
    }
  } else {
    return;
  }
  return categories;
}

async function GetcolorSizeNames({ colors }: any) {
  const NewColors = [];
  
  if (colors) {
    for (const i of colors) {
      const NewSFS = []
      const colorRef = i.color._ref;
      const colorQuery = `*[_type == "color" && _id == $colorRef]{
        name
      }`;
      const color = (await client.fetch(colorQuery, { colorRef }))[0];
      if (i.sfs) {
        const sfs = i.sfs.filter((s: any) => s.stock > 0);
        for (const s of sfs) {
          const sizeRef = s.size._ref;
          const sizeQuery = `*[_type == "size" && _id == $sizeRef]{
              name
            }`;
          const size = (await client.fetch(sizeQuery, { sizeRef }))[0];
          s["size"] = size.name;
        }
        NewSFS.push(sfs)
      }

      i["color"] = color.name;
      i["sfs"] = NewSFS[0];
      
      // i["sfs"] = NewSFS;
      if (color) {
        NewColors.push(i);
      } else {
        return;
      }
    }
  }
  return NewColors;
}

export default async function GetProductInfo(id: string) {
  try {
    const sanitizedId = id.replace(/[^a-zA-Z0-9_-]/g, "");

    const query = `*[_type == "product" && _id == $sanitizedId]{
      category,
      tags,
      colors,
      description,
      discount,
      price,
      sku,
      title,
      _id,
    }`;

    const productData = (await client.fetch(query, { sanitizedId }))[0];

    const CategoriesName = await GetcategoriesName({ product: productData });
    const TagNames = await GettagsName({ product: productData });
    const ColorsWithNames = await GetcolorSizeNames({
      colors: productData.colors,
    });

    productData["category"] = CategoriesName;
    productData["tags"] = TagNames;
    productData["colors"] = ColorsWithNames;
    

    return productData;
  } catch (error: any) {
    console.log("something went wrong");
  }
}
