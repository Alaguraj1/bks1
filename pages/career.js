import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/_App/Footer";
import CareerMain from "../components/Careers/CareerMain";

const Career = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Career"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Career"
        imgClass="/images/page-title-bg3.jpg"
      />

      <CareerMain />

      <Footer />
    </>
  );
};

export default Career;
