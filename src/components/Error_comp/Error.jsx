import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>you got an error!!</h1>
      <NavLink className="nav-link" exact to="/">
        go back to home page
      </NavLink>
    </div>
  );
};

export default Error;
