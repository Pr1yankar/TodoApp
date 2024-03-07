/////////////////////////////////////////////////////////////
//
//  @
//  Made On Marh 06 '24
//
//
/////////////////////////////////////////////////////////////

import React, { useState } from "react";

interface ButtonProps {
  Name: string;
  Onclick?: Function;
  Type?: "submit" | "reset" | "button";
  Value?: string;
  Link?: string;
  Style?: "primary" | "secondary" | "success" | "dark" | "info";
  Button_Size?: "sm" | "lg" | "";
}

function CreateButtons({
  Name,
  Onclick = () => {},
  Type = "button",
  Value = "Submit",
  Link = "#",
  Style = "primary",
  Button_Size = "",
}: ButtonProps) {
  if (Button_Size != "") Button_Size = "btn-" + Button_Size;
  console.log(Button_Size);
  let st =
    "btn btn-" +
    Style +
    " " +
    Button_Size +
    " rounded-4 " +
    "font-bold " +
    "text-center " +
    "font-mono " +
    " text-slate-900 hover:text-zinc-50 " +
    " px-2";
  return (
    <>
      <a href={Link}>
        <button
          type="button"
          className={st}
          value={Value}
          onClick={Onclick(this)}
          key={Name}
          name={Name}
        >
          {Name}
        </button>
      </a>
    </>
  );
}

function CheckBox({ Name, Id, Value = "", label }) {
  return (
    <>
      <div className="relative flex flex-row  items-center justify-center ">
        <input
          type="checkbox"
          className="required:border-red-500 default:ring-2 indeterminate:bg-gray-300 mx-1"
          name={Name}
          id={Id}
          value={Value}
        />
        <label htmlFor={Id} className="text-xs text-gray-500 ">
          {label}
        </label>
      </div>
    </>
  );
}

function Input({ type = "text", id, name, label }) {
  return (
    <>
      <label
        htmlFor={id}
        className="leading-7 text-sm text-gray-600 font-semibold"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </>
  );
}

function ParalleInput({ FInput, SInput }) {
  return (
    <>
      <div className="relative flex flex-row items-center w-full gap-1">
        <div className="relative flex flex-col items-center w-50">{FInput}</div>
        <div className="relative flex flex-col items-center w-50">{SInput}</div>
      </div>
    </>
  );
}

function Form({ Heading, Tags, Button }) {
  return (
    <>
      <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-1 md:mt-0 items-center">
        <h1 className="text-gray-900 text-5xl font-medium title-font mb-3 custom-center">
          {Heading}
        </h1>

        {Tags.map((tag) => (
          <div className="relative mb-3 flex flex-col items-center w-full gap-1">
            {tag}
          </div>
        ))}
        {Button}
      </div>
    </>
  );
}

// TODO :: {
//   /* <h1 className="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
// <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p> */
// }

function AsideRight({ Content }) {
  return <div className="lg:w-2/6 md:w-1/2 ">{Content}</div>;
}

function AsideLeft({ Content }) {
  return (
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">{Content}</div>
  );
}

function Partitionar({ LeftContent, RightContent }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <AsideLeft Content={LeftContent} />
        <AsideRight Content={RightContent} />
      </div>
    </section>
  );
}

// TODO :: Need to implemented

function TextEffect() {
  let Write = <h1></h1>;
  let [Base, setBase] = useState(Write);

  return <>
    {Base}
  </>;
}

export {
  Form,
  Partitionar,
  AsideLeft,
  AsideRight,
  Input,
  ParalleInput,
  CreateButtons,
  CheckBox,
  TextEffect,
};
