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
  componentDidUpdate(){
    console.log("parent componentDidUpdate ");

  }
  render(){
    console.log("parent rendered");
    return(
      <>
        <h1>Hello Guys</h1>
        <p>This is the About page Of Lokesh</p>
        <UserClass name="first" />
        
      </>
    )
  }
}

export default About;