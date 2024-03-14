import React, { useEffect, useState } from "react";
import NavBar from "../assets/navigator";
import { CreateButtons, Input, ParalleInput } from "../assets/design";
import "../App.css";
import AddTaskForm from "./Addtask";
import GetCalender from "./calender";

function UpcomingTasksCards({
  TaskName,
  TaskDetails,
  TaskStartingDate,
  TaskDeadline,
}) {
  return (
    <>
      <div
        className="glass-container p-4 my-4 "
        style={{ width: "18rem" }}
        key={TaskName}
      >
        <div className=" card-body flex flex-col justify-items-center items-center gap-1  ">
          <h5 className="text-lg ">{TaskName}</h5>

          <p className="text-sm">{TaskDetails}</p>
          <p className="text-xs">
            Added On: <span className="text-red-900">{TaskStartingDate}</span>
          </p>
          <p className="text-xs">
            Deadline: <span className="text-red-900">{TaskDeadline}</span>
          </p>
        </div>
      </div>
    </>
  );
}

function GetUpCommingTasks() {
  return [];
}

function UpcomingTasks({ Tasks }) {
  const Days = 7;
  const UpcommingTasks = GetUpCommingTasks(Days);
  let tasks = ["hello world", "jusi", "akgakj", ";adfj", ";akjf"];
  return (
    <>
      <div className="container w-full py-3 flex flex-col justify-items-center ">
        <h1 className="font-bold text-3xl mx-10 line-clamp-3 text-gray-700  ">
          UpComing Tasks
        </h1>
        <div className="container flex  max-sm:flex-wrap-reverse sm-max:overflow-x-scroll  overflow-scroll   justify-items-center ">
          {UpcommingTasks == [] ? (
            UpcommingTasks.map((task) => (
              <div className="mx-2 ">
                <UpcomingTasksCards TaskName={task} />
              </div>
            ))
          ) : (
            <p className=" p-10 font-bold text-xl text-gray-500">
              No Deadline within {Days}days
            </p>
          )}
          
        </div>
      </div>
    </>
  );
}

function RenderTeams(Teams) {
  return <></>;
}

function Teams({ TeamsCount = 20, TeamJoined }) {
  const Heading = <h1 className="font-black">Teams ( {TeamsCount} )</h1>;
  const SeeAll = <button>see all</button>;
  return (
    <>
      <div className="flex flex-wrap flex-col container w-full pb-5 pt-3  justify-items-center glass-container">
        <NavBar Left={[Heading]} Right={[SeeAll]} ExtraCss="my-2" />

        <div className="m-auto">
          {/* {
            TeamJoined? 
            <div>
              {
              TeamJoined.map((Team,index)=>{
                  // if(index<7){

                  //   return <RenderTeams Teams={Team}/>
                  // }
                  // return (<></>);
                  
              }
              )
              
              }
            </div>
            : <h1 className="text-base font-bold text-gray-500 mt-3 mx-2 px-4">No Group is Added</h1>
          } */}

          <div>
            <div className="mt-3 flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-3 w-full px-3 text-sm font-medium">
          {
             TeamsCount > 7 ? 
             
              <a href="#" className="text-blue-500">
              + {TeamsCount - 7} others
            </a>
             :
             <></>
          }
         
        </div>
      </div>
    </>
  );
}

function Calender() {
  const Heading = <p className="text-slate-600 text-base">Calender</p>;
  let info = GetCalender();
  const Weekdays = ["Sun", "Mon", "Tue", "Wed", "Thus", "Fri", "Sat"];
  const Heading2 = (
    <p className="text-slate-900 text-2xl">
      {info.ret["month"]},{info.ret.year}
    </p>
  );
  return (
    <>
      <div className="flex flex-wrap flex-col container w-full pb-5 pt-3  justify-items-center glass-container">
        {Heading}
        {Heading2}

        <div className="flex py-2  justify-items-center items-center border-b-2 mb-4">
          {Weekdays.map((day) => {
            return (
              <span className="px-1 w-full bg-transparent text-sm">{day}</span>
            );
          })}
        </div>
        <div className="flex py-2 justify-items-center items-center w-full ">
          {info.ret["week-days"].map((date) => {
            if (date == info.ret["date"]) {
              return (
                <span className="  flex w-full  bg-gray-500 rounded-full text-sm ">
                  {date}
                </span>
              );
            }
            return (
              <span className="px-1 w-full bg-transparent text-sm">{date}</span>
            );
          })}
        </div>
      </div>
    </>
  );
}

// TODO::
function RecentActivity() {
  const Heading = <h1 className="font-black text-nowrap">Recent Activity</h1>;
  const SeeAll = <button>Show all</button>;
  return (
    <>
      <div className="flex flex-wrap flex-col container w-full pb-5 pt-3  justify-items-center glass-container">
        <NavBar
          Left={[Heading]}
          Right={[SeeAll]}
          ExtraCss=" my-2 pb-3 border-b-2 border-black "
        />

        <div className="bg-white">
          <p></p>
        </div>
      </div>
    </>
  );
}

