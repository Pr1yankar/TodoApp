///////////////////////////////////////////////////////////// 
// 
//  @
//  Made On Marh 06 '24
//
//
///////////////////////////////////////////////////////////// 

import React from "react";
import "../App.css"


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
    <header className={`container-fluid text-gray-600 body-font w-full py-1 grid grid-cols-3   w-full  items-center ${Position} ${ExtraCss}` }>
      
        
        

        <div className="shrink">
          <div className="flex flex-row justify-content-start items-center shrink">
            {Icon}
            {Left.map((items,index) => (
              <div className="px-2" key={`Nav-Left-Key${index}`}>{items}</div>
            ))}
          </div>
        </div>

        {/* Center */}
        
        <div className="shrink">
      
          <div className="flex flex-row justify-content-evenly items-center shrink">
            {Center.map((items,index) => (
              <div className="px-2" key={`Nav-Center-Key${index}`}>{items}</div>
            ))}
          </div>
        
        </div>

        {/* Right */}

        <div className="shrink">
          <div className=" flex flex-row justify-content-end items-center shrink">
            {Right.map((items,index) => (
              <div className="px-2" key={`Nav-Right-Key${index}`}>{items}</div>
            ))}
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
