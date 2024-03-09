/////////////////////////////////////////////////////////////
//
//  @
//  Made On Marh 06 '24
//
//
/////////////////////////////////////////////////////////////

import { useEffect, useState } from "react";
import {
  Input,
  ParalleInput,
  CreateButtons,
  CheckBox,
  Partitionar,
  Form,
} from "./assets/design.tsx";
import "./assets/App.css";

import NavBar from "./assets/navigator.tsx";
import { Button } from "bootstrap";

import "bootstrap/dist/css/bootstrap.css";

function Login() {

  const CustomCss = " text-grey border-black";

  let FirstName = <Input name="fname" id="fname" label="Fist Name" InputExtraCss= {CustomCss} />;
  let LastName = <Input name="lname" id="lname" label="Last Name" InputExtraCss= {CustomCss}/>;

  let UserName = <ParalleInput FInput={FirstName} SInput={LastName} />;

  let Email = <Input name="email" id="email" type="email" label={"Email"} InputExtraCss= {CustomCss} />;
  let Password = (
    <Input name="password" id="password" type="password" label={"Password"} InputExtraCss= {CustomCss} />
  );
  let ConfirmPassword = (
    <Input
      name="cpassword"
      id="cpassword"
      type="password"
      label={"Confirm Password"} InputExtraCss= {CustomCss}
    />
  );

  let Policy = (
    <CheckBox name={"pollicy"} id="pollicy" label="I accept the t&c" />
  );

  let Submit = <CreateButtons Name="Submit" Type="Submit" Style="dark" />;

  let Toggler = <a href="#">Already Have Account Sign In</a>;

  return (
    <>
      <Form
        Heading={"Log In"}
        Tags={[UserName, Email, Password, ConfirmPassword, Policy]}
        Button={Submit}
        ExtraCss={"glass-container"}
        AffterButton={[Toggler]}
      />
    </>
  );
}

function SingIn() {
  let Email = <Input name="email" id="email" type="email" label={"Email"} />;
  let Password = (
    <Input name="password" id="password" type="password" label={"Password"} />
  );

  let Submit = <CreateButtons Name="Submit" Type="Submit" Style="dark" />;

  return (
    <>
      <Form
        Heading={"Log In"}
        Tags={[Email, Password]}
        Button={Submit}
        ExtraCss={"glass-container"}
        Base_key={"SignIn"}
      />
    </>
  );
}

function BasePageNav() {
  let Logo = <p className="mx-5 font-extrabold text-2xl">LOGO</p>;
  const BaseStyles = "btn font-bold border-none text-cyan-50 NavLinksCss";
  const TextStyles = " ";
  const ActiveStyles = ["active", "disabled"];

  let HomeIconList = [
    {
      Name: "Home",
      Id: "home",
      key: "Home",
      fn: null,
    },
    {
      Name: "About",
      Id: "about",
      key: "About",
      fn: null,
    },
    {
      Name : "Contacts",
      Id : "contacts",
      key : "Contacts",
      fn : null
    },
  ];

  let CurrActive = HomeIconList[0].Id;

  const SetActive = (e) => {
    document.getElementById(CurrActive);
  };

  function handleRegionClick(fn, e) {
    // fn();
    console.log(e);
    SetActive(e);
    let Pacive = document.getElementById(CurrActive);
    Pacive.classList.remove(...ActiveStyles);
    let element = document.getElementById(e);
    element.classList.add(...ActiveStyles);
    CurrActive = e;
  }
  
  let tags = HomeIconList.map((icon,index) => {
    return (
      <>
        <div>
          <a
            className=   {index == 0 ? BaseStyles + ActiveStyles.map((items) => " " + items) : BaseStyles }  
            id={icon.Id}
            onClick={() => handleRegionClick(icon.fn, icon.Id)}
            key={icon.key}
          >
            <p className={TextStyles}>{icon.Name}</p>
          </a>
        </div>
      </>
    );
  });
  
  const [Logger, SetLogger] = useState("Log In");
  const [Label, SetLabel] = useState("email");
  function LoggerToggler() {
    if (Logger == "Log In") {
      SetLogger("Sign In");
      SetLabel("fname");
    } else {
      SetLogger("Log In");
      SetLabel("email");
    }
  }

  const LoggerButton = (
    <label htmlFor={Label} className=" px-4 text-nowrap">
      <CreateButtons
        Name={Logger}
        Onclick={LoggerToggler}
        Button_Size="sm"
        Style="light"
        ExtraCss="bg-slate-100 text-gray-450 hover:text-gray-900 shadow hover:shadow-inner"
      />
    </label>
  );

  return (
    <>
    
      <NavBar
        Icon={Logo}
        Position="sticky-top"
        // Left={[Hi, Hi, Hi]}
        // Center={[...tags]}
        ExtraCss=" "
        Right={[...tags, LoggerButton]}
      />
    </>
  );
}

function BaseFooter() {
  return (
    <>
     <footer className="container-fluid d-block text-gray-600 body-font bg-white">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Tailblocks</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    </>
  );
}

function HomePage() {
  // const [Data,setData] = useState({})

  //  const func = async () =>{
  //       const p = await fetch("http://127.0.0.1:5000/")
  //       let response = await p.json()
  //       return response
  //  }

  //  const func2= async () =>{
  //       let d = await func()
  //       console.log(d)
  //  }
  //  func2()

  // const func =
  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/").then(
  //     res =>  res.json()
  //   ).then(
  //     data=>{
  //       setData(data)
  //       console.log(Data)
  //     }
  //   )
  // },[])

  return (
    <>
    
    <div className="">

       
        <div className="background-outfit ">
          <BasePageNav />
            <Partitionar ExtraCss={"postion-absolute"} LeftContent={""} RightContent={<Login />} />
        </div>
        
     
        
         
     
    </div>

      
       
    </>
  );
}

export {  HomePage , BaseFooter };
