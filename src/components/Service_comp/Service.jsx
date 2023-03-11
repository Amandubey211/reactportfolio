import React from "react";
import Navbar from "../NavBar_comp/Navbar";
import service1 from "../../images/cake 1.jpg";
import { NavLink } from "react-router-dom";
import "./Service.css";
const Service = () => {
  return (
    <div>
      <Navbar />
      <div className="container pb-5 mb-5">
        <div className="service_heading">
          <h2 className=" text-uppercase  ">
            ser<span className="text-muted">vices </span>
            <span className="text-muted"> - off</span>ers
          </h2>
        </div>
        <div className="  service_cards  d-flex flex-row flex-wrap">
          {/* ................... card 1 ........... */}
          <NavLink exact to="/contact" className="service_card_link">
            <div className="card mt-4 " style={{ width: 240 }}>
              <img src={service1} className="card-img-top" alt="web dev" />
              <div className="card-body">
                <h5 className="card-title  fw-bold text-uppercase">
                  web design ,ui/ux{" "}
                  <span class="badge bg-secondary  p-2 ms-2">f-end</span>
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  type="button"
                  class=" text-uppercase button secondary-button ms-2"
                >
                  apply
                </button>
              </div>
            </div>
          </NavLink>
          {/* ................... card 1 ........... */}
          <NavLink exact to="/contact" className="service_card_link">
            <div className="card ms-5 mt-4 " style={{ width: 240 }}>
              <img src={service1} className="card-img-top" alt="web dev" />
              <div className="card-body">
                <h5 className="card-title  fw-bold text-uppercase">
                  web-app
                  <span class="badge bg-secondary  p-2 ms-2">f-end</span>
                </h5>{" "}
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  type="button"
                  class=" text-uppercase button secondary-button ms-2"
                >
                  apply
                </button>
              </div>
            </div>
          </NavLink>
          <NavLink exact to="/contact" className="service_card_link">
            {/* ................... card 1 ........... */}
            <div className="card mt-4 ms-5" style={{ width: 240 }}>
              <img src={service1} className="card-img-top" alt="web dev" />
              <div className="card-body">
                <h5 className="card-title  fw-bold  text-uppercase">
                  api development
                  <span class="badge bg-secondary p-2 ms-2"> b-end</span>{" "}
                </h5>{" "}
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  type="button"
                  className=" text-uppercase  button secondary-button ms-2"
                >
                  apply
                </button>
              </div>
            </div>
          </NavLink>
          <NavLink exact to="/contact" className="service_card_link">
            {/* ................... card 1 ........... */}
            <div className="card mt-4 ms-5" style={{ width: 240 }}>
              <img src={service1} className="card-img-top" alt="web dev" />
              <div className="card-body">
                <h5 className="card-title  fw-bold  text-uppercase">
                  data-base
                  <span class="badge bg-secondary  p-2 ms-2"> b-end </span>{" "}
                </h5>

                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <button
                  type="button"
                  class=" text-uppercase button secondary-button ms-2"
                >
                  apply
                </button>
              </div>
            </div>
          </NavLink>

          <div className="custom_service_box">
            <h2 className="text-muted p-5 mt-3 text-uppercase">
              advanced service
            </h2>
            <div className="card mt-5s custom_service">
              <div className="card-header">Featured</div>
              <div class="card-body">
                <h5 className="card-title text-uppercase fw-bold">
                  coustom project{" "}
                </h5>
                <p className="card-text">
                  apply for advanced and specific work
                </p>

                <NavLink exact to="/contact" className="navlink">
                  <button
                    type="button"
                    class=" text-uppercase  secondary-button ms-2"
                    id="button3"
                  >
                    apply
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          {/* ................... card 1 ...........
          <div className="card ms-5" style={{ width: 300 }}>
            <img src={service1} className="card-img-top" alt="web dev" />
            <div className="card-body">
              <h5 className="card-title fw-bold text-uppercase">
                s/w development
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>

              <button
                type="button"
                class=" text-uppercase button secondary-button ms-2"
              >
                get CV
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Service;
