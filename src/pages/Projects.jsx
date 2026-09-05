import React from 'react'
import ProjectCard from '../components/projects/ProjectCard';
import projects from '../data/projectsData';
import ProjectsHero from '../components/projects/ProjectsHero';

import "../styles/projects.css";

function Projects() {
  return (
      <main className="projects-page">

          {/* =========================================
              HERO
          ========================================== */}

          <ProjectsHero />


          {/* =========================================
              PROJECT SHOWCASE
          ========================================== */}

          <section className="projects-showcase">

              <div className="container-custom">

                  <div className="projects-heading">

                      <div>

                          <span className="eyebrow">
                              Selected Work
                          </span>

                          <h2>
                              Projects that
                              <br />
                              define our capabilities.
                          </h2>

                      </div>

                      <p>
                          From commercial and residential developments
                          to industrial facilities and infrastructure,
                          every project reflects MEL-CON's commitment
                          to dependable execution and quality delivery.
                      </p>

                  </div>


                  <div className="projects-grid">

                      {projects.map((project) => (
                          <ProjectCard
                              key={project.number}
                              {...project}
                          />
                      ))}

                  </div>

              </div>

          </section>


          {/* =========================================
              CLOSING CTA
          ========================================== */}

          <section className="projects-cta">

              <div className="container-custom">

                  <div className="projects-cta-content">

                      <span className="eyebrow">
                          Let's Build
                      </span>

                      <h2>
                          Have a project
                          <br />
                          in mind?
                      </h2>

                      <p>
                          Talk to our team about your next engineering,
                          construction or infrastructure project.
                      </p>

                      <a
                          href="/contact"
                          className="projects-cta-button"
                      >
                          Start a Conversation
                      </a>

                  </div>

              </div>

          </section>

      </main>
  );
}

export default Projects;
