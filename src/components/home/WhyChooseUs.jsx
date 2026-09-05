import { whyChooseUs } from "../../data/whyChooseUs";
import WhyChooseCard from "./WhyChooseCard";

function WhyChooseUs() {
    return (
        <section className="home-why-choose section">

            <div className="container-custom">

                <div className="why-choose-layout">

                    {/* Left Content */}

                    <div className="why-choose-intro">

                        <span className="eyebrow">
                            Why MEL-CON
                        </span>

                        <h2 className="section-title">
                            Built on Experience,
                            Capability & Trust.
                        </h2>

                        <p className="section-description">
                            Our strength comes from proven engineering
                            expertise, experienced teams and a commitment
                            to delivering reliable solutions for demanding
                            projects.
                        </p>

                        <div className="why-choose-accent">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>


                    {/* Right Features */}

                    <div className="why-choose-list">

                        {whyChooseUs.map((item) => (
                            <WhyChooseCard
                                key={item.number}
                                {...item}
                            />
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}

export default WhyChooseUs;