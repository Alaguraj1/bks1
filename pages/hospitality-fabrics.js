import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import HospitalityMain from "../components/Hospitality/HospitalityMain";
import HospitalityTable from "../components/Hospitality/HospitalityTable";

const HospitalityFabrics = () => {
    return (
        <>
            <Navbar />

            <PageBannerTitle
                pageTitle="Hospitality Fabrics"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Hospitality Fabrics"
                imgClass="/images/page-title-bg1.jpg"
            />

            <HospitalityMain />

            <HospitalityTable />

            {/* <Production />

            <WiderWidth />

            <Production2 /> */}

            <Footer />
        </>
    );
};

export default HospitalityFabrics;
