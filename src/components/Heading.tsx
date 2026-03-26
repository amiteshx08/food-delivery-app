import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router";

const Heading = () => {
  const [btnName, setbtnName] = useState("Login");
  const status = useOnlineStatus()
  return (
    <div className="text-[brown] flex justify-between border-2 border-solid border-[brown] m-0.5">
      <div>
        <img className="w-25" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className="flex">
          <li className="py-6 m-2.5 list-none text-[large] font-bold">
            Online Status:{status ? "🟢" : "🔴"}
          </li>
          <li className="py-6 m-2.5 list-none text-[large] font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="py-6 m-2.5 list-none text-[large] font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="py-6 m-2.5 list-none text-[large] font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="py-6 m-2.5 list-none text-[large] font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="py-6 m-2.5 list-none text-[large] font-bold">Cart</li>
        </ul>
        <button
          className="m-5 bg-amber-400 rounded-sm text-[large] font-bold p-0.5 "
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
