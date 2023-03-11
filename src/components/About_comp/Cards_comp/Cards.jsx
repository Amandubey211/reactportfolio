import React from "react";
import "./Cards.css";
import Aboutimg from "../../../images/cake 1.jpg";

const SkillCard = (props) => {
  return (
    <div>
      <div className="skills_card  pb-3">
        <div className="card card_w ms-4 ">
          <img src={Aboutimg} className="card-img-top skill_img" alt="html" />
          <h5 className="text-uppercase  pt-2   skill_tilte">{props.title} </h5>

          <div className="card-body p-1">
            <p className="text-muted text-uppercase level">{props.level}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = (props) => {
  return (
    <div>
      <div className="skills_card  pb-3">
        <div className="card  project_card  project_card_w ms-4  me-4 ">
          <img src={Aboutimg} className="card-img-top skill_img" alt="html" />
          <h6 className="text-uppercase  pt-3  pb-0 skill_tilte">
            {" "}
            {props.title}{" "}
          </h6>

          <div className="card-body ">
            <p className="text-muted text-uppercase level">{props.level}</p>
            {/* <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated progress-w"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { SkillCard, ProjectCard };
