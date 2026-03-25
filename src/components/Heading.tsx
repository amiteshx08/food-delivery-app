import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router";

const Heading = () => {
  const [btnName, setbtnName] = useState("Login");
  const status = useOnlineStatus()
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status:{status ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
        </ul>
        <button
          className="login-logout-btn"
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
