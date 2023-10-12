import ContentWrapper from "../../MainComponents/ContentWrapper";
import MainFooter from "../../MainComponents/MainFooter";
import Navigation from "../../MainComponents/Navigation";
import CardBox from "./components/CardBox";

const page = () => {
  return (
    <>
      <Navigation />
      <ContentWrapper>
        <CardBox />
      </ContentWrapper>
      <MainFooter />
    </>
  );
};

export default page;
