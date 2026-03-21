import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Heading = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
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
