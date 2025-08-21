import React from "react";
import Shimmer from "./Shimmer";
import UserContext from "../utills/UserContext";

class UserClass extends React.Component {
  constructor(props){
    super(props);
    this.state={
      userInfo:null
    }
     console.log(this.props.name+"child constructor called");
    
  }
  async componentDidMount(){
    console.log(this.props.name+"child componentDidMount ");
    // this.timer=setInterval(()=>{
    //      console.log("hello world");
    // },1000);
    const data=await fetch("https://api.github.com/users/Lokeshsuwalka05");
    const json=await data.json();
    this.setState({
         userInfo:json
    })
  }
  componentDidUpdate(){
    console.log(this.props.name+"componentDidUpdate called");
  }
  componentWillUnmount(){
    // clearInterval(this.timer);
    console.log(this.props.name+"componentWillUnmount called");
  }
  render() {
    console.log(this.props.name+"child rendered");
    if(this.state.userInfo==null){
      return <Shimmer/>
    }
     console.log(this.state.userInfo);
    const {name,followers,following,avatar_url}=this.state.userInfo;
    return (
      <div className="user-class-card" style={{border:"2px solid black"}}>
        <p>Name:{name}</p>
        <img src={avatar_url}></img>
        <p>Followers:{followers}</p>
        <p>Following:{following}</p>
        <UserContext.Consumer>
        {({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default UserClass;
