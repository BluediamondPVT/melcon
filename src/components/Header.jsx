import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

import logo from "../assets/images/logo.png";

function Header() {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);


    const closeMenu = () => {
        setMenuOpen(false);
    };


    return (

        <header
            className={`site-header ${
                scrolled ? "site-header-scrolled" : ""
            }`}
        >

            <div className="container-custom">

                <div className="header-inner">


                    {/* =========================
                        LOGO
                    ========================== */}

                    <NavLink
                        to="/"
                        className="site-logo"
                        onClick={closeMenu}
                    >

                        <img
                            src={logo}
                            alt="MEL-CON"
                        />

                    </NavLink>


                    {/* =========================
                        DESKTOP NAVIGATION
                    ========================== */}

                    <nav className="desktop-navigation">

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `nav-link-custom ${
                                    isActive ? "active" : ""
                                }`
                            }
                        >
                            Home
                        </NavLink>


                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `nav-link-custom ${
                                    isActive ? "active" : ""
                                }`
                            }
                        >
                            About
                        </NavLink>


                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                `nav-link-custom ${
                                    isActive ? "active" : ""
                                }`
                            }
                        >
                            Services
                        </NavLink>


                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `nav-link-custom ${
                                    isActive ? "active" : ""
                                }`
                            }
                        >
                            Projects
                        </NavLink>


                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `nav-link-custom ${
                                    isActive ? "active" : ""
                                }`
                            }
                        >
                            Contact
                        </NavLink>

                    </nav>


                    {/* =========================
                        DESKTOP CTA
                    ========================== */}

                    <NavLink
                        to="/contact"
                        className="header-cta"
                    >
                        Get In Touch
                        <span className="cta-arrow">↗</span>
                    </NavLink>


                    {/* =========================
                        MOBILE MENU BUTTON
                    ========================== */}

                    <button
                        type="button"
                        className={`mobile-menu-button ${
                            menuOpen ? "open" : ""
                        }`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={
                            menuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={menuOpen}
                    >

                        <span></span>
                        <span></span>

                    </button>

                </div>

            </div>


            {/* =========================
                MOBILE NAVIGATION
            ========================== */}

            <div
                className={`mobile-navigation ${
                    menuOpen ? "mobile-navigation-open" : ""
                }`}
            >

                <div className="mobile-navigation-inner">

                    <div className="mobile-nav-label">
                        Navigation
                    </div>


                    <nav>

                        <NavLink
                            to="/"
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `mobile-nav-link ${
                                    isActive ? "active" : ""
                                }`
                            }
                        >
                            <span>01</span>
                            Home
                        </NavLink>


                        <NavLink
                            to="/about"
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `mobile-nav-link ${
                                    isActive ? "active" : ""
                                }`
                            }
                        >
                            <span>02</span>
                            About
                        </NavLink>


                        <NavLink
                            to="/services"
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `mobile-nav-link ${
                                    isActive ? "active" : ""
                                }`
                            }
                        >
                            <span>03</span>
                            Services
                        </NavLink>


                        <NavLink
                            to="/projects"
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `mobile-nav-link ${
                                    isActive ? "active" : ""
                                }`
                            }
                        >
                            <span>04</span>
                            Projects
                        </NavLink>


                        <NavLink
                            to="/contact"
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `mobile-nav-link ${
                                    isActive ? "active" : ""
                                }`
                            }
                        >
                            <span>05</span>
                            Contact
                        </NavLink>

                    </nav>


                    {/* <NavLink
                        to="/contact"
                        onClick={closeMenu}
                        className="mobile-nav-cta"
                    >
                        Get In Touch
                        <span>↗</span>
                    </NavLink> */}

                </div>

            </div>

        </header>

    );

}

export default Header;