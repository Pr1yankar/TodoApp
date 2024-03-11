/////////////////////////////////////////////////////////////
//
//  @
//  Made On Marh 06 '24
//
//
/////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";

interface ButtonProps {
  Name: string;
  Onclick?;
  Type?: "submit" | "reset" | "button";
  Style?: "primary" | "secondary" | "success" | "dark" | "info";
  Button_Size?: "sm" | "lg" | "";
  ExtraCss?: string;
}

function CreateButtons({
  Name,
  Onclick = () => {},
  Type = "button",
  Style = "primary",
  Button_Size = "",
  ExtraCss,
}: ButtonProps) {
  if (Button_Size != "") Button_Size = "btn-" + Button_Size;

  let st = `btn btn-${Style} ${Button_Size} rounded-4 font-bold text-center font-mono  custom-font px-4 ${ExtraCss}`;
  return (
    <a type={Type} className={st} onClick={Onclick} key={Name}>
      {Name}
    </a>
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
        <label htmlFor={Id} className="text-xs text-gray-700 custom-font">
          {label}
        </label>
      </div>
    </>
  );
}

function Input({
  type = "text",
  id,
  name,
  label,
  LabelExtraCss,
  InputExtraCss,
}) {
  return (
    <>
      <label
        htmlFor={id}
        className={`leading-7 fs-6 text-gray-900 font-semibold fw-normal font-mono custom-font ${LabelExtraCss}`}
      >
        {label}
      </label>
      <input
        type={type}
        key={id}
        id={id}
        name={name}
        className={` w-full bg-transparent rounded-5 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colorsduration-200 ease-in-out ${InputExtraCss}`}
      />
    </>
  );
}

function ParalleInput({ FInput, SInput }) {
  return (
    <>
      <div className="relative flex  max-sm:flex-col items-center w-full ">
        <div className="relative flex flex-col items-center px-1">{FInput}</div>
        <div className="relative flex flex-col items-center px-1">{SInput}</div>
      </div>
    </>
  );
}

function Form({
  Base_key,
  Heading,
  Tags,
  Button,
  AffterButton = [],
  ExtraCss,
}) {
  return (
    <>
      <div
        className={
          "rounded-lg p-8 flex flex-col md:ml-auto w-full mt-1 md:mt-0 items-center " +
          ExtraCss
        }
        key={Base_key + "-Form-base"}
      >
        <h1
          className="text-gray-900 text-5xl font-medium title-font mb-3 custom-center custom-font"
          key={`${Base_key}-Form-Heading`}
        >
          {Heading}
        </h1>

        {Tags.map((tag, index) => (
          <div
            className="relative mb-3 flex flex-col items-center w-full gap-1"
            key={`${Base_key}-Form-BeforeButton${index}`}
          >
            {tag}
          </div>
        ))}
        {Button}

        {AffterButton.map((tag, index) => (
          <div
            className="relative mb-3 flex flex-col items-center w-full gap-1"
            key={`${Base_key}-Form-AffterButton${index}`}
          >
            {tag}
          </div>
        ))}
      </div>
    </>
  );
}

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
      <div className="container px-5 py-20 mx-auto flex flex-wrap items-center">
        <AsideLeft Content={LeftContent} />
        <AsideRight Content={RightContent} />
      </div>
    </section>
  );
}

// TODO :: Need to implemented

// TODO :: {
//   
// }

function TextEffect({Text , Delay = 300}) {
 
  
  let [Base, setBase] = useState(Text[0]);
  let [index , setIndex] = useState(1)
  useEffect(() => {
      if(index >= Text.length) return;
      let interval = setInterval(() => {
        setBase((prev) => {
          return (prev + Text[index])
        });
      setIndex((index) => index+1)
        
      }, Delay);
      
    
    return () => clearInterval(interval)
  },
    
  [Base]);

  return (
    <>{Base}</>
  );
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
