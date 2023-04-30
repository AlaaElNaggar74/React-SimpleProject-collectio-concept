import { useState } from "react";

const WelcomeComFun = (props) => {
  let [count,setcount]=useState(0);


  // let changecount=()=>{
  //   setcount(count+1)

  // }

  return (
    <div className="functioncomponent">
      <h2>2- func :Wecome Function {props.com} </h2>
      <h2>name: {props.name} </h2>
      <h2>Line Of STATE {count} </h2>
<button onClick={()=>{
  setcount(count+5)
}}>onclick</button>
    </div>
  );
};

export default WelcomeComFun;
