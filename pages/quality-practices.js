import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBannerTitle from "../components/common/PageBannerTitle";
import QualityMain from "../components/Quality/QualityMain";
import QualityList from "../components/Quality/QualityList";
import QualityPolicy from "../components/Quality/QualityPolicy";

const QualityPractices = () => {
    return (
        <>
            <Navbar />


            <PageBannerTitle
                pageTitle="Quality Practices"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Quality Practices"
                imgClass="/images/page-title-bg1.jpg"
            />

            <QualityMain />
            <QualityList />
            <QualityPolicy />
            <Footer />
        </>
    );
};

export default QualityPractices;

