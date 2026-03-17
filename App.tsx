import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h2 className="title">Food is arriving!</h2>;
};

const Heading = () => {
  return (
    <div>
      <h1 className="header">Food Delivery</h1>
      <Title />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<Heading />);
