import React from "react";

const CsrMain = () => {
    return (
        <>
            <div className="about-area" style={{ padding: "50px 0px" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12" style={{ paddingRight: "50px" }}>
                            <div className="about-content p-0">
                                <h2>Corporate Social Responsibility</h2>
                                <p style={{ fontSize: "16px"}}>
                                    At BKS Textiles, we are committed to building robust communities; a thriving economy and a greener environment have been at the forefront of everything we do. We firmly believe in empowering our people to utilize their skills and knowledge and support the growth of local communities.
                                </p>
                                <p style={{ fontSize: "16px" }}>
                                    Over the years, we have launched numerous initiatives to enhance the social, economic, and environmental well-being of the communities where we operate. We take pride in ensuring that our efforts have a lasting and sustainable impact on the most vulnerable groups. We strive to make a difference and create a brighter future for everyone.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about/1.jpg" alt="image" />
                                {/* <img src="/images/about/2.jpg" alt="image" /> */}
                            </div>
                        </div>
                    </div>

                    <div className="about-inner-area">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6 col-sm-6" style={{ paddingRight: "50px" }}>
                                <div className="about-text">
                                    <h3>Women empowerment</h3>
                                    <p>
                                        BKS Textiles has donated INR 2.5 million towards setting up a sewing skill development and training centre ‘’Kalyan Gurukul Jamtara’’ exclusively for women. This centre Is operated by Prejha Foundation Jharkhand and has been empowering women providing them the opportunity to enhance their skills and improve their lives. With this initiative, we have trained 350 women with sewing skills and provided employment opportunities in our manufacturing facility.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Employee welfare</h3>
                                    <p>
                                        We focus on worker welfare, providing free accommodation, transport, training, and subsidized food to support women workers. We even organize recreational activities and free general health, and eye check-up camps at regular intervals.
                                    </p>
                                    <p>
                                        And in light of the COVID-19 pandemic, we organized vaccination drives for our workers and have educated them about safety measures.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                {/* <div className="shape-img1">
          <img src="/images/shape/1.png" alt="image" />
        </div> */}
                <div className="shape-img2">
                    <img src="/images/shape/1.png" alt="image" />
                </div>
                <div className="shape-img3">
                    <img src="/images/shape/3.png" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/images/shape/4.png" alt="image" />
                </div>
                <div className="shape-img5">
                    <img src="/images/shape/5.png" alt="image" />
                </div>
                <div className="shape-img6">
                    <img src="/images/shape/6.png" alt="image" />
                </div>
                <div className="dot-shape1">
                    <img src="/images/shape/4.png" alt="image" />
                </div>
                {/* <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div> */}
            </div>
        </>
    );
};

export default CsrMain;
