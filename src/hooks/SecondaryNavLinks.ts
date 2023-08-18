import client from "./Sanity";

export default async function GetSecondaryNavLinks() {
  const categories = await client.fetch(`*[_type == "navbarcategory"] | order(_createdAt asc)`);
  return categories
}
