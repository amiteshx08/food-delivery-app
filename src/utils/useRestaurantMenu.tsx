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
  const [wholeMenu, setWholeMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  //Fetching Logic
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    //Finding the Menu[], which has all the items listed. (cards[])
    const menu = json?.data?.cards?.find((c: any) => c.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    setResDetail(json?.data?.cards[2]?.card?.card?.info);

    setWholeMenu(menu);
  };

  return { resDetail, wholeMenu };
};

export default useRestaurantMenu;
