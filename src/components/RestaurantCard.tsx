import { ComponentType } from "react";
import { CDN_URL } from "../utils/constant";

interface RestaurantInfo {
  resData: {
    info: {
      id: string;
      name: string;
      cuisines: string[];
      avgRating: number;
      cloudinaryImageId: string;
    };
  };
}
const RestaurantCard = (props: RestaurantInfo) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = props.resData.info;
  return (
    <div className="w-65 h-100 p-1.75 m-1.75 border bg-amber-100">
      <img
        className="w-[inherit] h-[65%]"
        alt="restaurant image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold m-0 p-0">{name}</h3>
      <p className="font-medium">{cuisines.join(", ")}</p>
      <p>{avgRating} 🌟</p>
    </div>
  );
};
export const withOpenLabel = (
  RestaurantCard: ComponentType<RestaurantInfo>,
) => {
  return (props: RestaurantInfo) => {
    return (
      <div>
        <label className="m-0.5 p-0.5 absolute bg-black text-cyan-50 rounded-lg ">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
