import { Navigate, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";

const Server = "http://127.0.0.1:5000/";

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

  if (getCookie(key) || localStorage.getItem(key)) {
    return true;
  }

  return false;
}

function AuthLog() {
  let Authinticate = Auth();
  if (Authinticate) {
    return <Navigate to="/home" />;
  }
  return <Navigate to= "/login" /> 
}


async function PostData(to, Data) {
  let response = await axios.post(Server + to, Data).then((Res) => {
    return Res.data;
  });
  return response;
}

interface Login {
  UserName: string;
  Password: string;
  Email: string;
}

async function SubmitLoginData(Data: Login) {
  const [Response, ResposeData] = await PostData("login", Data);
  if (Response == true) {
    SetCookie("todoappkey", ResposeData);
  }
  return [Response,ResposeData];
}

interface Signin{
  Password : string ;
  Email : string ;
}

async function SubmitSigninData( Data : Signin) {
  
  const [Response , ResposeData] = await PostData("signin", Data);
  if(Response == true ){
    SetCookie("todoappkey", ResposeData)
  }
  return [Response, ResposeData];
  
}

export { SubmitLoginData, SubmitSigninData, Auth, AuthLog };
