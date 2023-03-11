import React from "react";

import brand1 from "../../../images/img/brands/logo1.png";
import brand3 from "../../../images/img/brands/logo3.png";
import brand4 from "../../../images/img/brands/logo4.png";
import brand5 from "../../../images/img/brands/logo5.png";
import brand6 from "../../../images/img/brands/logo6.png";
import brand7 from "../../../images/img/brands/logo7.png";
import brand8 from "../../../images/img/brands/logo8.png";
import brand9 from "../../../images/img/brands/logo9.png";
import brand2 from "../../../images/img/brands/logo2.png";

import "./Home_body.css";
import Brand from "./Brands_comp/Brand";
// import FontAwesomeIcon from ""?

import { FaPhoneAlt } from "react-icons/fa";
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' //

const HomeBody = () => {
  return (
    <div>
      <div className="home_body_section ">
        <div className="container-fluid">
          <div className="   row ">
            <div className=" col-lg-6 col-md-12  ">
              <div className=" first-row row ">
                <div className="col-lg-4 col-md-6 col-sm-6 brands_outer ">
                  <Brand img={brand1} />
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6  brands_section">
                  <Brand img={brand2} />
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 brands_section">
                  <Brand img={brand3} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 brands_section">
                  <Brand img={brand4} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 brands_section6">
                  <Brand img={brand5} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 brands_section">
                  <Brand img={brand6} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 brands_section">
                  <Brand img={brand7} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6brands_section ">
                  <Brand img={brand8} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 brands_section">
                  <Brand img={brand9} />
                </div>
              </div>
            </div>
            <div className=" col-lg-6 col-md-12  ">
              <div className="experience_area ms-4 ps-4   ">
                <div className="d-flex flex-row flex-wrap year-area">
                  <h2 className="py-3 text-uppercase years  pe-2  p-2">1+2</h2>
                  <h2>
                    <span>year </span>
                    <span>Experiecnce </span>

                    <span>Working </span>
                  </h2>
                </div>
                <div className="d-flex flex-row flex-wrap call-area ">
                  <span className="ps-3 pe-3 logo ">
                    <FaPhoneAlt />{" "}
                  </span>

                  <div className="call-now ">
                    <a href="/" className="text-uppercase h4">
                      call now
                    </a>
                    <span className="py-3"> (+91)123-4123477</span>
                  </div>
                </div>
                <div className="bg_panel"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
