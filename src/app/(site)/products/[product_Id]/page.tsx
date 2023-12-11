import GetProductInfo from "@/hooks/product/GetProductInfo";
import Product from "./components/Product";
import Navigation from "../../MainComponents/Navigation";
import MainFooter from "../../MainComponents/MainFooter";
import ContentWrapper from "../../MainComponents/ContentWrapper";
import { redirect } from "next/navigation";

interface PageProps {
  params: {
    product_Id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page = async ({ params, searchParams }: PageProps) => {
  if (params.product_Id === undefined || params.product_Id === null || searchParams === undefined || searchParams === null) {
    return redirect("/");
  }
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
