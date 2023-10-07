import { createClient } from "next-sanity";
const currentDate = new Date();
const formattedDate = currentDate.toISOString().split('T')[0];
const client = createClient({
  projectId: "xk3ins0n",
  dataset: "production",
  apiVersion: formattedDate,
  useCdn: false,
});

export default client