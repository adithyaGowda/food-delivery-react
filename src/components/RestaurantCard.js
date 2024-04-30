import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData;
  return (
    <div className="m-3 p-3 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export const withVegLable = (RestaurandCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-green-500 m-1 p-1 text-white text-sm rounded-md">
          Veg Only
        </label>
        <RestaurandCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
//implement lazy loading to fetch more restraunts on scrolling
