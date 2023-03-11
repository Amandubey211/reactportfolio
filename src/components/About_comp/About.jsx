import React from "react";
import Navbar from "../NavBar_comp/Navbar";
import Intro from "./Intro_comp/Intro";
import "./About.css";
import educationimg from "../../images/cake 1.jpg";
// import "./Cards_comp/Cards.css";
import { SkillCard, ProjectCard } from "./Cards_comp/Cards";
// import ProjectCard from "./skill_comp/Skill";

const About = () => {
  return (
    <div>
      <Navbar />
      <Intro />

      <section className="skill_section">
        <h1 className="skill_heading text-uppercase  pt-5">
          my <span className="skill_heading_inner">skills</span>{" "}
        </h1>

        <div className="row">
          <h4 className="ps-5 p-auto  text-uppercase text-muted ms-5">
            front-end
          </h4>
          <div className="ms-4  p-3 d-flex flex-row flex-wrap">
            <SkillCard title="<html>" level="intermidiate" />
            <SkillCard title="#css" level="good" />
            <SkillCard title="javascript() " level="good" />
            <SkillCard title="<react js/>" level="good" />
            <SkillCard title="Bootstrap" level="good" />
          </div>
          <h4 className="text-uppercase text-muted ps-5 ms-5">back-end</h4>
          <div className="ms-4  p-5 d-flex flex-row flex-wrap ">
            <SkillCard title="node js" level="basic" />
            <SkillCard title="express js" level="basic" />
            <SkillCard title="mongo db" level="normal" />
          </div>
        </div>
      </section>
      <section className="Work_section">
        <h1 className="skill_heading text-uppercase  p-3">
          my <span className="skill_heading_inner">works</span>{" "}
        </h1>
        <h3 className="text-uppercase text-muted ps-5 ms-5">projects</h3>

        <div className="ms-4  p-5 d-flex flex-row flex-wrap project_cards ">
          <a
            className="project_link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://amandubey211.github.io/Aman211-portfolio/about.html"
          >
            <ProjectCard
              title="personal portfolio"
              level="html/css"
              link="https://amandubey211.github.io/Aman211-portfolio/about.html"
            />{" "}
          </a>
          <a
            className="project_link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://amandubey211.github.io/Aman211-portfolio/about.html"
          >
            <ProjectCard
              title="personal portfolio"
              level="react js"
              link=".this"
            />
          </a>

          <a
            className="project_link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://amandubey211.github.io/Aman211-portfolio/about.html"
          >
            <ProjectCard
              title="cake shop management"
              level="mern stack"
              link="www.aman.com"
            />
          </a>
        </div>
      </section>
      <section className="education-section  ">
        <h1 className="skill_heading text-uppercase  p-3">
          my <span className="education_heading_inner">qualifications</span>{" "}
        </h1>

        <div className="row">
          <div className="col-lg-6 col-md-12 p-5 education_img">
            <img src={educationimg} alt="" />
          </div>
          <div className="col-lg-6 col-md-12 "></div>
        </div>
      </section>
    </div>
  );
};

export default About;
