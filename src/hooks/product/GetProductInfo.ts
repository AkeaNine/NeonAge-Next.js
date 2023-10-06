import client from "../Sanity";

async function GettagsName({ product }: any) {
  const tags = [];
  if (product && product.tags) {
    for (const tagRef of product.tags) {
      const ref = tagRef._ref;
      const tagQuery = `*[_type == "tag" && _id == $ref]{
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
  if (product && product.categories) {
    for (const catRef of product.categories) {
      const ref = catRef._ref;
      const catQuery = `*[_type == "productscategory" && _id == $ref]{
        name
      }`;

      const tag = (await client.fetch(catQuery, { ref }))[0];

      if (tag) {
        categories.push(tag.name);
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
      const colorRef = i.color._ref;
      const colorQuery = `*[_type == "color" && _id == $colorRef]{
        name
      }`;
      const color = (await client.fetch(colorQuery, { colorRef }))[0];
      if (i.sfs) {
        for (const s of i.sfs) {
          const sizeRef = s.size._ref
          const sizeQuery = `*[_type == "size" && _id == $sizeRef]{
            name
          }`;
          const size = (await client.fetch(sizeQuery, { sizeRef }))[0]
          s["size"] = size.name
        }
      }

      i["color"] = color.name;
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
      categories,
      tags,
      colors,
      description,
      discount,
      price,
      sku,
      title,
    }`;

    const productData = (await client.fetch(query, { sanitizedId }))[0];

    const CategoriesName = await GetcategoriesName({ product: productData });
    const TagNames = await GettagsName({ product: productData });
    const ColorsWithNames = await GetcolorSizeNames({
      colors: productData.colors,
    });

    productData["categories"] = CategoriesName;
    productData["tags"] = CategoriesName;
    productData["colors"] = ColorsWithNames;

    return productData;
  } catch (error: any) {
    console.log("something went wrong");
  }
}
