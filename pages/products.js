import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import Hospitality from "../components/Products/Hospitality";
import Apparel from "../components/Products/Apparel";
import Workwear from "../components/Products/Workwear";

const Infrastructure = () => {
    return (
        <>
            <Navbar />

            <PageBannerTitle
                pageTitle="Products"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Products"
                imgClass="/images/page-title-bg1.jpg"
            />

            <Hospitality />

            <Apparel />

            <Workwear />

            <Footer />
        </>
    );
};

export default Infrastructure;
