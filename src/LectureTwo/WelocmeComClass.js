import React from "react";
import DetailsComp from "./DetailsComp";
// import Button from "./Button";
class WelocmeComClass extends React.Component {
  constructor(props){
    super(props);
    this.state={
      firstName:"Alaa el",
      lastName:"Naggar"
    }

  }

  // state={
  //   firstName:"Alaa el",
  //   lastName:"Naggar"

  // }
  render() {
    return (
      <div className="classcomp">
        <p>*************************************************</p>
        <h3>3- Class : Welcome Class Component : </h3>

        {this.props.name == null ? " " : <h3>Name : {this.props.name}</h3>}

        {this.props.nametwo == null ? (" ") : (<h3>nametwo : {this.props.nametwo}</h3>)}

        {this.props.lang == null ? " " : <h3>lang : {this.props.lang}</h3>}

        {this.props.langtwo == null ? (" ") : (<h3>langtwo : {this.props.langtwo}</h3>)}

        {this.props.age == null ? (" ") : (<h3>age : {this.props.age}</h3>)}


        <DetailsComp capital="GIZA" pop="PEPEOP" alex="MYFRIEND"/>

        <h3>Line For STATE : firstName {this.state.firstName} :::: lastName {this.state.lastName}</h3>
        {/* <Button action="clicl"/> */}
        <button  onClick={()=>{
          this.setState({
            lastName:"ABDO",
          })
        }}>cliclk</button>
        
        <p>*************************************************</p>
      </div>
    );
  }

  componentDidMount(){
  
console.log("componentDidMount - Phase");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate - Phase");

  }
  componentWillUnmount(){
    console.log("componentWillUnmount - Phase");


  }
}

export default WelocmeComClass;
