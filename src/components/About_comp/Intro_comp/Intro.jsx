import React from "react";
import "./Intro.css";
import Aboutimg from "../../../images/cake 1.jpg";
const Intro = () => {
  return (
    <div>
      <section className="about_area">
        <div className="container-fluid">
          <div className="row pb-5">
            <div className="col-lg-6 col-md-12 about_info ">
              <h2 className="text-uppercase ">
                <span>let me</span>
                <span> introduce </span>
                <span>myself</span>
              </h2>
              <div className="paragraph w-75 py-3">
                <p className="para">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Numquam id corporis adipisci cum? Deleniti est optio quam
                  molestiae?
                </p>
                <p className="para">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolor, consequatur doloremque. Tempore eligendi quis quasi
                  soluta nulla, laborum aliquam beatae hic. Inventore provident
                  delectus porro! Quasi libero est quos accusamus?
                </p>
              </div>

              <button type="button" class=" text-uppercase button  ms-2">
                download CV
              </button>
            </div>
            <div className="col-lg-6 col-md-12 about_image  p-5">
              <img src={Aboutimg} alt="aboutimage" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
