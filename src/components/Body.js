import ResCard from "./ResCard";
// import resList from "../utills/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // local state variable->super powerful variable
  const [Restaurants, setRestaurants] = useState([]);
  // const arr=useState(resList);
  // const Restaurants=arr[0];
  // const setRestaurants=arr[1];

  // - callback function of useEffect will be called after the componet has been rendered.

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.91360&lng=75.78580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    // use optional chaining here
    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering:-A rendering based on a condition.
  // if(Restaurants.length===0){
  //   return <Shimmer/>
  // }

  //we can write conditional rendering in below format as well
  return Restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filterList = Restaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setRestaurants(filterList);
          console.log("clicked");
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="card-container">
        {Restaurants.map((restaurant) => {
          return (
            <ResCard key={restaurant.info.id} resObj={restaurant}></ResCard>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
