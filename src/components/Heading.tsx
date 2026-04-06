import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const Heading = () => {
  const [btnName, setbtnName] = useState("Login");
  const status = useOnlineStatus();
  const cartItem = useSelector((store: any) => store.cart.items)

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 shadow-md">
      {/* Logo */}
      <div>
        <img className="h-20 w-20 object-contain" src={LOGO_URL} />
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-8">
        <ul className="m-0 flex list-none items-center gap-6 p-0">
          <li className="text-sm font-semibold tracking-wide text-gray-400">
            <span
              className={`mr-1 inline-block h-2 w-2 rounded-full ${status ? "bg-green-500" : "bg-red-500"}`}
            ></span>
            {status ? "Online" : "Offline"}
          </li>
          <li className="cursor-pointer font-medium text-gray-700 transition-colors duration-150 hover:text-black">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer font-medium text-gray-700 transition-colors duration-150 hover:text-black">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="cursor-pointer font-medium text-gray-700 transition-colors duration-150 hover:text-black">
            <Link to="/about">About Us</Link>
          </li>
          <li className="cursor-pointer font-medium text-gray-700 transition-colors duration-150 hover:text-black">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="cursor-pointer font-medium text-gray-700 transition-colors duration-150 hover:text-black">
            Cart 🛒-{cartItem.length}
          </li>
        </ul>

        {/* Login Button */}
        <button
          className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-gray-800"
          onClick={() => {
            btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Heading;
