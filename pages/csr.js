import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import Narrow from "../components/Processing/Narrow";
import Production from "../components/Processing/Production";
import WiderWidth from "../components/Processing/Wider-width";
import Production2 from "../components/Processing/Production2";
import CertificationMain from "../components/Certification/CertificationMain";
import ProcessCertification from "../components/Certification/ProcessCertification";
import ProductCertification from "../components/Certification/ProductCertificate";
import CsrMain from "../components/CSR/CsrMain";

const Processing = () => {
    return (
        <>
            <Navbar />

            <PageBannerTitle
                pageTitle="Corporate Social Responsibility"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Corporate Social Responsibility"
                imgClass="/images/page-title-bg1.jpg"
            />

            <CsrMain />

            <Footer />
        </>
    );
};

export default Processing;
