import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resID } = useParams();

  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="flex flex-col">
      <div className="bg-gray-50 shadow-lg m-8 p-8">
        <h1 className="font-bold text-2xl p-4">{name}</h1>
        <p className="text-sm p-2">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      <div className="bg-gray-50 shadow-lg m-8 p-8">
        <h2 className="text-xl p-4">Menu</h2>
        <ul>
          {itemCards.map((item) => {
            return (
              <li key={item.card?.info?.id} className="text-sm p-4">
                {item.card?.info?.name} - {"Rs."}
                {item.card?.info?.price / 100 ||
                  item.card?.info?.defaultPrice / 100}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
//build the veg only filter feature
