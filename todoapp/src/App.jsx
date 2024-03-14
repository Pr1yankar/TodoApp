/////////////////////////////////////////////////////////////
//
//  @
//  Made On Marh 05 '24
//
//
/////////////////////////////////////////////////////////////

import { useState } from "react";
import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes  } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import { renderMatches } from "react-router-dom";
import { HomePage } from "./Login/HomePage.jsx";
import Footer from "./assets/footer.jsx";
import MainBody from "./Home/todopage.jsx";
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
