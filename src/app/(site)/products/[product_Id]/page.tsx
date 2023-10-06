import GetProductInfo from "@/hooks/product/GetProductInfo";
import Product from "./components/Product";

interface PageProps {
  params: {
    product_Id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined }
}

const page: React.FC<PageProps> = async ({ params, searchParams }) => {
  const product = await GetProductInfo(params.product_Id);

  return <Product product={product} searchParams={searchParams} />;
};

export default page;
