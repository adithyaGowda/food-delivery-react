import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const { title, itemCards } = data;

  const handleShowItem = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleShowItem}
      >
        <span className="font-medium text-base">
          {title} ({itemCards.length})
        </span>
        <span>🔻</span>
      </div>
      {showItem && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
