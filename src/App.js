// import WelcomeFUNwithoutprop from "./LectureTwo/WelcomeFUNwithoutprop";
// import WelcomeComFun from "./LectureTwo/WelcomeComFun";
// import WelocmeComClass from "./LectureTwo/WelocmeComClass";
// import Product from "./LectureTwo/Product";
// import Input from './LectureTwo/Input'
// import Inputclass from "./LectureTwo/Inputclass";
// import { useState } from "react";
import "./App.css";
// import Welcomlogin from "./Lecturethree/Welcomlogin";
// import Guest from "./Lecturethree/Guest";
// import ListAndKeys from "./Lecturethree/ListAndKeys";
// import Products from "./Lecturethree/Products";

import CounterClass from "./LectureFour/CounterClass";
import CounterFC from "./LectureFour/CounterFC";

import ProductListFetch from "./LectureFour/ProductListFetch";

function App() {
  // let [loggedin, isloggedin] = useState(true);
  // let [btntext, isbtntext] = useState("Log in");
  // let [text, istext] = useState("");

  // let elem = loggedin ? (<Welcomlogin/>) : ( <Guest/> );

  // console.log(loggedin);

  // if(loggedin){

  // console.log("You Are Logged In ");
  // }else{

  //   console.log("You Are [ NOT Logged ] In ");
  // }

  return (
    <div className="App">
      <CounterClass />
      <h3>
        =================*****************************************===================
      </h3>
      <CounterFC />
      <ProductListFetch />
      {/* //   {elem}
    //   <button onClick={()=>{ */}
      {/* //     (loggedin)?isloggedin(false):isloggedin(true);
    //     (btntext==="Log in")?isbtntext("Log Out") :isbtntext("Log in")

    //   }}>{btntext}</button> */}

      {/* <ListAndKeys/>  */}
      {/* <Input type="text" lable="UserName" placeholder="Enter Your UserName" typetwo="password" labletwo="Password" placeholdertwo="Enter Your Password"/> */}
      {/* <Inputclass type="text" lable="UserName" placeholder="Enter Your UserName" typetwo="password" labletwo="Password" placeholdertwo="Enter Your Password"/> */}
      {/* <Input type="password" lable="Password" placeholder="Enter Your Password"/> */}
      {/* <WelcomeFUNwithoutprop/> */}
      {/* <WelcomeComFun com="component" name="alaa"/> */}
      {/* <WelocmeComClass /> */}
      {/* <WelocmeComClass name="HTTP" nametwo="HTML" lang="CSS" langtwo="JS" age="30"/>   */}

      {/* <Product title="Product-1" subtitle="htp" discri="loremmme em,emeemkd sddsknikasfmlsaf sadfnikasfnoas afsnsas" price="3.2665$"/> */}
      {/* <Product title="Product-2" subtitle="css" discri="loremmme em,emeemkd sddsknikasfmlsaf sadfnikasfnoas afsnsas" price="55.2665$"/> */}
      {/* <Product title="Product-3" subtitle="js" discri="loremmme em,emeemkd sddsknikasfmlsaf sadfnikasfnoas afsnsas" price="5155.2665$"/> */}
    </div>
  );
}

export default App;
