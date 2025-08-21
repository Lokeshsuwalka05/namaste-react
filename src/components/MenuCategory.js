import { useState } from "react";
import ItemList from "./ItemList";
const MenuCategory = ({category,showItems,setShowIndex,index}) => {
  const { title, itemCards } = category;
  // const [showItems,setShowItems]=useState(false);
  const handleClick=()=>{
    if(showItems==true){
       setShowIndex(null);
    }
    else{
       setShowIndex(index);
    }
  }
  return (
    <div className="border-b-8  border-gray-300 mb-5" onClick={handleClick}>
      <div className="flex justify-between mb-5 cursor-pointer">
        <span>
          <h1 className="font-bold text-black">{title + "(" + itemCards.length + ")"}</h1>
        </span>
        <span>⬇️</span>
      </div>
      <div>
        {itemCards.map((item,index) => {
          return showItems&&<ItemList key={index} item={item}></ItemList>;
        })}
      </div>
    </div>
  );
};
export default MenuCategory;
