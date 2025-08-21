import Shimmer from "./Shimmer";
import MenuCategory from "./MenuCategory";
import { useParams } from "react-router";
import useRestaurantMenu from "../utills/useRestaurantMenu";
import { useState } from "react";

//Want Single Responsibility principle so i have to create a Hook.
const RestaurantMenu = () => {
  // console.log(resInfo);
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);
  const [showIndex, setShowIndex] = useState(null);
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
  console.log(resInfo?.cards[2]?.card?.card?.info);
  // resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card;
  // console.log(resInfo);
  // console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR);
  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  //4 or 5
  // console.log(cards);

  return (
    <div className="w-6/12 m-auto">
      <h1 className="font-bold text-3xl mb-9">{name}</h1>
      <div className="border border-gray-200 pl-4 pr-4 pb-4 rounded-4xl bg-gray-100 ">
        <div className="border border-gray-200 rounded-2xl p-4 shadow-lg  bg-white">
          <h3>
            ⭐{avgRating + "(" + totalRatings + " ratings" + ")"}-
            {costForTwoMessage}
          </h3>
          <h3>{cuisines.join(",")}</h3>
          <span className="font-bold">
            Outlet <span className="font-normal">{areaName}</span>
          </span>
          <h3>{sla.slaString}</h3>
        </div>
      </div>
      <div className="ResMenu">
        <h2 className="flex justify-center font-serif text-gray-500 m-3 p-3 tracking-[0.3em]">
          MENU
        </h2>

        {cards
          .filter(
            (c) =>
              c?.card?.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          )
          .map((c, index) => (
            <MenuCategory
              key={index}
              category={c.card.card}
              showItems={
                index===showIndex?true:false
              }
              setShowIndex={setShowIndex}
              index={index}
            ></MenuCategory>
          ))} 
      </div>
    </div>
  );
};
export default RestaurantMenu;
