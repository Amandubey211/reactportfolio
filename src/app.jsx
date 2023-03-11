import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

import Home from "./components/Home_comp/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/About_comp/About";
import Contact from "./components/Contact_comp/Contact_copm/Contact";
import Service from "./components/Service_comp/Service";
import Error from "./components/Error_comp/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/service" element={<Service />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
