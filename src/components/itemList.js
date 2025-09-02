import { useState } from "react";
import { CLOUDINARY_IMG_CDN } from "../utills/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utills/cartSlice";
const ItemList = ({ item }) => {
  const [expanded, setexpanded] = useState(false);
  const { name, description, price, imageId, defaultPrice } = item.card.info;
  const shortText = description.slice(0, 150);
  const dispatch = useDispatch();
  const handleClick = () => {
    //dispatch an action
    dispatch(addItem(item));
  };
  return (
    <>
      <div
        className=" flex border-b-2 border-gray-300 mt-6 pb-4"
        data-testid="item"
      >
        <div className="w-8/12">
          <h1 className="font-bold">{name}</h1>
          <p className="font-semibold">{price / 100 || defaultPrice / 100}</p>
          {expanded ? description : shortText}
          {description.length > 150 && (
            <span
              onClick={() => setexpanded((prev) => !prev)}
              className="text-blue-500 font-bold cursor-pointer"
            >
              {expanded ? "show less" : "...more"}
            </span>
          )}
        </div>
        <div className="relative w-4/12">
          <div className="border border-black w-28 absolute -bottom-2 font-bold text-green-400 bg-white rounded-2xl left-7 flex justify-center">
            <button className="cursor-pointer" onClick={handleClick}>
              +ADD
            </button>
          </div>
          <img
            src={CLOUDINARY_IMG_CDN + imageId}
            className="rounded-2xl size-40"
          ></img>
        </div>
      </div>
    </>
  );
};
export default ItemList;
