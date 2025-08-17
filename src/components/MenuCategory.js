import { useState } from "react";
import ItemList from "./ItemList";
const MenuCategory = (category) => {
  const { title, itemCards } = category.category;
  const [showItems,setShowItems]=useState(false);
  const handleClick=()=>{
    setShowItems(!showItems);
  }
  return (
    <div className="border-b-8  border-gray-300 mb-5">
      <div className="flex justify-between mb-5 cursor-pointer" onClick={handleClick}>
        <span>
          <h1 className="font-bold text-black">{title + "(" + itemCards.length + ")"}</h1>
        </span>
        <span>⬇️</span>
      </div>
      <div>
        {category.category.itemCards.map((item,index) => {
          return showItems&&<ItemList key={index} item={item}></ItemList>;
        })}
      </div>
    </div>
  );
};
export default MenuCategory;
