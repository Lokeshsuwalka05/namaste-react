import { CLOUDINARY_IMG_CDN } from "../utills/constants";
import { star_icon } from "../utills/constants";

const ResCard = (props) => {
  // const {info}=props.resObj;
  // const obj=info;
  // const obj=props.resObj.info;
  const {cloudinaryImageId,name,avgRating,cuisines,areaName,sla}=props.resObj.info;
  return (
    <div className="card">
        
        <div className="food-image">
          <img src={CLOUDINARY_IMG_CDN+cloudinaryImageId}></img>
        </div>
        <div className="res-name">{name}</div>
        <div className="star-rating-time">
          <div className="star">
            <img src={star_icon}></img>
          </div>
          <div className="rating-time">
            <span>{avgRating} </span>
            {sla.slaString}
          </div>
        </div>
        <div className="cuisine">{cuisines.join(",")}</div>
        <div className="address">{areaName}</div>
    </div>
  );
};

export default ResCard;