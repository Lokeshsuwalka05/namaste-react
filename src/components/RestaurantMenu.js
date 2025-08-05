import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import React from "react";
import ItemCards from "./ItemCards";
import { RestaurantMenu_API } from "../utills/constants";
import { useParams } from "react-router";
// const param=useParams();
const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  // console.log(resInfo);
  const {resid}=useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.91360&lng=75.78580&restaurantId="+resid+"&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    // this is for Res menu
    // console.log(json?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3]);
    // this is for address of resto
    // console.log(json);
    setresInfo(json?.data);
    // console.log(json.data.cards[2].card.card.info);
  };
  if (resInfo == null) {
    return <Shimmer></Shimmer>;
  }
  // console.log(resInfo.cards[2].card.card.info);
  const {
    name,
    avgRating,
    totalRatings,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;
  // const { itemCards } =
  //   resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card;
  // console.log(itemCards);
  return (
    <>
      <div className="res-details">
        <h1>{name}</h1>
        <div className="res-properties" style={{ border: "2px solid green" }}>
          <h3>
            {avgRating + "(" + totalRatings + " ratings" + ")"}-
            {costForTwoMessage}
          </h3>
          <h3>{cuisines.join(",")}</h3>
          <span style={{ fontSize: "25px" }}>
            <strong>Outlet</strong> {areaName}
          </span>
          <h3>{sla.slaString}</h3>
        </div>
      </div>
      <div className="ResMenu">
        <h2>Menu</h2>
        <ItemCards
          itemCard={
            resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
              .itemCards
            ||
             resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
              .itemCards
          }
        ></ItemCards>
      </div>
    </>
  );
};
export default RestaurantMenu;
