import ReactDOM from "react-dom/client";
import Heading from "./components/Heading";
import Body from "./components/Body";

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
