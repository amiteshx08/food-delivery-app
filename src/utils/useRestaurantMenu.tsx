import { useEffect, useState } from "react";
import { MENU_API } from "./constant";
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

const useRestaurantMenu = (resId: string | undefined) => {
  const [menuItems, setMenuItems] = useState<MenuInfo[]>([]);
  const [resDetail, setResDetail] = useState<RestaurantDetails | null>(null);
  const [otherMenu, setOtherMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    const menuCard = json?.data?.cards
      ?.find((c: any) => c.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        (c: any) => c.card?.card?.itemCards,
      );
    const wholeMenu = json?.data?.cards?.find((c: any) => c.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const items = menuCard?.card?.card?.itemCards ?? [];
    setMenuItems(items.map((item: any) => item.card.info));
    setResDetail(json?.data?.cards[2]?.card?.card?.info);
    setOtherMenu(wholeMenu);
  };

  return { menuItems, resDetail, otherMenu };
};

export default useRestaurantMenu;
