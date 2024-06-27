import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-yellow-100">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4  hover:bg-yellow-200 rounded-lg">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4 hover:bg-yellow-200 rounded-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4  hover:bg-yellow-200 rounded-lg">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4  hover:bg-yellow-200 rounded-lg">
            <Link to="/cart">Cart🛒</Link>
          </li>
          <li className="px-4  hover:bg-yellow-200 rounded-lg">
            <Link to="/grocery">Grocery Store</Link>
          </li>
          <button
            className="px-4 rounded-lg hover:bg-green-400 border-black"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
