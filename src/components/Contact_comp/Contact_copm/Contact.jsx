import React from "react";
import Navbar from "../../NavBar_comp/Navbar";
import "./Contact.css";
import Pinfocard from "./pinfo_comp/Pinfo_card";
import Form from "./Form_comp/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container contact_section">
        <h2 className="text-uppercase mt-5 p-0 fw-bold">
          get in touch
          {/* <span className="text-muted text-lowercase3 h-5 fst-italic">
            {" "}
            by filling{" "}
          </span> */}
        </h2>
        <h6 className="text-muted text-capitalize mt-2 mb-3">
          any question or remark? just write a message
        </h6>

        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 first-column">
            <Pinfocard />
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 second-column">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
