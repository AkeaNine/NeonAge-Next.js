import client from "./Sanity";

export default async function getFeaturedProducts() {
  const products = await client.fetch(
    `*[_type == "product"  && "152fc07f-7fde-4655-ab47-9656dbcfc478" in tags[]._ref]`
  );
  return products;
}
