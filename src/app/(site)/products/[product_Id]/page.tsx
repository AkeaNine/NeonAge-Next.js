import GetProductInfo from "@/hooks/product/GetProductInfo";
import Product from "./components/Product";
import Navigation from "../../MainComponents/Navigation";
import MainFooter from "../../MainComponents/MainFooter";
import ContentWrapper from "../../MainComponents/ContentWrapper";

interface PageProps {
  params: {
    product_Id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page = async ({ params, searchParams }: PageProps) => {
  const product = await GetProductInfo(params.product_Id);

  return (
    <>
      <Navigation />
      <ContentWrapper>
      <Product product={product} searchParams={searchParams} />
      </ContentWrapper>
      <MainFooter />
    </>
  );
};

export default Page;
