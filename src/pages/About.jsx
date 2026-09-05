import "../styles/about.css";

function About() {
  return (
    <main className="about-page">
      
                {/* 01 — ABOUT HERO */}

      <section className="about-hero section-light">
        <div className="container-custom">
          <div className="about-hero-grid">
            <div className="about-hero-content">
              <span className="eyebrow">About MEL-CON</span>

              <h1 className="about-hero-title">
                Engineering
                <span> Excellence.</span>
                <br />
                Built to Last.
              </h1>
            </div>

            <div className="about-hero-intro">
              <div className="about-hero-line"></div>

              <p>
                MEL-CON is a professionally managed Engineering, Procurement and
                Construction (EPC) company delivering integrated engineering and
                construction solutions for the industrial, commercial,
                infrastructure and energy sectors.
              </p>
            </div>
          </div>

          <div className="about-hero-bottom">
            <span>•</span>

            <span>Who We Are</span>

            <span className="about-hero-scroll">
              Scroll to explore
              <span>↓</span>
            </span>
          </div>
        </div>
      </section>

                 {/* 02 — WHO WE ARE */}

      <section className="about-story section-light">
        <div className="container-custom">
          <div className="about-story-grid">
            <div className="about-story-label">
              <span className="eyebrow">Who We Are</span>

              <div className="about-story-number">•</div>
            </div>

            <div className="about-story-content">
              <h2>Integrated expertise for demanding projects.</h2>

              <p>
                MEL-CON is a professionally managed Engineering, Procurement and
                Construction (EPC) company delivering integrated engineering and
                construction solutions for the industrial, commercial,
                infrastructure and energy sectors.
              </p>

              <p>
                With a strategic presence in Djibouti and Dubai, the company has
                built a reputation for delivering complex projects with
                technical excellence, operational efficiency, and uncompromising
                safety.
              </p>

              <p>
                Driven by experienced professionals and a multidisciplinary
                workforce, MEL-CON combines engineering expertise, innovative
                construction methodologies, and effective project management to
                deliver reliable solutions throughout every phase of a project
                lifecycle.
              </p>

              <p>
                Our commitment to integrity, quality, and customer satisfaction
                enables us to build lasting partnerships while creating
                sustainable value for clients across diverse industries.
              </p>

              <p>
                As industries continue to evolve, MEL-CON remains focused on
                continuous improvement, technological advancement, and
                delivering engineering solutions that contribute to long-term
                industrial and infrastructure development.
              </p>
            </div>

            <div className="about-story-aside">
              <div className="about-aside-box">
                <span className="about-aside-label">MEL-CON</span>

                <span className="about-aside-symbol">+</span>

                <p>Engineering, Procurement & Construction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

                {/* 03 — VISION */}
            
      <section className="about-vision section-dark">
        <div className="container-custom">
          <div className="about-vision-grid">
            <div className="about-vision-label">
              <span className="eyebrow">Our Vision</span>

              <span className="vision-number">⁕</span>
            </div>

            <div className="about-vision-content">
              <span className="vision-mark">“</span>

              <h2>
                To be recognized as a leading EPC company, delivering innovative
                engineering and construction solutions that contribute to
                sustainable industrial and infrastructure development while
                setting benchmarks for quality, safety, and reliability.
              </h2>
            </div>
          </div>
        </div>
      </section>

                {/* 04 — MISSION */}

      <section className="about-mission section-light">
        <div className="container-custom">
          <div className="about-mission-header">
            <div>
              <span className="eyebrow">Our Mission</span>

              <h2 className="section-title">Driven by purpose.</h2>
            </div>

            <p className="section-description">
              Our mission is built around technical excellence, responsible
              growth and sustainable value creation.
            </p>
          </div>

          <div className="mission-list">
            <article className="mission-item">
              <div className="mission-number">01</div>

              <div className="mission-content">
                <p>
                  We deliver safe, reliable, and cost-effective engineering
                  solutions through technical excellence, operational
                  efficiency, innovation, and integrity, creating sustainable
                  value for clients, employees, and stakeholders.
                </p>
              </div>

              {/* <div className="mission-arrow">
                                ↗
                            </div> */}
            </article>

            <article className="mission-item">
              <div className="mission-number">02</div>

              <div className="mission-content">
                <p>
                  Focus on future market and apply our experience and expertise
                  to build up our new position in the growing market.
                </p>
              </div>

              {/* <div className="mission-arrow">
                                ↗
                            </div> */}
            </article>
          </div>
        </div>
      </section>

                {/* 05 — CLOSING STATEMENT */}
            
      <section className="about-closing section-primary">
        <div className="container-custom">
          <div className="about-closing-grid">
            <span className="closing-label">MEL-CON</span>

            <h2>Building sustainable value through engineering excellence.</h2>

            <span className="closing-symbol">↗</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
