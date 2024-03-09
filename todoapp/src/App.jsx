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

import "bootstrap/dist/css/bootstrap.css"


import { Partitionar } from "./assets/design.tsx";

import {HomePage , BaseFooter} from "./HomePage.jsx";



function App() {
 

  return (
    <>
        <HomePage/>
        <BaseFooter/>
    
    </>
  );
}

export default App;
