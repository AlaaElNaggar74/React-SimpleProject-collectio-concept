import { useState,useEffect } from "react";


const CounterFC = () => {
  let [countx,setcountx]=useState(0);
  let [product,setproduct]=useState(0);

  let changecountfc=()=>{
    setcountx(countx+1);
  }

  function changecountdecfc(){
    setcountx(countx-1);

  }

  let changeproductfc=()=>{
    setproduct(product+1);
  }

  function changeproductdecfc(){
    setproduct(product-1);

  }


  useEffect(() => {
    // document.title=`You Clicked ${countx} Time`
    console.log("Here");

    // setProductFetch(fetch('https://fakestoreapi.com/products').then((res)=>{return res.json()}).then((data)=>{return data}));
    // fetch('https://fakestoreapi.com/products').then((res)=>{return res.json()}).then((data)=> setProductFetch(data) )
    },[]);


  return (
    <div className="CounterFC">
      <h1>Function Component</h1>
      <h1>CounterFC : Count : {countx} </h1>
      <button onClick={changecountfc}>+</button>
      <button onClick={changecountdecfc}>-</button>
      <h1>CounterFC : product : {product} </h1>
      <button onClick={changeproductfc}>+</button>
      <button onClick={changeproductdecfc}>-</button>
      <h1>||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||</h1>


    </div>
  );

}

export default CounterFC;
