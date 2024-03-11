import React, { useState } from "react";
import { Partitionar } from "./assets/design";
import { BasePageNav } from "./HomePage";
import NavBar from "./assets/navigator";
import { CreateButtons, Input, ParalleInput } from "./assets/design";
import "./assets/App.css";
import AddTaskForm from "./Addtask";


function UpcomingTasksCards({ TaskName }) {
  return (
    <>
      <div
        className="glass-container p-4 my-4 "
        style={{ width: "18rem" }}
        key={TaskName}
      >
        <div className=" card-body flex flex-col justify-items-center items-center gap-1  ">
          <h5 className="text-lg ">Card title</h5>

          <p className="text-sm">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className="text-xs">
            Added On: <span className="text-red-900">date</span>
          </p>
          <p className="text-xs">
            Added On: <span className="text-red-900">date</span>
          </p>
        </div>
      </div>
    </>
  );
}

function UpcomingTasks({UpcomingTask}) {
  let tasks = ["hello world", "jusi", "akgakj", ";adfj", ";akjf"];
  return (
    <>
      <div className="container w-full py-3 flex flex-col justify-items-center ">
        <h1 className="font-bold text-3xl mx-10 line-clamp-3 text-gray-500  ">
          UpComing Tasks
        </h1>
        <div className="container flex  max-sm:flex-wrap-reverse sm-max:overflow-x-scroll  overflow-scroll   justify-items-center ">
          {UpcomingTask
          ? UpcomingTask.map((task) => (
            <div className="mx-2 ">
              <UpcomingTasksCards TaskName={task} />
            </div>
          )) :
          <p className=" p-10 font-bold text-xl text-gray-900">No Deadline within 7days</p>}
        </div>
      </div>
    </>
  );
}

function Teams() {
  const Heading = <h1 className="font-black">Teams ( 25 )</h1>;
  const SeeAll = <button>see all</button>;
  return (
    <>
      <div className="flex flex-wrap flex-col container w-full pb-5 pt-3  justify-items-center glass-container">
        <NavBar Left={[Heading]} Right={[SeeAll]} ExtraCss="my-2" />

        <div className="bg-white">
          <p></p>
        </div>
      </div>
    </>
  );
}

import GetCalender from "./calender";
function Calender() {
  const Heading = <p className="text-slate-600 text-base">Calander</p>;
  // const SeeAll = <button>see all</button>;
  let info = GetCalender();
  const Weekdays= [
    "sun",
    "mon",
    "tues",
    "wed",
    "thus",
    "fri",
    "sat"
  ]
  const Heading2 = <p className="text-slate-900 text-2xl">{info.ret["month"]},{info.ret.year}</p>;
  return (
    <>
      <div className="flex flex-wrap flex-col container w-full pb-5 pt-3  justify-items-center glass-container">
        {Heading}
        {Heading2}

        <div className="flex py-2  justify-items-center items-center">
          {
            Weekdays.map((day) => {
              return <span className="px-1 w-full bg-transparent text-sm" >{day}</span>
            })
          }
        </div>
        <div className="flex py-2 justify-items-center items-center ">
          {
            info.ret["week-days"].map((date) =>{
              if(date == info.ret["date"]){

                return <span className="px-1 w-full bg-gray-500 rounded-full text-sm " >{date}</span>
              }
              return <span className="px-1 w-full bg-transparent text-sm" >{date}</span>
            })
          }
        </div>
      </div>
    </>
  );
}
function RecentActivity() {
  return (
    <>
      <h2>Recent Activity</h2>
    </>
  );
}

