import { useState } from "react";
import { CLOUDINARY_IMG_CDN } from "../utills/constants";
const ItemList = (item) => {
  const [expanded, setexpanded] = useState(false);
  const [more, setmore] = useState("more");
  const { name, description, price, imageId, defaultPrice } = item.item.card.info;
  const shortText = description.slice(0, 150);
  return (
    <>
      <div className=" flex border-b-2 border-gray-300 mt-6 pb-4">
        <div className="w-8/12">
          <h1 className="font-bold">{name}</h1>
          <p className="font-semibold">{price / 100||defaultPrice/100}</p>
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
        <div className="w-4/12">
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
