import ContentWrapper from "../MainComponents/ContentWrapper";
import MainFooter from "../MainComponents/MainFooter";
import Navigation from "../MainComponents/Navigation";
import AccountPage from "./components/AccountPage";

const page = () => {
  return (
    <>
      <Navigation />
      <ContentWrapper>
      <AccountPage />
      </ContentWrapper>
      <MainFooter />
    </>
  );
};

export default page;
