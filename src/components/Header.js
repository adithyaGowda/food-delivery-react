import { useContext, useEffect, useState } from "react";
// import { LOGO_URL } from "../utils/constants";
import logo from "../../asset/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  //if no dependency array => useEffect will be called everytime
  //if empty dependency array = [] => useEffect will be called during initial render(just once)
  //if dependency array have a variable = [loginBtn] => useEffect will be called everytime if the variable is updated
  useEffect(() => {
    // console.log("useEffect called");
  }, [loginBtn]);

  return (
    <div className="flex justify-between bg-orange-50 shadow-lg">
      <img className="w-16 h-14 ml-12 mt-6" src={logo} />
      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="px-4">Online status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to={"/cart"}>Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="bg-orange-100 px-4 py-2 rounded-lg"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
          <li className="px-4">{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
