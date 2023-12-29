import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import ApparelMain from "../components/Apparel/ApparelMain";

const ApparelFabrics = () => {
    return (
        <>
            <Navbar />

            <PageBannerTitle
                pageTitle="Apparel Fabrics"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Apparel Fabrics"
                imgClass="/images/page-title-bg1.jpg"
            />

            <ApparelMain />

            <Footer />
        </>
    );
};

export default ApparelFabrics;
