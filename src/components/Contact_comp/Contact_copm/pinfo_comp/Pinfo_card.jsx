import React from "react";
import "./Pinfocard.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { SiReplit } from "react-icons/si";
import contact_img from "../../../../images/RESUME IMAGE.jpg";
// import { NavLink } from "react-router-dom";

import { BsLinkedin, BsGithub, BsTelegram } from "react-icons/bs";

const Pinfo_card = () => {
  return (
    <div>
      <div className="personal_info d-flex flex-col flex-wrap  mt-2 ">
        <h4 className="py-3 text-uppercase h-2 fw-bold">contact information</h4>{" "}
        <hr />
        <br />
        <h6 className="pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          alias.
        </h6>
        <div className="d-flex flex-col flex-wrap pinfo_body ">
          <h6 className="fw-bold">
            <span>
              <FaPhoneAlt className="pinfo-logo ms-3  " />
            </span>
            (+91) 770-004-2333
          </h6>
          <h6 className="fw-bold">
            <span>
              {" "}
              <MdEmail className="pinfo-logo ms-3 " />
            </span>{" "}
            amandubey8833@gmail.com
          </h6>
          <h6 className="fw-bold">
            <span>
              <ImLocation className="pinfo-logo ms-3" />
            </span>
            nallasopara east
          </h6>
          <br />
          <h6 className="fw-bold">
            <span>
              <ImLocation className="pinfo-logo ms-3" />
            </span>
            thane west
          </h6>
          <div className="contact_img p-2 ">
            <img
              title="owner"
              src={contact_img}
              alt="contact_img"
              className="img mt-3"
              width={100}
            />
          </div>
        </div>
        <div className=" pinfo_foot ms-5 " title="links">
          <h4>
            <a
              href="https://www.linkedin.com/in/aman-dubey-0bbaba236/"
              target={"_blank"}
              rel="noreferrer"
              className="pinfo_foot_logo p-1"
            >
              <BsLinkedin title="linkdin" />
            </a>
          </h4>

          <h4>
            <a
              href="https://github.com/Amandubey211"
              target={"_blank"}
              rel="noreferrer"
              className="pinfo_foot_logo p-1"
            >
              <BsGithub title="github" />
            </a>
          </h4>

          <h4>
            <a
              href="/"
              target={"_blank"}
              rel="noreferrer"
              className="pinfo_foot_logo p-1"
            >
              <BsTelegram title="telegram" />
            </a>
          </h4>

          <h4>
            <a
              href="https://replit.com/@TYIT211-DUBEYAM"
              target={"_blank"}
              rel="noreferrer"
              className="pinfo_foot_logo p-1"
            >
              <SiReplit title="replit/works" />
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Pinfo_card;
