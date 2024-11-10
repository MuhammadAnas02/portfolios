import React from 'react';
import { FaBook } from "react-icons/fa";
import { CiDesktop } from "react-icons/ci";
import { FaAccusoft } from "react-icons/fa6";


const About = () => {
  return (
    <div className="about-container" id="About">
      <div className="about-flex">
        <div className="about-card education">
          <div className="card-content">
            <FaBook className="card-icon" />
            <div className="card-text">
              <h2 className="card-title">Education</h2>
              <p className="card-description">Software Engineering</p>
            </div>
          </div>
        </div>

        <div className="about-card skills">
          <div className="card-content">
            <CiDesktop className="card-icon large-icon" />
            <div className="card-text">
              <h2 className="card-title">Skills</h2>
              <p className="card-description">
                I have been focusing on frontend development with React, Next.js, Tailwind CSS, and Framer Motion.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-flex">
        <div className="about-card soft-skills">
          <div className="card-content">
            <FaAccusoft className="card-icon large-icon" />
            <div className="card-text">
              <h2 className="card-title">Soft Skills</h2>
              <p className="card-description">
                I've learned various soft skills such as cold emailing, documentation, and team management.
              </p>
            </div>
          </div>
        </div>

        <div className="about-card experience">
          <div className="card-content">
            <CiDesktop className="card-icon" />
            <div className="card-text">
              <h2 className="card-title">Experience</h2>
              <p className="card-description">
                I have recently worked with Next.js and TypeScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
