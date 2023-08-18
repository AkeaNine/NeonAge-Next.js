import client from "./Sanity";

export default async function GetTopSellingImages() {
  const images = await client.fetch(`*[_type == "topSellingImages"]`);
  return images
}
