import ContentWrapper from "@/app/(site)/MainComponents/ContentWrapper";
import Navigation from "@/app/(site)/MainComponents/Navigation";
import VerifyForm from "./components/VerifyForm";
import MainFooter from "@/app/(site)/MainComponents/MainFooter";

const page = () => {
  return (
    <>
      <Navigation />
      <ContentWrapper>
        <VerifyForm />
      </ContentWrapper>
      <MainFooter />
    </>
  );
};

export default page;
