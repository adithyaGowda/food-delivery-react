import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  console.log("header called");

  //if no dependency array => useEffect will be called everytime
  //if empty dependency array = [] => useEffect will be called during initial render(just once)
  //if dependency array have a variable = [loginBtn] => useEffect will be called everytime if the variable is updated
  useEffect(() => {
    console.log("useEffect called");
  }, [loginBtn]);

  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
