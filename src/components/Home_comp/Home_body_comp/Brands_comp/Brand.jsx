import React from "react";
import "./Brand.css";

const Brand = (props) => {
  return (
    <div>
      <div className="brands  ">
        <img className="brands_img " src={props.img} alt="1" />
      </div>
    </div>
  );
};

export default Brand;
