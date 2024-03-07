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


const list  = {
  "Home" : "#"
}
const button = "sign out";

import NavBar  from "./assets/navigator.tsx";
import { Form , AsideLeft ,Partitionar , AsideRight , CheckBox } from "./assets/design.tsx";

import {Login , SingIn} from "./HomePage.jsx";



function App() {
  let Hi = <h1 key="H" >Hello World</h1>
  const CAside = <AsideLeft/>
  return (
    <>
    <NavBar Position="position-absolute" Left={[Hi,Hi,Hi]} />
    <Partitionar LeftContent={""} RightContent={<SingIn/>}/>
    
    
    </>
  );
}

export default App;