function ExtraFeatures() {
  const Styles = "py-5";

  return (
    <>
      <div className="container-fluid w-full flex flex-col ">
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

  const [ViewAddTask, SetViewAddTask] = useState(<></>);
  const [TaskButtonState, SetTaskButtonState] = useState("+ Add Task");

  const AddTaskBar = <AddTaskForm />;
  function OpenAddTask() {
    if (TaskButtonState === "+ Add Task") {
      SetViewAddTask(AddTaskBar);
      SetTaskButtonState("X close");
    } else {
      SetViewAddTask(<></>);
      SetTaskButtonState("+ Add Task");
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
      fn: () => {
        console.log("hello world");
      },
    },
    {
      Name: "New assigned",
      Id: "newassigned",
      key: "newassigned",
      fn: () => {
        console.log("hello world");
      },
    },
    {
      Name: "Completed",
      Id: "completed",
      key: "completed",
      fn: () => {
        console.log("hello world");
      },
    },
  ];

  let CurrActive = HomeIconList[0].Id;

  const SetActive = (e) => {
    document.getElementById(CurrActive);
  };

  function handleRegionClick(e, id) {
    e.fn();
    SetActive(id);
    let Pacive = document.getElementById(CurrActive);
    Pacive.classList.remove(...ActiveStyles);
    let element = document.getElementById(id);
    element.classList.add(...ActiveStyles);
    CurrActive = id;
  }

  let tags = HomeIconList.map((icon, index) => {
    return (
      <>
        <div>
          <a
            className={BaseStyles}
            id={icon.Id}
            onClick={() => handleRegionClick(icon, icon.Id)}
            key={icon.key}
          >
            <p className={TextStyles}>{icon.Name}</p>
          </a>
        </div>
      </>
    );
  });
  useEffect(() => {
    handleRegionClick(HomeIconList[0], CurrActive);
  }, []);

  return (
    <>
      <div className="border-b-2 pb-2 border-gray-900">
        <NavBar Left={[Heading]} Right={[AddTaskButton]} />
        <NavBar Left={[...tags] } ExtraCss=" overflow-x-scroll " />
        {ViewAddTask}
      </div>
    </>
  );
}

function MyTaskList({ TaskName, TaskId }) {
  const [ShowEdit, SetShowEdit] = useState(<></>);
  const [EditButton, SetEditButton] = useState("Edit");

  function ToggleEditState() {
    if (EditButton == "Edit") {
      SetEditButton("Close");
      SetShowEdit(<AddTaskForm />);
    } else {
      SetEditButton("Edit");
      SetShowEdit(<></>);
    }
  }

  return (
    <>
      <div className="container w-11/12 py-3 px-10 m-3 border-b-2 border-gray-600  glass-container">
        <div className="flex justify-items-center items-center ">
          <div className=" mx-2 w-100">
            <p>{TaskName}</p>
          </div>
          <div className=" mx-2 ">
            <button
              className="py-1 px-4 border-1 btn-dark rounded-5 btn btn-sm "
              onClick={ToggleEditState}
            >
              {EditButton}
            </button>
          </div>
          <div className="  ">
            <button className="py-1 px-4 btn-dark  border-1 rounded-5  btn btn-sm">
              Delete
            </button>
          </div>
        </div>
        {ShowEdit}
      </div>
    </>
  );
}

function MyTasks({Task ={Hello : "world"}}) {
  console.log(Task)
  return (
    <>
      <div className="glass-container p-4 ">
        <MyTasksNav />
        {
          Task == {} ?
            Object.entries(Task).map((task) => {
                console.log(`The Task is ${task}`)
              return <MyTaskList TaskName={"Hellow"} TaskId={"world"} />
            })
            :
            <h1 className="container w-11/12 py-3 px-10 m-3  glass-container ">No Task Found</h1>
        }
        
      </div>
    </>
  );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// TODO :: Need To refactor Completely

function HomeNav() {
  let Logo = <p className="mx-5 font-extrabold text-2xl">LOGO</p>;
  const BaseStyles = "btn font-bold border-none  NavLinksCss ";
  const TextStyles = " ";
  const ActiveStyles = ["active", "disabled"];

  let HomeIconList = [
    {
      Name: "MyProject",
      Id: "myproject",
      key: "myproject",
      fn: () => {},
    },
    {
      Name: "Planning",
      Id: "planning",
      key: "planning",
      fn: () => {},
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

  let SearchInput = (
    <input
      className=" ml-10 text-black placeholder-black bg-transparent rounded-5 border-2 border-indigo-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colorsduration-200 ease-in-out shadow-inner md:max-xl:w-3/4 "
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
        ExtraCss="bg-slate-100 text-gray-900 shadow hover:shadow-inner grid-flow-dense"
      />
    </label>
  );

  return (
    <>
      <NavBar
        Icon={Logo}
        Position="sticky-top"
        ExtraCss=" glass-container2 max-lg:grid-cols-1  max-lg:grid-rows-3 max-lg:justify-items-center "
        Left={[...tags]}
        Center={[SearchInput, SearchButton]}
        Right={[LoggerButton]}
      />
    </>
  );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function MainBody({ UserKey }) {
  return (
    <>
      <div className="dark-bg  container-fluid  min-h-[100vh] ">
        <HomeNav /> {/*Need To Remove and Implement All Global Level*/}
        <div className="container-fluid w-full  overflow-x-scroll flex flex-wrap max-lg:flex-rows items-center justify-items-center relative flex-grow  min-h-[100vh] ">
          <div className="lg:w-4/6 md:w-1/2 p-4 absolute max-md:relative left-0 top-0 ">
            <div className=" my-10 border-1  shadow-2xl glass-container">
              <UpcomingTasks />
            </div>
            <div>
              <MyTasks />
            </div>
          </div>
          <div className=" lg:w-2/6 md:w-1/2  absolute max-md:relative right-0 top-0 md:pr-16 lg:pr-0 pr-0 ">
            <ExtraFeatures />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBody;
