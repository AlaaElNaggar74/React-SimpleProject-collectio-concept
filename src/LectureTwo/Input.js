import { useState } from "react";

const Input = (props) => {
  let [userName,setuserName]=useState(" ");
  let [password,setPass]=useState(" ");
  let [gender,setGend]=useState(" ");

  let changeUsername=(val)=>{
    setuserName(val)
    
  }
  let changePassword=(val)=>{
    setPass(val)

  }
  let changeGender=(val)=>{

    setGend(val)
  }
  return (
    <div className="Inputcomp">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("locked");
          console.log("userName : ",userName);
          console.log("password : ",password);
          console.log("gender : ",gender);
        }}
      >
        <label>{props.lable} : </label>
        <input type={props.type} placeholder={props.placeholder} onChange={(e)=>{
          // setuserName(e.target.value)
          changeUsername(e.target.value)
        }}/>
        <br />
        <label>{props.labletwo} : </label>
        <input type={props.typetwo} placeholder={props.placeholdertwo}onChange={(e)=>{
          // setPass(e.target.value)
          changePassword(e.target.value)
        }} />
        <br />
        <label>Gender Type : </label>
        <select name="Gender" id=""onChange={(e)=>{
          // setGend(e.target.value)
          changeGender(e.target.value)
        }}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <button onClick={() => {}}>click</button>
      </form>
    </div>
  );
};

export default Input;
