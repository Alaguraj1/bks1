import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import InfraMain from "../components/Infrastructure/infraMain";
import ShortYarnDeying from "../components/Infrastructure/ShortYarnDeying";
import WeavingPreparatory from "../components/Infrastructure/Weaving-Preparatory";
import ShortWeaving from "../components/Infrastructure/ShortWeaving";
import Processing from "../components/Infrastructure/Processing";
import Printing from "../components/Infrastructure/Printing";
import Seawing from "../components/Infrastructure/Sewing";
import Coating from "../components/Infrastructure/Coating";
import Footer from "../components/_App/Footer";

const Infrastructure = () => {
    return (
        <>
            <Navbar />

            <PageBannerTitle
                pageTitle="Infrastructure"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Infrastructure"
                imgClass="/images/page-title-bg1.jpg"
            />

            <InfraMain />

            <ShortYarnDeying />

            <WeavingPreparatory />

            <ShortWeaving />

            <Processing />

            <Printing />
            
            <Coating />

            <Seawing />

            <Footer />
        </>
    );
};

export default Infrastructure;
