import ContentWrapper from "../../MainComponents/ContentWrapper";
import MainFooter from "../../MainComponents/MainFooter";
import Navigation from "../../MainComponents/Navigation";
import UserEmailInput from "./components/UserEmailInput";

const page = () => {
  return (
    <>
      <Navigation />
      <ContentWrapper>
        <UserEmailInput />
      </ContentWrapper>
      <MainFooter />
    </>
  );
};

export default page;
