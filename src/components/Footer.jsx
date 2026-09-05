import { Link } from "react-router-dom";
import "../styles/footer.css";
import logo from "../assets/images/logo.png";

function Footer() {
    const services = [
        "Engineering Services",
        "Piping & Tank Works",
        "Structural Works",
        "Civil Works",
        "Mechanical & Piping",
        "Tank & Vessel Design",
    ];

    return (
        <footer className="site-footer">

            {/* =========================================
                FOOTER TOP CTA
            ========================================== */}

            {/* <div className="footer-cta">

                <div className="container-custom">

                    <div className="footer-cta-inner">

                        <div>
                            <span className="footer-eyebrow">
                                Let&apos;s Build Together
                            </span>

                            <h2>
                                Engineering solutions.
                                <br />
                                Built for what&apos;s next.
                            </h2>
                        </div>

                        <Link
                            to="/contact"
                            className="footer-cta-button"
                        >
                            Get In Touch
                        </Link>

                    </div>

                </div>

            </div> */}


            {/* =========================================
                MAIN FOOTER
            ========================================== */}

            <div className="footer-main">

                <div className="container-custom">

                    <div className="footer-grid">

                        {/* ---------------------------------
                            COMPANY
                        ---------------------------------- */}

                        <div className="footer-company">

                            <Link
                                to="/"
                                className="footer-logo"
                            >
                                <img
                                    src={logo}
                                    alt="MEL-CON"
                                />
                            </Link>

                            <p>
                                Engineering, Procurement and Construction
                                solutions delivered with technical
                                excellence, operational efficiency and
                                uncompromising safety.
                            </p>

                            <div className="footer-company-tag">
                                ENGINEERING <span>•</span> PROCUREMENT
                                <span>•</span> CONSTRUCTION
                            </div>

                        </div>


                        {/* ---------------------------------
                            NAVIGATION
                        ---------------------------------- */}

                        <div className="footer-column">

                            <h3>Navigation</h3>

                            <nav
                                className="footer-links"
                                aria-label="Footer navigation"
                            >

                                <Link to="/">Home</Link>
                                <Link to="/about">About</Link>
                                <Link to="/services">Services</Link>
                                <Link to="/projects">Projects</Link>
                                <Link to="/contact">Contact</Link>

                            </nav>

                        </div>


                        {/* ---------------------------------
                            SERVICES
                        ---------------------------------- */}

                        <div className="footer-column">

                            <h3>Services</h3>

                            <div className="footer-links">

                                {services.map((service) => (
                                    <Link
                                        key={service}
                                        to="/services"
                                    >
                                        {service}
                                    </Link>
                                ))}

                            </div>

                        </div>


                        {/* ---------------------------------
                            CONTACT
                        ---------------------------------- */}

                        <div className="footer-column footer-contact">

                            <h3>Contact</h3>

                            <div className="footer-contact-item">

                                <span>Location</span>

                                <p>
                                    Djibouti & Dubai
                                </p>

                            </div>

                            <div className="footer-contact-item">

                                <span>Email</span>

                                <a href="mailto:info@mel-con.com">
                                    info@mel-con.com
                                </a>

                            </div>

                            <Link
                                to="/contact"
                                className="footer-contact-link"
                            >
                                Contact Our Team
                            </Link>

                        </div>

                    </div>

                </div>

            </div>


            {/* =========================================
                FOOTER BOTTOM
            ========================================== */}

            <div className="footer-bottom">

                <div className="container-custom">

                    <div className="footer-bottom-inner">

                        <p>
                            © {new Date().getFullYear()} MEL-CON.
                            All Rights Reserved.
                        </p>

                        <p>
                            Engineering Excellence.
                            Reliable Delivery.
                        </p>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;