import RestaurantCard, { withVegLable } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { PROXY_URL, SWIGGY_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //local state variable - super powerful
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurandCardVeg = withVegLable(RestaurantCard);

  const { loggedUser, setUserName } = useContext(UserContext);

  //whenever state variables updates, react triggers a reconciliation cycle(re-renders the component)
  // console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);

    const json = await data.json();

    //optional chaining
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offine!! Please check your internet connection!!
      </h1>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid rounded-lg border-black p-1 m-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-orange-100 p-2 m-1 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((list) =>
                list.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurantList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="bg-orange-100 p-2 m-1 rounded-lg"
            onClick={() => {
              const filteredLIst = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurantList(filteredLIst);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="flex items-center ml-8">
          <label>UserName</label>
          <input
            className=" m-1 p-1 border rounded-lg border-black"
            type="text"
            value={loggedUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurantList.map((resData) => (
          <Link
            key={resData?.info?.id}
            to={"/restaurants/" + resData?.info?.id}
          >
            {resData?.info?.veg ? (
              <RestaurandCardVeg resData={resData.info} />
            ) : (
              <RestaurantCard resData={resData.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
//use custom hook to fetch data -- single responsiblity principle
