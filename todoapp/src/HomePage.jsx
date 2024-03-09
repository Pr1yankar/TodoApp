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
      "Name ": `${fname} ${lname}`,
      Email: email,
      Password: password,
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

  function SubitForm() {
    // console.log("Got Here")
    const data = FetchDataFromForm();
    if (data[0]) {
      console.log(data[1]);
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
      Style="dark"
      ExtraCss="shadow-[inset_20px_20px_20px_0_rgba(0,0,0,0.1)]"
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

function SingIn() {
  const CustomCss =
    " text-grey border-black shadow-[inset_20px_20px_20px_0_rgba(0,0,0,0.1)]";

  const [CurrError, SetError] = useState("");

  let ShowError = <p className="text-center text-sm text-red-600 my-1">{CurrError}</p>;

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

  function SubmitForm() {
    let data = FetchDataFromForm();

    if (data[0]) {
      console.log(data[1]);
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
      Style="dark"
      ExtraCss="shadow-[inset_20px_20px_20px_0_rgba(0,0,0,0.1)]"
      Onclick={SubmitForm}
    />
  );

  return (
    <>
      <Form
        Heading={"Log In"}
        Tags={[Email, Password]}
        Button={Submit}
        ExtraCss={"glass-container"}
        Base_key={"SignIn"}
        AffterButton={[ShowError]}
      />
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

function BaseFooter() {
  return (
    <>
      <footer className="container-fluid d-block text-gray-600 body-font bg-white">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Tailblocks</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2020 Tailblocks —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @knyttneve
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
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

import About from "./about.jsx";

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

  const [CurrForm, SetForm] = useState(<Login />);

  return (
    <>
      <div className="">
        <BasePageNav SetForm={SetForm} />
        <div className="background-outfit postion-absolute top-0">
          <Partitionar
            ExtraCss={"postion-absolute top-0"}
            LeftContent={""}
            RightContent={CurrForm}
          />
        </div>

        <About />
      </div>
    </>
  );
}

export { HomePage, BaseFooter };
