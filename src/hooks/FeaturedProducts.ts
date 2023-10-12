import client from "./Sanity";

export default async function getFeaturedProducts() {
  const products = await client.fetch(
    `*[_type == "product" && *[_type == "productstags" && name == "Featured"][0]._id in tags[]._ref]`
  );
  return products;
}
