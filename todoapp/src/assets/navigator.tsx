///////////////////////////////////////////////////////////// 
// 
//  @
//  Made On Marh 06 '24
//
//
///////////////////////////////////////////////////////////// 

import React from "react";
import "./App.css"


interface INav {
  Position : string ;
  Icon : string ;
  Left? : [];
  Center? : [] ;
  Right? : [] ;
  ExtraCss? : string;
}



function NavBar({ Position, Icon, Left = [], Center = [], Right=[] , ExtraCss} : INav) {

  

  return (
    <header className={`container-fluid text-gray-600 body-font w-full py-1 ${Position} ${ExtraCss}` }>
      <div className={"grid grid-cols-3  w-full items-center "}>
        
        

        <div>
          <div className="d-flex flex-row justify-content-start items-center ">
            {Icon}
            {Left.map((items,index) => (
              <div className="px-2" key={`Nav-Left-Key${index}`}>{items}</div>
            ))}
          </div>
        </div>

        {/* Center */}
        
        <div>
      
          <div className="d-flex flex-row justify-content-evenly items-center ">
            {Center.map((items,index) => (
              <div className="px-2" key={`Nav-Center-Key${index}`}>{items}</div>
            ))}
          </div>
        
        </div>

        {/* Right */}

        <div>
          <div className="d-flex flex-row justify-content-end items-center ">
            {Right.map((items,index) => (
              <div className="px-2" key={`Nav-Right-Key${index}`}>{items}</div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}


interface INavButton{
  Name : string ;
  link : string ;
  id : string ;
}

interface INavButtons{
  Buttons : INavButton[] ;
  ActiveCss : string ;
  NotActive : string ;
  CommonCss : string ;

}


function NavButtons ({Buttons = [] , ActiveCss , NotActive , CommonCss} : INavButtons) {

  function DeActivate(){
    
  }



  <>
    {
      Buttons.map((btn) => (
        <a href={btn.link} className={"btn border-none " +{CommonCss} } id={btn.id} >
          <p>
            {btn.Name}
          </p>
        </a>
      ))
    }
  </>

}










export default NavBar;
