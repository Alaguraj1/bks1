import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/BKS-logo.png" alt="image" style={{ width: "70%" }} />
                  </Link>
                  <p style={{ color: "black", fontSize: "16px" }}>
                  BKS Textiles has a modern plant in Tirupur that utilizes green energy and houses cutting-edge weaving, processing and finishing machinery, integrating the latest technologies to ensure the best product outcomes. 
                  </p>
                </div>

                <ul className="social" style={{ color: "black" }}>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="flaticon-facebook-letter-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="flaticon-instagram-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="flaticon-youtube-play-button"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <h3 style={{ color: "black" }}>Information & Resources</h3>

                <ul className="footer-services-list" style={{ color: "black" }}>
                  <li style={{ fontSize: "16px" }}>
                    <Link href="/csr/" style={{ color: "black" }}>CSR</Link>
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <Link href="/sustainability/" style={{ color: "black" }}>Sustainability</Link>
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <Link href="/single-services" style={{ color: "black" }}>News & Events</Link>
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <Link href="/single-services" style={{ color: "black" }}>Gallery</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <h3 style={{ color: "black" }}>Quick Links</h3>

                <ul className="quick-links-list" style={{ color: "black" }}>
                  <li>
                    <Link href="/about" style={{ color: "black", fontSize: "16px" }}>About Us</Link>
                  </li>
                  <li>
                    <Link href="/blog" style={{ color: "black", fontSize: "16px" }}>Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact" style={{ color: "black", fontSize: "16px" }}>Contact</Link>
                  </li>
                  <li>
                    <Link href="/contact" style={{ color: "black", fontSize: "16px" }}>Support</Link>
                  </li>
                  <li>
                    <Link href="/contact" style={{ color: "black", fontSize: "16px" }}>Applications</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <h3 style={{ color: "black" }}>Contacts</h3>

                <ul className="footer-contact-list" style={{ color: "black" }}>
                  <li style={{ color: "black", fontSize: "16px" }}>
                    <span>Address:</span> No. 2/316 Kungumapalayam Pirivu,
                    Naranapuram Post,<br />
                    Palladam-Tirupur Main Road
                    Palladam<br />
                    Tamilnadu<br />
                    Pin Code 641664<br />
                    INDIA
                  </li>
                  <li style={{ color: "black", fontSize: "16px" }}>
                    <span>Email:</span>{" "}
                    <a href="mailto:job.processing@bkstextiles.in" style={{ color: "black" }}>job.processing@bkstextiles.in</a>
                  </li>
                  <li style={{ color: "black", fontSize: "16px" }}>
                    <span>Phone:</span>{" "}
                    <a href="tel:04255 256789 to 799" style={{ color: "black" }}>04255 256789 to 799</a>
                  </li>
                  <li style={{ color: "black", fontSize: "16px" }}>
                    <span>Fax:</span>{" "}
                    <a href="tel:+447854578964" style={{ color: "black" }} >+44 785 4578964</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area" style={{ backgroundColor: "#76c049" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>Copyright {currentYear} @ BKS Textiles. Concept by repute</p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <img src="/images/circle-map.png" alt="image" />
        </div>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
