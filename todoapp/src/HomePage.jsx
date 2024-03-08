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
  let FirstName = <Input name="fname" id="fname" label="Fist Name" />;
  let LastName = <Input name="lname" id="lname" label="Last Name" />;

  let UserName = <ParalleInput FInput={FirstName} SInput={LastName} />;

  let Email = <Input name="email" id="email" type="email" label={"Email"} />;
  let Password = (
    <Input name="password" id="password" type="password" label={"Password"} />
  );
  let ConfirmPassword = (
    <Input
      name="cpassword"
      id="cpassword"
      type="password"
      label={"Confirm Password"}
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
  const BaseStyles = "btn font-bold border-none text-cyan-50 ";
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
        Style="success"
        ExtraCss="text-slate-400 hover:text-sky-400  "
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
      <div className="container-fluid bg-white">
        <div className="flex flex-col">hello wolrd</div>
      </div>
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
      <div className="bg-black">
        <div className="container-fluid background-outfit">
          <BasePageNav />
          <main>
            <Partitionar LeftContent={""} RightContent={<Login />} />
          </main>
        </div>
        <footer className="container-fluid">
    
        </footer>
      </div>
    </>
  );
}

export { Login, SingIn, BasePageNav, HomePage };
