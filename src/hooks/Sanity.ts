import { createClient } from "next-sanity";
const currentDate = new Date();
const formattedDate = currentDate.toISOString().split('T')[0];
const client = createClient({
  projectId: "xk3ins0n",
  dataset: "production",
  apiVersion: "2023-12-03",
  useCdn: false,
});

export default client