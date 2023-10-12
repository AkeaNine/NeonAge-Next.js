import ContentWrapper from "./(site)/MainComponents/ContentWrapper";
import MainFooter from "./(site)/MainComponents/MainFooter";
import Navigation from "./(site)/MainComponents/Navigation";
import Home from "./(site)/home/Home";

export default async function Page() {
  return (
    <>
      <Navigation />
      <ContentWrapper>
        <Home />
      </ContentWrapper>
      <MainFooter />
    </>
  );
}
