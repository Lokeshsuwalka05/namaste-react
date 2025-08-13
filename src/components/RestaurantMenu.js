import Shimmer from "./Shimmer";
import ItemCards from "./ItemCards";
import { useParams } from "react-router";
import useRestaurantMenu from "../utills/useRestaurantMenu";

//Want Single Responsibility principle so i have to create a Hook.
const RestaurantMenu = () => {
  // console.log(resInfo);
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);

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
    <div className="w-6/12 m-auto">
      <h1 className="font-bold text-3xl mb-9">{name}</h1>
      <div className="border border-gray-200 pl-4 pr-4 pb-4 rounded-4xl bg-gray-100 ">
        <div className="border border-gray-200 rounded-2xl p-4 shadow-lg  bg-white">
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
            resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
              ?.card?.card.itemCards ||
            resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card.itemCards
          }
        ></ItemCards>
      </div>
    </div>
  );
};
export default RestaurantMenu;
