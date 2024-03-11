import { Navigate, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import MainBody from "./todopage";
import { HomePage } from "./HomePage";

function getCookie(key) {
  var b = document.cookie.match("(|^;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}
function SetCookie(key: string, val: string) {
  document.cookie = `${key}=${val}`;
}

function SetSessionObject(key: string, obj: Object) {
  sessionStorage.setItem(key, JSON.stringify(obj));
}
function GetSessionObject(key: string) {
  let val = sessionStorage.getItem(key);
  return val ? JSON.parse(val) : null;
}

function Auth() {
  let key = "todoappkey";
  console.log(key);
  let Cookieval = getCookie(key);

  if (Cookieval) {
    return <MainBody val={Cookieval} />;
  }
  let Localstrval = localStorage.getItem(key);
  if (Localstrval) {
    return <MainBody val={Localstrval} />;
  }

  return <HomePage />;
}

function AuthLog() {
  let Server = "http://127.0.0.1:5000/";
  useEffect(() => {
    let key = fetch(Server)
      .then((val) => {
        return val.json();
      })
      .then((val2) => {
        return val2;
      });
    console.log(key);
  }, []);

  return <Navigate to="/home" />;
}

function AuthSing() {}

import axios from "axios";

async function SubmitLoginData(Username = " ", Email = "", Password = "") {
  let data = {
    username: Username,
    email: Email,
    password: Password,
  };
 
  let p = await axios
    .post("http://127.0.0.1:5000/login", data)
    .then((response) => response.data);
  if (p["status"]) {
    let Key = p["key"];
    localStorage.setItem("todoappkey", Key);
    return [true , p["key"]]
  }
  else{
    return [false ,p["error"]]
  }
}

async function SubmitSigninData( Email = "", Password = "") {
  let data = {
    email: Email,
    password: Password,
  };
 
  let p = await axios
    .post("http://127.0.0.1:5000/signin", data)
    .then((response) => response.data);
    console.log(p)
  if (p["status"]) {
    let Key = p["key"];
    localStorage.setItem("todoappkey", Key);
    return [true , p["key"]]
  }
  else{
    return [false ,p["error"]]
  }
}


export { SubmitLoginData,SubmitSigninData, Auth, AuthLog };
