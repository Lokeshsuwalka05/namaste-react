import ResCard, { withDiscountLabel } from "./ResCard";
// import resList from "../utills/mockdata";
import { use, useContext, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useBody from "../utills/useBody";
import useOnlineStatus from "../utills/useOnlineStatus";
import UserContext from "../utills/UserContext";

const Body = () => {
  // local state variable->super powerful variable
  const [searchText, setsearchText] = useState("");
  const { ListOfRestaurants, filteredRestaurants, setfilteredRestaurants } =useBody();
  console.log(ListOfRestaurants);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You Are Offline,Please Connect to the Network</h1>;
  }
  const RestaurantDiscountLabelCard = withDiscountLabel(ResCard);
  const {loggedInUser,setUserName}=useContext(UserContext);
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
      <div className="flex m-2 p-2 gap-2">
        <button
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 h-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type..."
          required
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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

        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 h-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type..."
          required
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
      </div>

      <div className="m-2 p-2 grid grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => {
          const obj=restaurant?.info?.aggregatedDiscountInfoV3;
          return (
            <Link
              key={restaurant.info.id}
              to={"/Restaurants/" + restaurant.info.id}
            >
              {Object.keys(obj||{}).length === 0 ? (
                <ResCard resObj={restaurant}></ResCard>
              ) : (
                <RestaurantDiscountLabelCard
                  resObj={restaurant}
                ></RestaurantDiscountLabelCard>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
