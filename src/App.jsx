import React from "react";

import Home from "./Home";
import MyContact from "./MyContact";
import About from "./About";
import Service from "./Service";
import NavBar from "./NavBar";
import Footer from "./Footer";


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route,Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";

const App = () => {

  return (
      <>
      
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route  path = '/' element = {<Home />}/>
            <Route  path = "/About" element = {<About />}/>
            <Route  path = "/Service" element = {<Service />}/>
            <Route  path = "/Contact" element = {<MyContact />}/>
          </Routes>
          {/* <Footer /> */}
      
        </BrowserRouter>
      </>       
  );
};

export default App;