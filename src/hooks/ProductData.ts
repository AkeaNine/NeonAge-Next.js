import client from "./Sanity";

export default async function GetProductData() {
  const product = await client.fetch(`*[_type == "product"]`);
  return product
}
