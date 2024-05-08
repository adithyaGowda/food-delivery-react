import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        const { id, name, price, defaultPrice, description, imageId } =
          item.card.info;
        const style = "m-[-10px] pl-8";
        return (
          <div
            data-testid="foodItems"
            key={id}
            className="p-2 m-2 border-b-2 text-left flex justify-between"
          >
            <div className="p-2 w-10/12">
              <span className="text-sm font-medium">{name}</span>
              <span> - ₹{price / 100 || defaultPrice / 100}</span>
              <p className="text-xs my-3">{description}</p>
            </div>
            <div className="w-2/12 ">
              {imageId && (
                <img
                  src={CDN_URL + imageId}
                  alt="food_menu_img"
                  className="w-full rounded-lg"
                />
              )}
              <div className={imageId ? "absolute " + style : "pt-8 " + style}>
                <button
                  onClick={() => handleAddItem(item)}
                  className="bg-white px-3 py-1 rounded-lg text-orange-500 shadow-lg text-sm hover:bg-gray-200"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
