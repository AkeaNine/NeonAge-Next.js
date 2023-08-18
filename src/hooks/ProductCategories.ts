import client from "./Sanity";

export default async function GetProductCategories() {
  const categories = await client.fetch(`*[_type == "productscategory"]`);
  return categories
}
