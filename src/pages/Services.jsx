import ServicesHero from "../components/services/ServicesHero";
import ServiceCategoryCard from "../components/services/ServiceCategoryCard";
import serviceCategories from "../data/servicesData";

import "../styles/services.css";

function Services() {
    return (
        <main className="services-page">

            {/* =========================================
                HERO
            ========================================== */}

            <ServicesHero />


            {/* =========================================
                ENGINEERING SERVICES
            ========================================== */}

            <section className="services-catalog">

                <div className="container-custom">

                    <div className="services-section-heading">

                        <div>

                            <span className="eyebrow">
                                Engineering Services
                            </span>

                            <h2>
                                From concept
                                <br />
                                to completion.
                            </h2>

                        </div>

                        <p>
                            Our multidisciplinary capabilities
                            cover engineering, civil, structural,
                            mechanical, piping, tank and construction
                            requirements across the project lifecycle.
                        </p>

                    </div>


                    {/* =====================================
                        SERVICE CARDS
                    ====================================== */}

                    <div className="service-category-grid">

                        {serviceCategories.map((service) => (
                            <ServiceCategoryCard
                                key={service.number}
                                {...service}
                            />
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================
                CLOSING CTA
            ========================================== */}

            <section className="services-cta">

                <div className="container-custom">

                    <div className="services-cta-inner">

                        <span className="eyebrow">
                            Start a Conversation
                        </span>

                        <h2>
                            Let's build something
                            <br />
                            <span>that matters.</span>
                        </h2>

                        <p>
                            Talk to our team about your next
                            engineering or construction project.
                        </p>

                        <a
                            href="/contact"
                            className="services-cta-button"
                        >
                            Get In Touch
                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Services;