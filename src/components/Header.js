import { useState,useContext } from "react";
import { Link} from "react-router";
import useOnlineStatus from "../utills/useOnlineStatus";
import { LOGO_URL } from "../utills/constants";
import UserContext from "../utills/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser}=useContext(UserContext);
  const cartItems=useSelector((store)=>store.cart.items);
  // console.log(cartItems);
  return (
    <div className="flex justify-between bg-gray-50  m-2 p-2 shadow-amber-50 rounded-2xl">
      <div >
        <img className="w-36" src={LOGO_URL} alt="Ordering App Logo"></img>
      </div>
      <div className="flex">
        <ul className="flex items-center">
          <li className="m-2 p-2">Online Status:{onlineStatus == false ? "🔴" : "🟢"}</li>
          <li className="m-2 p-2" >
            <Link to="/">Home</Link>
          </li>
          <li className="m-2 p-2">
            <Link to="/About">About Us</Link>
          </li>
          <li className="m-2 p-2" >
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="m-2 p-2">
          <Link to="/Grocery">Grocery</Link>
          </li>
          <li>{loggedInUser}</li>
          <li className="m-2 p-2">
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="m-2 p-2 font-bold">
            <Link to="/Cart">
              Cart({cartItems.length})
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
