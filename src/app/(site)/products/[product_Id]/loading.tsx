import ContentWrapper from "../../MainComponents/ContentWrapper";
import MainFooter from "../../MainComponents/MainFooter";
import Navigation from "../../MainComponents/Navigation";

const loading = () => {
  return (
    <>
      <Navigation />
      <ContentWrapper>
        <p className="text-center">Loading..</p>
      </ContentWrapper>
      <MainFooter />
    </>
  );
};

export default loading;
