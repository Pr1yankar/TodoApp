///////////////////////////////////////////////////////////// 
// 
//  @
//  Made On Marh 06 '24
//
//
///////////////////////////////////////////////////////////// 

import {Input , ParalleInput, CreateButtons  , CheckBox , Form} from "./assets/design.tsx"



function Login(){

    let FirstName = <Input name="fname" id="fname" label="Fist Name" /> 
    let LastName = <Input name="lname" id="lname" label="Last Name" /> 


    let UserName  = <ParalleInput FInput={FirstName} SInput={LastName} />

    let Email = <Input name="email" id="email" type="email" label={"Email"} />
    let Password = <Input name="password" id="password" type="password" label={"Password"} />
    let ConfirmPassword = <Input name="cpassword" id="cpassword" type="password" label={"Confirm Password"} />


    let Policy = <CheckBox name={"pollicy"} id="pollicy" label="I accept the terms and condition" /> 

    let Submit = <CreateButtons Name="Submit" Type="Submit" /> 

    return (
        <>
            <Form Heading={"Log In"} Tags={[UserName,Email,Password,ConfirmPassword,Policy]} Button={Submit} />
            
        </>
    )


}



function SingIn(){


    let Email = <Input name="email" id="email" type="email" label={"Email"} />
    let Password = <Input name="password" id="password" type="password" label={"Password"} />
   
    let Submit = <CreateButtons Name="Submit" Type="Submit" /> 

    return (
        <>
            <Form Heading={"Log In"} Tags={[Email,Password]} Button={Submit} />
            
        </>
    )


}



export { 
    Login,
    SingIn
};