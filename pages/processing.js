import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import Narrow from "../components/Processing/Narrow";
import Production from "../components/Processing/Production";
import WiderWidth from "../components/Processing/Wider-width";
import Production2 from "../components/Processing/Production2";

const Processing = () => {
    return (
        <>
            <Navbar />

            <PageBannerTitle
                pageTitle="Processing"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Processing"
                imgClass="/images/page-title-bg1.jpg"
            />

            <Narrow />

            <Production />

            <WiderWidth />

            <Production2 />

            <Footer />
        </>
    );
};

export default Processing;
