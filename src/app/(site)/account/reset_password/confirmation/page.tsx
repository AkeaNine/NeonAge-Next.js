import ContentWrapper from "@/app/(site)/MainComponents/ContentWrapper";
import Navigation from "@/app/(site)/MainComponents/Navigation";
import ConfirmText from "./components/ConfirmText";
import MainFooter from "@/app/(site)/MainComponents/MainFooter";

const page = () => {
  return (
    <>
      <Navigation />
      <ContentWrapper>
        <ConfirmText />
      </ContentWrapper>
      <MainFooter />
    </>
  );
};

export default page;
