import React from "react";

class Inputclass extends React.Component{
constructor(props){
  super(props);
  this.state={
    UserName:"",
    Password:"",
    Gender:""
  }

}
 changeUsername=(val)=>{
  this.setState({UserName:val})
  
}
 changePassword=(val)=>{
  this.setState({Password:val})

}
 changeGender=(val)=>{

  this.setState({Gender:val})
}


  render(){

    return(
      <div className="classinput">

<form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(this.state)
        }}
      >
        <label>{this.props.lable} : </label>
        <input type={this.props.type} placeholder={this.props.placeholder} onChange={(e)=>{
          // setuserName(e.target.value)
          this.changeUsername(e.target.value)
        }}/>
        <br />
        <label>{this.props.labletwo} : </label>
        <input type={this.props.typetwo} placeholder={this.props.placeholdertwo}onChange={(e)=>{
          // setPass(e.target.value)
          this.changePassword(e.target.value)
        }} />
        <br />
        <label>Gender Type : </label>
        <select name="Gender" id="1"onChange={(e)=>{
          // setGend(e.target.value)
          this.changeGender(e.target.value)
        }}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <button onClick={() => {}}>click</button>
      </form>
      </div>
    );
  }
}
export default Inputclass