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
  TextEffect,
} from "../assets/design.tsx";
import "../App.css";
import {SubmitLoginData , SubmitSigninData} from "../assets/Auth.tsx"
import NavBar from "../assets/navigator.tsx";
import { Button } from "bootstrap";
import { redirect, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Login() {
  const CustomCss =
    " text-grey border-black shadow-[inset_20px_20px_20px_0_rgba(0,0,0,0.1)]";

  const [Error, SetError] = useState("");

  let ShowError = <p className="text-center text-sm text-red-600">{Error}</p>;

  function FetchDataFromForm() {
    let fname = document.getElementById("fname").value;

    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("cpassword").value;
    let policy = document.getElementById("pollicy").checked;
    let ret_value = {
      username: `${fname} ${lname}`,
      email: email,
      password: password,
    };

    if (fname == "" || lname == "") {
      return [false, "Name Can't be blank."];
    }
    if (email == "") {
      return [false, "Email Can't be blank."];
    }

    if (password == "") {
      return [false, "Password Can't be blank."];
    }

    if (policy == true && password === confirmpassword) {
      return [true, ret_value];
    }

    if (policy != true) {
      return [false, "Please select the check-box"];
    } else {
      return [
        false,
        "To create a valid password, both the password and confirm password fields value must be matched.",
      ];
    }
  }
  const navigate = useNavigate();
  async function SubitForm() {
    const data = FetchDataFromForm();
    if (data[0]) {
      console.log(data[1]);
      SetError("");
      
      let res = await SubmitLoginData(UserName = data[1]["username"],Email = data[1]["email"],Password = data[1]["password"])
    
      if(res[0]){
        navigate("/home")
      }
      else{
        SetError(res[1])
      }
    } else {
      SetError(data[1]);
    }
  }

  let FirstName = (
    <Input
      name="fname"
      id="fname"
      label="Fist Name"
      InputExtraCss={CustomCss}
    />
  );
  let LastName = (
    <Input
      name="lname"
      id="lname"
      label="Last Name"
      InputExtraCss={CustomCss}
    />
  );

  let UserName = <ParalleInput FInput={FirstName} SInput={LastName} />;

  let Email = (
    <Input
      name="email"
      id="email"
      type="email"
      label={"Email"}
      InputExtraCss={CustomCss}
    />
  );
  let Password = (
    <Input
      name="password"
      id="password"
      type="password"
      label={"Password"}
      InputExtraCss={CustomCss}
    />
  );
  let ConfirmPassword = (
    <Input
      name="cpassword"
      id="cpassword"
      type="password"
      label={"Confirm Password"}
      InputExtraCss={CustomCss}
    />
  );

  let Policy = (
    <CheckBox name={"pollicy"} Id="pollicy" label="I accept the t&c" />
  );

  let Submit = (
    <CreateButtons
      Name="Submit"
      Type="Submit"
      Style="light"
      ExtraCss=" border-none shadow-[inset_20px_20px_20px_0_rgba(0,0,0,0.1)]"
      Onclick={SubitForm}
    />
  );

  return (
    <>
      <form>
        <Form
          Heading={"Log In"}
          Tags={[UserName, Email, Password, ConfirmPassword, Policy]}
          Button={Submit}
          ExtraCss={"glass-container"}
          AffterButton={[ShowError]}
        />
      </form>
    </>
  );
}
// import {Redirect} from "react-router-dom"
function SingIn() {
  const CustomCss =
    " text-grey border-black shadow-[inset_20px_20px_20px_0_rgba(0,0,0,0.1)]";

  const [CurrError, SetError] = useState("");

  let ShowError = (
    <p className="text-center text-sm text-red-600 my-1">{CurrError}</p>
  );

  function FetchDataFromForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email == "") {
      return [false, "Email Can't be Blank."];
    }
    if (password == "") {
      return [false, "Password Can't be Blank."];
    }
    return [true, { email: email, password: password }];
  }

  const navigate = useNavigate();
 async function SubmitForm() {
    let data = FetchDataFromForm();

    if (data[0]) {
      console.log(data[1]);
      SetError("");
      let res = await SubmitSigninData(Email = data[1]["email"],Password = data[1]["password"])
      console.log(res)
      if(res[0]){
        navigate("/home")
      }
      else{
        SetError(res[1])
      }
    } else {
      SetError(data[1]);
    }
  }

  let Email = (
    <Input
      name="email"
      id="email"
      type="email"
      label={"Email"}
      InputExtraCss={CustomCss}
    />
  );
  let Password = (
    <Input
      name="password"
      id="password"
      type="password"
      label={"Password"}
      InputExtraCss={CustomCss}
    />
  );

  let Submit = (
    <CreateButtons
      Name="Submit"
      Type="Submit"
      Style="light"
      ExtraCss="shadow-[inset_20px_20px_20px_0_rgba(0,0,0,0.1)]"
      Onclick={SubmitForm}
    />
  );

  return (
    <>
      <form className="py-5">
        <Form
          Heading={"Log In"}
          Tags={[Email, Password]}
          Button={Submit}
          ExtraCss={"glass-container"}
          Base_key={"SignIn"}
          AffterButton={[ShowError]}
        />
      </form>
    </>
  );
}

function BasePageNav({ SetForm }) {
  let Logo = <p className="mx-5 font-extrabold text-2xl">LOGO</p>;
  const BaseStyles = "btn font-bold border-none  NavLinksCss max-sm:hidden";
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
      Name: "Contacts",
      Id: "contacts",
      key: "Contacts",
      fn: null,
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

  let tags = HomeIconList.map((icon, index) => {
    return (
      <>
        <div>
          <a
            className={
              index == 0
                ? BaseStyles + ActiveStyles.map((items) => " " + items)
                : BaseStyles
            }
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

  const [Logger, SetLogger] = useState("Sign In");
  const [Label, SetLabel] = useState("email");
  function LoggerToggler() {
    if (Logger == "Log In") {
      SetLogger("Sign In");
      SetForm(<Login Toggler={SetForm} />);
      SetLabel("fname");
    } else {
      SetLogger("Log In");
      SetForm(<SingIn Toggler={SetForm} />);
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
        ExtraCss="bg-slate-100 text-grey-900 shadow hover:shadow-inner"
      />
    </label>
  );

  return (
    <>
      <NavBar
        Icon={Logo}
        Position="sticky-top"
        ExtraCss=" glass-container2 "
        Right={[...tags, LoggerButton]}
      />
    </>
  );
}


import About from "./about.jsx";

function HomePage() {
  
  const [CurrForm, SetForm] = useState(<Login />);

  let MyEffect = (
    <>
    <div className="px-20">

      <h1 className="title-font font-medium text-3xl text-gray-900">
  <TextEffect Text={`"Productivity is not about doing more, it's about creating more impact with less effort" -Peter Drucker`} Delay={100}/>
</h1>
    
    </div>
    </>
  );

  return (
    <>
      <div className="dark-bg">
        <BasePageNav SetForm={SetForm} />
        <div className="background-outfit postion-absolute top-0">
          <Partitionar
            ExtraCss={"postion-absolute top-0"}
            LeftContent={MyEffect}
            RightContent={CurrForm}
          />
        </div>

        <About />
      </div>
    </>
  );
}

export { HomePage, BasePageNav ,Login};
