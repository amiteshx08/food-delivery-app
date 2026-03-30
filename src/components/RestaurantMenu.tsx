import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resDetail, otherMenu } = useRestaurantMenu(resId);
  
  const [showIndex, setShowIndex] = useState<number | null>(null);
  //Filtering otherMenu
  const categories = otherMenu?.filter(
    (c: any) =>
      c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
  );
  // console.log(categories);

  if (otherMenu.length === 0) return <Shimmer />;

  return (
    <div className="m-2.5 text-center">
      <h1 className="font-bold text-2xl">{resDetail?.name}</h1>
      <p className="font-bold">{resDetail?.costForTwoMessage}</p>
      <p>{resDetail?.avgRating} Stars</p>
      {/*mapping onto categories and passing only the relevant data as props to Restaurant Category(5)*/}
      {categories.map((category: any, index) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
