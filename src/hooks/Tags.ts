import client from "./Sanity";

export default async function Tags() {
    const tags = await client.fetch(`*[_type == "tag"]`);
  return tags
}