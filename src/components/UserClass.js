import React from "react";

class UserClass extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count:0,
      count1:1
    }
     console.log("child constructor");
  }
  componentDidMount(){
    console.log("child componentDidMount ");
  }
  render() {
     console.log("child rendered");
    const {count,count1}=this.state
    return (
      <div className="user-class-card" style={{border:"2px solid black"}}>
        <p>Name:{this.props.name}</p>
        <p>Location:{this.props.location}</p>
        <p>Contact:{this.props.contact}</p>
        <p>Count:{count}</p>
         <button onClick={()=>{
          //never update state variables directly
           this.setState({
            count:this.state.count+1
           })
         }}>Increase count</button>
        <p></p>
      </div>
    );
  }
}
export default UserClass;
