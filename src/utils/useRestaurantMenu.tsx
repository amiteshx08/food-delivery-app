import { useEffect, useState } from "react";
import { MENU_API } from "./constant";
interface RestaurantDetails {
  id: string;
  name: string;
  avgRating: number;
  costForTwoMessage: string;
}

const useRestaurantMenu = (resId: string | undefined) => {
  const [resDetail, setResDetail] = useState<RestaurantDetails | null>(null);
  const [otherMenu, setOtherMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    const wholeMenu = json?.data?.cards?.find((c: any) => c.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    setResDetail(json?.data?.cards[2]?.card?.card?.info);
    setOtherMenu(wholeMenu);
  };

  return { resDetail, otherMenu };
};

export default useRestaurantMenu;
