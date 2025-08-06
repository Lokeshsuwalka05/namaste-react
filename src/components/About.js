import User from "./User";
import React from "react";
import UserClass from "./UserClass";
class About extends React.Component{
  constructor(props){
    super(props);
    console.log("parent constructor");

  }
  componentDidMount(){
    console.log("parent componentDidMount ");
  }
  render(){
    console.log("parent rendered");
    return(
      <>
        <h1>Hello Guys</h1>
        <p>This is the Determination Of Lokesh</p>
        {/* <User name={"lokesh suwalka"} location={"Jaipur"} contact={"@LokeshSuwalka05"}/> */}
        <UserClass name={"lokesh suwalka"} location={"Jaipur"} contact={"@LokeshSuwalka05"}/>
      </>
    )
  }
}

export default About;