import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router";

const Heading = () => {
  const [btnName, setbtnName] = useState("Login");
  const status = useOnlineStatus();
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div>
        <img className="w-16 h-16 object-contain" src={LOGO_URL} />
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-8">
        <ul className="flex items-center gap-6 list-none m-0 p-0">
          <li className="text-gray-400 text-sm font-semibold tracking-wide">
            <span
              className={`w-2 h-2 rounded-full inline-block mr-1 ${status ? "bg-green-500" : "bg-red-500"}`}
            ></span>
            {status ? "Online" : "Offline"}
          </li>
          <li className="text-gray-700 font-medium hover:text-black transition-colors duration-150 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-700 font-medium hover:text-black transition-colors duration-150 cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="text-gray-700 font-medium hover:text-black transition-colors duration-150 cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-gray-700 font-medium hover:text-black transition-colors duration-150 cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="text-gray-700 font-medium hover:text-black transition-colors duration-150 cursor-pointer">
            Cart 🛒
          </li>
        </ul>

        {/* Login Button */}
        <button
          className="px-5 py-2 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all duration-200"
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
