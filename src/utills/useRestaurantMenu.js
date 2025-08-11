import { useState,useEffect } from "react";
import { RestaurantMenu_API } from "./constants";
const useRestaurantMenu=(resid)=>{
    const [resInfo,setresInfo]=useState(null);
      useEffect(()=>{
        fetchData();
      },[]);

      const fetchData=async ()=>{
              const data=await fetch(RestaurantMenu_API+resid);
              const json=await data.json();
              setresInfo(json?.data);    
      }

  return resInfo;
}
export default useRestaurantMenu;