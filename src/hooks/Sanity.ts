import { createClient } from "next-sanity";
const currentDate = new Date();
const formattedDate = currentDate.toISOString().split('T')[0];
const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: formattedDate,
  useCdn: false,
});

export default client