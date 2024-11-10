import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { PiFigmaLogoFill } from "react-icons/pi";


export default function Skills() {
  return (
    <section id="Skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h1 className="title">Skills</h1>
          <div className="divider"></div>
        </div>

        <div className="skills-grid">
          <div className="skill-card html">
            <div className="skill-header">
              <div className="skill-icon html-icon">
                <FaHtml5 />
              </div>
              <h2 className="skill-name">HTML</h2>
            </div>
            <div className="skill-progress">
              <div className="progress-bar-container">
                <div className="progress-bar html-progress"></div>
              </div>
              <h2 className="progress-text">100%</h2>
            </div>
          </div>

          <div className="skill-card css">
            <div className="skill-header">
              <div className="skill-icon css-icon">
                <IoLogoCss3 />
              </div>
              <h2 className="skill-name">CSS</h2>
            </div>
            <div className="skill-progress">
              <div className="progress-bar-container">
                <div className="progress-bar css-progress"></div>
              </div>
              <h2 className="progress-text">98%</h2>
            </div>
          </div>

          <div className="skill-card javascript">
            <div className="skill-header">
              <div className="skill-icon js-icon">
                <IoLogoJavascript />
              </div>
              <h2 className="skill-name">JavaScript</h2>
            </div>
            <div className="skill-progress">
              <div className="progress-bar-container">
                <div className="progress-bar js-progress"></div>
              </div>
              <h2 className="progress-text">90%</h2>
            </div>
          </div>

          <div className="skill-card typescript">
            <div className="skill-header">
              <div className="skill-icon ts-icon">
                <SiTypescript />
              </div>
              <h2 className="skill-name">TypeScript</h2>
            </div>
            <div className="skill-progress">
              <div className="progress-bar-container">
                <div className="progress-bar ts-progress"></div>
              </div>
              <h2 className="progress-text">93%</h2>
            </div>
          </div>

          <div className="skill-card nextjs">
            <div className="skill-header">
              <div className="skill-icon nextjs-icon">
                <RiNextjsLine />
              </div>
              <h2 className="skill-name">Next.js</h2>
            </div>
            <div className="skill-progress">
              <div className="progress-bar-container">
                <div className="progress-bar nextjs-progress"></div>
              </div>
              <h2 className="progress-text">99%</h2>
            </div>
          </div>

          <div className="skill-card figma">
            <div className="skill-header">
              <div className="skill-icon figma-icon">
                <PiFigmaLogoFill />
              </div>
              <h2 className="skill-name">Figma</h2>
            </div>
            <div className="skill-progress">
              <div className="progress-bar-container">
                <div className="progress-bar figma-progress"></div>
              </div>
              <h2 className="progress-text">85%</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
