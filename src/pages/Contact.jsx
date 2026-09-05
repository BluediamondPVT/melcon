


import "../styles/contact.css";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";

function Contact() {
    return (
        <main className="contact-page">

            {/* =========================================
                HERO
            ========================================== */}

            <ContactHero />


            {/* =========================================
                CONTACT INFORMATION
            ========================================== */}

            <section className="contact-information">

                <div className="container-custom">

                    <div className="contact-section-heading">

                        <div>

                            <span className="eyebrow">
                                Contact Information
                            </span>

                            <h2>
                                We're here
                                <span> to help.</span>
                            </h2>

                        </div>

                        <p>
                            Reach out to MEL-CON through any of
                            the channels below.
                        </p>

                    </div>


                    <ContactInfo />

                </div>

            </section>


            {/* =========================================
                FORM
            ========================================== */}

            <section className="contact-form-section">

                <div className="container-custom">

                    <ContactForm />

                </div>

            </section>


            {/* =========================================
                MAP
            ========================================== */}

            <ContactMap />


            {/* =========================================
                FINAL CTA
            ========================================== */}

            <section className="contact-cta">

                <div className="container-custom">

                    <div className="contact-cta-inner">

                        <span className="eyebrow">
                            MEL-CON
                        </span>

                        <h2>
                            Let's build
                            <br />
                            <span>the future together.</span>
                        </h2>

                        <a
                            href="mailto:info@mel-con.com"
                            className="contact-cta-button"
                        >
                            Email Our Team
                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Contact;