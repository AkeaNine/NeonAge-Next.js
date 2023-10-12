import ContentWrapper from "./(site)/MainComponents/ContentWrapper";
import MainFooter from "./(site)/MainComponents/MainFooter";
import Navigation from "./(site)/MainComponents/Navigation";

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
