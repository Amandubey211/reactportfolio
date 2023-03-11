import React from "react";
import "./Header.css";
import Homeimage from "../../../images/cake 1.jpg";

const Header = () => {
  return (
    <div>
      <div className="container header_section">
        <div className="row">
          <div className="col-lg-6  col-md-12 banner">
            <h3 className="hey">hey</h3>
            <h1>
              I AM <span className="text-muted text-uppercase">aman </span>{" "}
            </h1>
            <h4>
              Front-end <span className="text-muted">React</span> developer
            </h4>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Quas ex totam dolore iure incidunt repudiandae.
            </h6>

            <div className="site_btns">
              <div className="d-flex flex-wrap flex-row mt-3">
                <button
                  type="button"
                  class=" text-uppercase me-2  button primary-button "
                >
                  Hire me
                </button>

                <button
                  type="button"
                  class=" text-uppercase button secondary-button ms-2"
                >
                  get CV
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6  header_image col-md-12 ">
            <img src={Homeimage} className="Homeimage" alt="myimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
