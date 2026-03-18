import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="restaurant image"
        src="https://b.zmtcdn.com/data/pictures/7/21317067/baac459e901bf025e7e6d5c03fe831b3_featured_v2.jpg?output-format=webp"
      />
      <h3>Koa Cafe</h3>
      <h4>Italian,Thai Food,French,Indo-Japanese</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <span>Search</span>
      </div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div>
      <Heading />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<AppLayout />);
