import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams() 
  const {menuItems, resDetail} = useRestaurantMenu(resId)
  if (menuItems.length === 0) return <Shimmer />;

  return (
    <div className="menu-details">
      <h1>{resDetail?.name}</h1>
      <p>{resDetail?.costForTwoMessage}</p>
      <p>{resDetail?.avgRating} Stars</p>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
