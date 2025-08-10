import { useEffect,useState } from "react";
import { ResCard_API } from "./constants";
const useResCard = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(ResCard_API);
    const json = await data.json();
    // use optional chaining here
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return {ListOfRestaurants,filteredRestaurants};
};

export default useResCard;
