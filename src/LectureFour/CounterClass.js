import React from "react";
class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      county: 0,
    };
    this.changecountdecClass=this.changecountdecClass.bind(this);
  }
  changecountdecClass(){
    this.setState({
      county:this.state.county-1,
    })
  }
  changecountClass=()=>{
    this.setState({
      county:this.state.county+1,
    })
  }

  render() {
    return (
      <div className="classComponent">
        <h1>Class Component</h1>
        <h1>CounterClass : Count : {this.state.county} </h1>
        <button onClick={this.changecountClass}>+</button>
        <button onClick={this.changecountdecClass}>-</button>
      </div>
    );
  }
  componentDidMount(){
    
  }
}
export default CounterClass;
