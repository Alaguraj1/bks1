import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import Narrow from "../components/Processing/Narrow";
import Production from "../components/Processing/Production";
import WiderWidth from "../components/Processing/Wider-width";
import Production2 from "../components/Processing/Production2";
import FacilityEnables from "../components/Coating/Facility-enables";
import FacilityAllows from "../components/Coating/Facility-allows";

const Coating = () => {
    return (
        <>
            <Navbar />

            <PageBannerTitle
                pageTitle="Coating"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Coating"
                imgClass="/images/page-title-bg1.jpg"
            />

            <FacilityEnables />

            <FacilityAllows />

            {/* <WiderWidth />

            <Production2 /> */}

            <Footer />
        </>
    );
};

export default Coating;
