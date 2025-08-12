import { CLOUDINARY_IMG_CDN } from "../utills/constants";
import { star_icon } from "../utills/constants";

const ResCard = (props) => {
  // const {info}=props.resObj;
  // const obj=info;
  // const obj=props.resObj.info;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName, sla } =
    props.resObj.info;
  const cuisines_text = cuisines.join(",");
  const display_text =
    cuisines_text.length > 30
      ? cuisines_text.slice(0, 30) + "..."
      : cuisines_text;
  return (
    <div className="max-w-fit h-[330px] bg-white  border border-gray-200 rounded-lg shadow-sm p-3 hover:bg-gray-100 font-light hover:border-2">
      <div className="food-image ">
        <img
          src={CLOUDINARY_IMG_CDN + cloudinaryImageId}
          className=" w-96 h-[200px] rounded-2xl"
        ></img>
      </div>
      <div className="res-name font-bold">{name}</div>
      <div className="flex">
        <div className="w-6">
          <img src={star_icon}></img>
        </div>
        <div className="rating-time ">
          <span>{avgRating} </span>
          <span className="font-semibold">{sla.slaString}</span>
        </div>
      </div>

      <div>{display_text}</div>
      <div className="address">{areaName}</div>
    </div>
  );
};

export const withDiscountLabel = (Resta) => {
  return (props) => {
    console.log(props);
    const {header,subHeader}=props?.resObj?.info.aggregatedDiscountInfoV3;
    return (
      <div className="relative">
        <label className="absolute font-extrabold text-white top-44 left-8">{header+" "+subHeader}</label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
