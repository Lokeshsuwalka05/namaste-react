import ResCard from "./ResCard";
// import resList from "../utills/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Swiggy_API } from "../utills/constants";

const Body = () => {
  // local state variable->super powerful variable
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  // const arr=useState(resList);
  // const Restaurants=arr[0];
  // const setRestaurants=arr[1];
  // - callback function of useEffect will be called after the componet has been rendered.

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(Swiggy_API);
    const json = await data.json();
    // use optional chaining here
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering:-A rendering based on a condition.
  // if(Restaurants.length===0){
  //   return <Shimmer/>
  // }

  //we can write conditional rendering in below format as well
  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
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

      <div className="Search-Functionality">
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
            <ResCard key={restaurant.info.id} resObj={restaurant}></ResCard>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
