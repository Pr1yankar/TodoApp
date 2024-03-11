/////////////////////////////////////////////////////////////
//
//  @
//  Made On Marh 05 '24
//
//
/////////////////////////////////////////////////////////////

import { useState } from "react";
import "./assets/App.css";
import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes  } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import { renderMatches } from "react-router-dom";
import { HomePage } from "./HomePage.jsx";
import Footer from "./footer.jsx";
import MainBody from "./todopage.jsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/"  element={<HomePage /> } />
          <Route path="/home" element={<MainBody/>}/>
        </Routes>
      </Router>
        <Footer/>
    </>
  );
}

export default App;
