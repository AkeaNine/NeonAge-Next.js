import client from "./Sanity";

async function GetcolorSizeNames({ colors }: any) {
  const NewColors = [];

  if (colors) {
    for (const i of colors) {
      const NewSFS = [];
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
        NewSFS.push(sfs);
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

export default async function getFeaturedProducts() {
  try {
    const query = `*[_type == "product" && *[_type == "productstags" && name == "Featured"][0]._id in tags[]._ref]{
      colors,
      discount,
      price,
      title,
      _id,
    }`;

    const products = await client.fetch(
      `*[_type == "product" && *[_type == "productstags" && name == "Featured"][0]._id in tags[]._ref]`
    );

    const productsData = await client.fetch(query);

    const productsList = [];

    for (const item of productsData) {
      const updatedColor = await GetcolorSizeNames({
        colors: item.colors,
      });

      item.colors = updatedColor;
      productsList.push(item);
    }

    return productsList;
  } catch (error: any) {
    console.log("something went wrong");
  }
}