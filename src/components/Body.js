import ResCard from "./ResCard";
import resList from "../utills/mockdata";
import { useState } from "react";
const Body = () => {
  const [Restaurants, setRestaurants] = useState(resList);
  console.log(Restaurants);
  return (
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
