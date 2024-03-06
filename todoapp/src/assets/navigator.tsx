///////////////////////////////////////////////////////////// 
// 
//  @
//  Made On Marh 06 '24
//
//
///////////////////////////////////////////////////////////// 

import React from "react";



interface Prop {
  Position : string ;
  Icon : string ;
  Left : [];
  Center : [] ;
  Right : [] ;
}

// TODO :: Need To be Inplemented

function NavBar({ Position, Icon, Left, Center, Right } : Prop) {
  return (
    <header className="container text-gray-600 body-font w-full py-3">
      <div className={"grid grid-cols-3 gap-4 w-full "}>
        
        

        <div>
          <div className="flex flex-row justify-content-start">
            {Left.map((items) => (
              <div className="px-2">{items}</div>
            ))}
          </div>
        </div>

        {/* Center */}
        
        <div>
      
          <div className="d-flex flex-row justify-content-evenly">
            {Center.map((items) => (
              <div className="px-2">{items}</div>
            ))}
          </div>
        
        </div>

        {/* Right */}

        <div>
          <div className="d-flex flex-row justify-content-end">
            {Right.map((items) => (
              <div className="px-2">{items}</div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
