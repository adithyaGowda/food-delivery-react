import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { PROXY_URL, SWIGGY_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  //local state variable - super powerful
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  //whenever state variables updates, react triggers a reconciliation cycle(re-renders the component)
  console.log("body rendered");

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

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurantList.map((resData) => (
          <Link
            key={resData?.info?.id}
            to={"/restaurants/" + resData?.info?.id}
          >
            <RestaurantCard resData={resData.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