function ExtraFeatures() {
  const Styles = "py-5";

  return (
    <>
      <div className="container d-flex flex-col ">
        <div className={Styles}>
          <Teams />
        </div>
        <div className={Styles}>
          <Calender />
        </div>
        <div className={Styles}>
          <RecentActivity />
        </div>
      </div>
    </>
  );
}
function MyTasksNav() {
  const Heading = <h1 className="font-bold text-xl">My Tasks</h1>;

  const [ViewAddTask,SetViewAddTask] = useState(<></>)
  const[TaskButtonState , SetTaskButtonState] = useState("+ Add Task")

  const AddTaskBar = <AddTaskForm/>
  function OpenAddTask(){
    if(TaskButtonState === "+ Add Task"){
      SetViewAddTask(AddTaskBar)
      SetTaskButtonState("X close")
    }
    else{
      SetViewAddTask(<></>)
      SetTaskButtonState("+ Add Task")
    }
  }
  
  const AddTaskButton = (
    <CreateButtons
      Name={TaskButtonState}
      Button_Size="sm"
      Onclick={OpenAddTask}
      Style="light"
      ExtraCss="bg-slate-100 text-gray-900 shadow hover:shadow-inner"
    />
  );

  const BaseStyles =
    "btn font-bold border-none text-nowrap NavLinksCss max-sm:hidden";
  const TextStyles = " ";
  const ActiveStyles = ["active", "disabled", "underline"];

  let HomeIconList = [
    {
      Name: "In Progress",
      Id: "inprogress",
      key: "inprogress",
      fn: null,
    },
    {
      Name: "New assigned",
      Id: "newassigned",
      key: "newassigned",
      fn: null,
    },
    {
      Name: "Completed",
      Id: "completed",
      key: "completed",
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

  return (
    <>
      <div className="border-b-2 pb-2 border-gray-900">
        <NavBar Left={[Heading]} Right={[AddTaskButton]} />
        <NavBar Left={[...tags]} />
        {ViewAddTask}
      </div>
    </>
  );
}

function MyTaskList({TaskName, id}) {
  return (<>
  <div className="flex justify-items-center items-center container w-11/12 py-3 px-10 m-3 border-b-2 border-gray-600   glass-container">
    
    <div className=" mx-2 w-100">
      <p>hi</p>
      </div>
      <div className=" mx-2 ">

    <button className="py-1 px-4 border-1 btn-dark rounded-5 btn btn-sm">Edit</button>
      </div>
      <div className="  ">

    <button className="py-1 px-4 btn-dark  border-1 rounded-5  btn btn-sm">Delete</button>
      </div>
  </div>
  </>);
}

function MyTasks() {
  return (
    <>
      <div className="glass-container p-4 ">
        <MyTasksNav />
        <MyTaskList/>
      </div>
    </>
  );
}

function HomeNav() {
  let Logo = <p className="mx-5 font-extrabold text-2xl">LOGO</p>;
  const BaseStyles = "btn font-bold border-none  NavLinksCss max-sm:hidden";
  const TextStyles = " ";
  const ActiveStyles = ["active", "disabled"];

  let HomeIconList = [
    {
      Name: "MyProject",
      Id: "myproject",
      key: "myproject",
      fn: null,
    },
    {
      Name: "Planning",
      Id: "planning",
      key: "planning",
      fn: null,
    },
    // {
    //   Name: "Contacts",
    //   Id: "contacts",
    //   key: "Contacts",
    //   fn: null,
    // },
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

  let SearchInput = (
    <input
      className=" text-black placeholder-black bg-transparent rounded-5 border-2 border-indigo-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colorsduration-200 ease-in-out shadow-inner"
      placeholder="search task"
      id="search-task"
    />
  );

  let SearchButton = (
    <label htmlFor="search-task" className=" px-2 text-nowrap">
      <CreateButtons
        Name={"Search"}
        Button_Size="sm"
        Style="light"
        ExtraCss=" bg-slate-100 text-gray-900 shadow hover:shadow-inner"
      />
    </label>
  );

  const LoggerButton = (
    <label className=" px-4 text-nowrap">
      <CreateButtons
        Name={"Sign Out"}
        Button_Size="sm"
        Style="light"
        ExtraCss="bg-slate-100 text-gray-900 shadow hover:shadow-inner"
      />
    </label>
  );

  return (
    <>
      <NavBar
        Icon={Logo}
        Position="sticky-top"
        ExtraCss=" glass-container2 "
        Left={[...tags]}
        Center={[SearchInput, SearchButton]}
        Right={[LoggerButton]}
      />
    </>
  );
}

function MainBody({ val }) {
  return (
    <>
      <div className="dark-bg">
        <HomeNav />
        <div className="container-fluid  mx-auto flex flex-wrap items-center ">
          <div className="lg:w-4/6 md:w-1/2 p-4 ">
            <div className=" my-10 border-1  shadow-2xl glass-container">
              <UpcomingTasks />
            </div>
            <div>
              <MyTasks />
            </div>
          </div>
          <div className="lg:w-2/6 md:w-1/2 flex p-4 md:pr-16 lg:pr-0 pr-0">
            <ExtraFeatures />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBody;
