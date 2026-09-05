import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import heroImage01 from "../../assets/images/home/hero-01.webp";
import heroImage02 from "../../assets/images/home/hero-02.webp";
import heroImage03 from "../../assets/images/home/hero-03.webp";

import "../../styles/home.css";


const heroSlides = [
    {
        image: heroImage01,
        label: "Industrial Excellence",
    },
    {
        image: heroImage02,
        label: "Engineering & Construction",
    },
    {
        image: heroImage03,
        label: "Built for Performance",
    },
];


function HomeHero() {

    const [activeSlide, setActiveSlide] = useState(0);


    /* =========================================
       AUTO SLIDE
    ========================================== */

    useEffect(() => {

        const interval = setInterval(() => {

            setActiveSlide((current) =>
                (current + 1) % heroSlides.length
            );

        }, 5000);


        return () => {
            clearInterval(interval);
        };

    }, []);


    return (

        <section className="home-hero">

            {/* =========================================
                DECORATIVE BACKGROUND
            ========================================== */}

            <div
                className="home-hero-grid"
                aria-hidden="true"
            ></div>


            <div className="container-custom">

                <div className="home-hero-layout">


                    {/* =====================================
                        LEFT CONTENT
                    ====================================== */}

                    <div className="home-hero-content">

                        <div className="home-hero-eyebrow">

                            <span className="home-hero-eyebrow-line"></span>

                            <span>
                                Engineering
                                <span className="hero-dot">•</span>
                                Procurement
                                <span className="hero-dot">•</span>
                                Construction
                            </span>

                        </div>


                        <h1 className="home-hero-title">

                            Building the

                            <span>
                                Industrial
                            </span>

                            Future.

                        </h1>


                        <p className="home-hero-description">

                            Integrated engineering and construction
                            solutions for industrial, commercial,
                            infrastructure and energy projects.

                        </p>


                        {/* =================================
                            CTA BUTTONS
                        ================================== */}

                        <div className="home-hero-actions">

                            <Link
                                to="/services"
                                className="home-hero-button home-hero-button-primary"
                            >

                                <span>
                                    Explore Services
                                </span>

                                <span className="home-hero-button-icon">
                                    ↗
                                </span>

                            </Link>


                            <Link
                                to="/projects"
                                className="home-hero-button home-hero-button-secondary"
                            >

                                View Projects

                            </Link>

                        </div>


                        {/* =================================
                            BOTTOM META
                        ================================== */}

                        <div className="home-hero-meta">

                            <div className="home-hero-meta-item">

                                <span className="home-hero-meta-number">
                                    01
                                </span>

                                <div>
                                    <span className="home-hero-meta-label">
                                        Regional Presence
                                    </span>

                                    <strong>
                                        Djibouti & Dubai
                                    </strong>
                                </div>

                            </div>


                            <div className="home-hero-meta-item">

                                <span className="home-hero-meta-number">
                                    02
                                </span>

                                <div>
                                    <span className="home-hero-meta-label">
                                        Experience
                                    </span>

                                    <strong>
                                        5+ Years
                                    </strong>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =====================================
                        RIGHT IMAGE SLIDER
                    ====================================== */}

                    <div className="home-hero-visual">


                        <div className="home-hero-image-wrapper">


                            {heroSlides.map((slide, index) => (

                                <div
                                    key={slide.image}
                                    className={`home-hero-slide ${
                                        index === activeSlide
                                            ? "active"
                                            : ""
                                    }`}
                                >

                                    <img
                                        src={slide.image}
                                        alt={slide.label}
                                    />

                                    <div className="home-hero-image-overlay"></div>

                                </div>

                            ))}


                            {/* IMAGE TOP LABEL */}

                            <div className="home-hero-image-label">

                                <span>
                                    MEL-CON
                                </span>

                                <span>
                                    EPC
                                </span>

                            </div>


                            {/* IMAGE BOTTOM LABEL */}

                            <div className="home-hero-image-caption">

                                <span className="caption-line"></span>

                                <span>
                                    {heroSlides[activeSlide].label}
                                </span>

                            </div>


                            {/* SLIDER DOTS */}

                            <div className="home-hero-dots">

                                {heroSlides.map((slide, index) => (

                                    <button
                                        key={slide.image}
                                        type="button"
                                        className={
                                            index === activeSlide
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() =>
                                            setActiveSlide(index)
                                        }
                                        aria-label={`Go to slide ${index + 1}`}
                                    />

                                ))}

                            </div>

                        </div>


                        {/* =================================
                            FLOATING EXPERIENCE CARD
                        ================================== */}

                        <div className="home-hero-floating-card">

                            <span className="floating-number">
                                5
                            </span>

                            <div>

                                <span>
                                    Years
                                </span>

                                <strong>
                                    of Excellence
                                </strong>

                            </div>

                        </div>


                        {/* VERTICAL LABEL */}

                        <div className="home-hero-vertical-label">
                            ENGINEERING / CONSTRUCTION
                        </div>

                    </div>

                </div>


                {/* =========================================
                    SCROLL INDICATOR
                ========================================== */}

                <div className="home-hero-scroll">

                    <span className="home-hero-scroll-line"></span>

                    <span>
                        Scroll to explore
                    </span>

                    <span className="home-hero-scroll-arrow">
                        ↓
                    </span>

                </div>

            </div>

        </section>

    );
}


export default HomeHero;