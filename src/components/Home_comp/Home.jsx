import React from "react";
import Navbar from "../NavBar_comp/Navbar";
// import Image1 from "../../images/cake 1.jpg";
import "./Home.css";
import Header from "./Header-comp/Header";
// import Footer from "../Footer_comp/Footer";
import HomeBody from "./Home_body_comp/Home_body";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HomeBody />

      {/* <div className="container">
        <h1>welcome to the homepage</h1>
      </div> */}
    </>
  );
};

export default Home;
