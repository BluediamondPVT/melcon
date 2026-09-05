import "../../styles/home.css";
import aboutIndustrial from '../../assets/images/about-industrial.webp'

const aboutHighlights = [
    {
        number: "01",
        title: "Expanded Capabilities",
        text: "Our capabilities have grown to include structural steel fabrication, steel structure erection, mechanical plant construction and equipment installation."
    },
    {
        number: "02",
        title: "Trusted Relationships",
        text: "Our commitment to quality, efficiency and reliable service delivery has enabled us to build valuable relationships with clients across various sectors."
    },
    {
        number: "03",
        title: "Industrial Growth",
        text: "MEL-CON is establishing a full-fledged fabrication facility in the Balbala area of Djibouti to strengthen its industrial capabilities."
    }
];

const industries = [
    "Airports",
    "Army Bases",
    "Storage Tanks",
    "Oil & Gas",
    "Petrochemical",
    "Steel",
    "Power"
];

function AboutSection() {
    return (
        <section className="about-section">

            <div className="container-custom">

                {/* =========================
                    SECTION INTRO
                ========================== */}

                <div className="about-top">

                    <div className="about-label">
                        <span className="about-label-line"></span>
                        <span>01 — About MEL-CON</span>
                    </div>

                    <div className="about-heading-wrap">

                        <h2 className="about-heading">
                            Engineering capabilities
                            <span> built around growth.</span>
                        </h2>

                    </div>

                </div>


                {/* =========================
                    MAIN CONTENT
                ========================== */}

                <div className="row about-main-row">

                    {/* IMAGE */}

                    <div className="col-lg-6">

                        <div className="about-image-wrap">

                            <img
                                src={aboutIndustrial}
                                alt="MEL-CON industrial engineering and construction"
                                loading="lazy"
                            />

                            <div className="about-image-index">
                                <span>01</span>
                                <span>DJIBOUTI</span>
                            </div>

                        </div>

                    </div>


                    {/* INTRO CONTENT */}

                    <div className="col-lg-6">

                        <div className="about-intro">

                            <p className="about-lead">
                                Over the years, <strong>MEL-CON has continuously
                                expanded its range of services</strong> to meet
                                the evolving requirements of its clients.
                            </p>

                            <p>
                                Our capabilities have grown to include
                                <strong> structural steel fabrication, steel
                                structure erection, mechanical plant
                                construction and equipment installation</strong>,
                                strengthening our ability to deliver
                                comprehensive engineering and construction
                                solutions.
                            </p>

                            <div className="about-link-wrap">

                                <span className="about-link-line"></span>

                                <span>
                                    Engineering & Construction Solutions
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =========================
                    HIGHLIGHTS
                ========================== */}

                <div className="about-highlights">

                    {aboutHighlights.map((item) => (

                        <article
                            className="about-highlight"
                            key={item.number}
                        >

                            <span className="about-highlight-number">
                                {item.number}
                            </span>

                            <h3>
                                {item.title}
                            </h3>

                            <p>
                                {item.text}
                            </p>

                        </article>

                    ))}

                </div>


                {/* =========================
                    CLIENTS + FACILITY
                ========================== */}

                <div className="about-bottom">

                    <div className="about-client-block">

                        <span className="about-small-label">
                            Trusted by
                        </span>

                        <p>
                            Our major clients include{" "}
                            <strong>
                                Exim Bank, US Embassy, La Ka Sayl and HDTL
                            </strong>,
                            among others.
                        </p>

                    </div>


                    <div className="about-facility-block">

                        <span className="about-small-label">
                            Expanding our reach
                        </span>

                        <p>
                            To further strengthen our industrial capabilities,
                            MEL-CON is establishing a{" "}
                            <strong>
                                full-fledged fabrication facility in the
                                Balbala area of Djibouti
                            </strong>.
                        </p>

                    </div>

                </div>


                {/* =========================
                    INDUSTRIES
                ========================== */}

                <div className="about-industries">

                    <div className="about-industries-header">

                        <span className="about-small-label">
                            Industries we serve
                        </span>

                        <span className="about-industries-count">
                            07 sectors
                        </span>

                    </div>


                    <div className="about-industry-list">

                        {industries.map((industry, index) => (

                            <div
                                className="about-industry"
                                key={industry}
                            >

                                <span>
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <strong>
                                    {industry}
                                </strong>

                                <span className="about-industry-arrow">
                                    ↗
                                </span>

                            </div>

                        ))}

                    </div>

                </div>


                {/* =========================
                    FINAL STATEMENT
                ========================== */}

                <div className="about-statement">

                    <p>
                        Through our expanding capabilities, we provide
                        comprehensive industrial services for demanding
                        sectors across the region.
                    </p>

                    <span>Explore our capabilities ↓</span>

                </div>

            </div>

        </section>
    );
}

export default AboutSection;