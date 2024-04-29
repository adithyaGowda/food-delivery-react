import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
//implement lazy loading to fetch more restraunts on scrolling