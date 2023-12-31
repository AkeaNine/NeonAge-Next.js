import React from "react";
import Navigation from "../MainComponents/Navigation";
import MainFooter from "../MainComponents/MainFooter";
import ContentWrapper from "../MainComponents/ContentWrapper";

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
