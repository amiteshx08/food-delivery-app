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
    <div className="w-64 cursor-pointer">
      <div className="relative">
        <img
          className="h-50 w-70.25 rounded-2xl object-cover"
          alt="restaurant image"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="p-2">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-500">{cuisines.join(", ")}</p>
        <p className="text-sm text-gray-500">{avgRating} 🌟</p>
      </div>
    </div>
  );
};

export const withOpenLabel = (
  RestaurantCard: ComponentType<RestaurantInfo>,
) => {
  return (props: RestaurantInfo) => {
    return (
      <div className="relative">
        <label className="absolute top-1 left-1 z-10 rounded-full bg-gray-950/85 px-2.5 py-1 text-xs font-semibold tracking-wide text-white shadow-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
