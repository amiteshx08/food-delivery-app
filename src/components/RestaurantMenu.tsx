import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router";

interface RestaurantDetails {
  id: string;
  name: string;
  avgRating: number;
  costForTwoMessage: string;
}

interface MenuInfo {
  id: string;
  name: string;
  category: string;
}
const RestaurantMenu = () => {
  const [resDetail, setResDetail] = useState<RestaurantDetails | null>(null);
  const [menuList, setMenuList] = useState<MenuInfo[]>([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    const items =
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards;
    setResDetail(json.data.cards[2].card.card.info);
    setMenuList(items.map((item: any) => item.card.info));
  };
  if (menuList.length === 0) return <Shimmer />;

  return (
    <div className="menu-details">
      <h1>{resDetail?.name}</h1>
      <p>{resDetail?.costForTwoMessage}</p>
      <p>{resDetail?.avgRating} Stars</p>
      <ul>
        {menuList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
