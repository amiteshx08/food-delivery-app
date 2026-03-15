declare var React: any;
declare var ReactDOM: any;

const heading = React.createElement(
    "h1", 
    {id: "heading"}, 
    "Welcome to Food-Delivery!!"
);

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(heading);
