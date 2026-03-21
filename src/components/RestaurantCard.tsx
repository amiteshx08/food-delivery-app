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
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="restaurant image"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} Stars</p>
    </div>
  );
};

export default RestaurantCard;