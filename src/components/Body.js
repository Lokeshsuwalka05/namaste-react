import ResCard from "./ResCard";
// import resList from "../utills/mockdata";
import { use, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useBody from "../utills/useBody";
import useOnlineStatus from "../utills/useOnlineStatus";

const Body = () => {
  // local state variable->super powerful variable
  const [searchText, setsearchText] = useState("");
  const { ListOfRestaurants, filteredRestaurants,setfilteredRestaurants } = useBody();
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You Are Offline,Please Connect to the Network</h1>;
  }
  // const arr=useState(resList);
  // const Restaurants=arr[0];
  // const setRestaurants=arr[1];
  // - callback function of useEffect will be called after the componet has been rendered.
  //conditional rendering:-A rendering based on a condition.
  // if(Restaurants.length===0){
  //   return <Shimmer/>
  // }

  //we can write conditional rendering in below format as well
  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="Search-Functionality">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setfilteredRestaurants(filterList);
            console.log("clicked");
          }}
        >
          Top Rated Restaurants
        </button>

        <input
          className="search-field"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>

        <button
          onClick={() => {
            // console.log(ListOfRestaurants);
            const filteredResto = ListOfRestaurants.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setfilteredRestaurants(filteredResto);
          }}
        >
          Search
        </button>
      </div>

      <div className="card-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/Restaurants/" + restaurant.info.id}
            >
              <ResCard resObj={restaurant}></ResCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
