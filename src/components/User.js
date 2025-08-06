import { useState } from "react";
const User=(props)=>{
  const {name,location,contact}=props;
  const [count,setcount]=useState(0);
  const [count1,setcount1]=useState(1);
  return (
    <div className="user-card" style={{ border: "2px solid black", marginBottom: "10px" }}>
      <p>Name:{name}</p>
      <p>Location:{location}</p>
      <p>Contact:{contact}</p>
      <p>Count:{count}</p>
      <p>Count1:{count1}</p>
    </div>

  )
}
export default User;