import { Form, ParalleInput } from "../assets/design";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input,CreateButtons } from "../assets/design";

function AddTaskForm() {
  const navigate = useNavigate();
  
    const CustomCss =
    " text-grey border-black shadow-[inset_20px_20px_20px_0_rgba(0,0,0,0.1)]";

  const [CurrError, SetError] = useState("");

  let ShowError = (
    <p className="text-center text-sm text-red-600 my-1">{CurrError}</p>
  );

  function FetchDataFromForm() {


    let WorkTitle = document.getElementById('worktitle').value
    let status = document.getElementById('Status').value
    let deadline = document.getElementById('deadline').value
    let workdesc = document.getElementById('workdesc').value
    
    if(WorkTitle && status && deadline && workdesc  ){
      
    }


   
  }

  function SubmitForm() {
    let data = FetchDataFromForm();

    if (data[0]) {
      console.log(data[1]);
      SetError("");
      navigate("/home");
    } else {
      SetError(data[1]);
    }
  }

  
  let WorkTitle = (
    <Input
      name="worktitle"
      id="worktitle"
      type="text"
      label={"Work Title"}
      InputExtraCss={CustomCss}
    />
  );

    
let Deadline = (
    <Input
      name="deadline"
      id="deadline"
      type="date"
      label={"Dead-Line"}
      InputExtraCss={CustomCss}
    />
  );

  let Details = (
    <Input
      name="workdesc"
      id="workdesc"
      type="text"
      label={"Description"}
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
  let Status = (
    <>
    <label for="Status" className="text-lg text-grey">Status:</label>

    <select name={`Status`} className={CustomCss} id="Status">
      <option value="1" className={CustomCss}>Finished</option>
      <option value="2">Not Finished</option>
      <option value="3">Started</option>
    </select> 
    </>
  )

  let Parallel = <ParalleInput FInput={Deadline} SInput={Status} ExtraCss="w-full"/>

  return (
    <>
      <form className="py-5">
        <Form
          Heading={"Add Task"}
          Tags={[ WorkTitle,Parallel,Details]}
          Button={Submit}
          ExtraCss={"glass-container"}
          Base_key={"AddTask"}
          AffterButton={[ShowError]}
        />
      </form>
    </>
  );
}












export default AddTaskForm;