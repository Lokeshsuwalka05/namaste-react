import { useEffect } from "react";
const User = (props) => {
  const { name, location, contact } = props;
  const [count] = useState(0);
  const [count1] = useState(1);
  useEffect(() => {
    console.log("useEffect called");
    const timer = setInterval(() => {
      console.log("Hello world");
    }, 1000);
    return () => {
      console.log("useEffect return called");
      clearInterval(timer);
    };
  }, []);
  console.log("User renderd");
  return (
    <div
      className="user-card"
      style={{ border: "2px solid black", marginBottom: "10px" }}
    >
      <p>Name:{name}</p>
      <p>Location:{location}</p>
      <p>Contact:{contact}</p>
      <p>Count:{count}</p>
      <p>Count1:{count1}</p>
    </div>
  );
};
export default User;
