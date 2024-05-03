import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>

      <div className="w-6/12 m-auto">
        <button
          onClick={() => dispatch(clearCart())}
          className="p-2 m-2 bg-black rounded lg text-white"
        >
          Clear Cart
        </button>
        {cartItems.length === 0 ? (
          <h1 className="text-xl font-bold p-2 opacity-30">
            Cart is empty. Add items to the cart !
          </h1>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
//remove particular item from cart
