import { useState } from "react";
import ItemList from "./ItemList";
import ItemCards from "./ItemCards";
const MenuCategory = ({ category, showItems, setShowIndex, index }) => {
  const { title, itemCards } = category;
  // const [showItems,setShowItems]=useState(false);
  const handleClick = () => {
    if (showItems == true) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };
  return (
    <div className="border-b-8  border-gray-300 mb-5">
      <div
        className="flex justify-between mb-5 cursor-pointer"
        onClick={handleClick}
      >
        <span>
          <h1 className="font-bold text-black">
            {title + "(" + itemCards.length + ")"}
          </h1>
        </span>
        <span>⬇️</span>
      </div>
      <div>
        {<ItemCards itemCards={itemCards} showItems={showItems}></ItemCards>}
      </div>
    </div>
  );
};
export default MenuCategory;
