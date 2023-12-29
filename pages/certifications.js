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

const Processing = () => {
    return (
        <>
            <Navbar />

            <PageBannerTitle
                pageTitle="Certifications"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Certifications"
                imgClass="/images/page-title-bg1.jpg"
            />

            <CertificationMain />

            <ProcessCertification />

            <ProductCertification />

            <Footer />
        </>
    );
};

export default Processing;
