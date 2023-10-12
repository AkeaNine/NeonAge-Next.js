import ContentWrapper from "@/app/(site)/MainComponents/ContentWrapper";
import MainFooter from "@/app/(site)/MainComponents/MainFooter";
import Navigation from "@/app/(site)/MainComponents/Navigation";
import SuccessText from "./components/SuccessText";

const page = () => {
  return (
    <>
      <Navigation />
      <ContentWrapper>
        <SuccessText />
      </ContentWrapper>
      <MainFooter />
    </>
  );
};

export default page;
