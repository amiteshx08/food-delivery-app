import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }: any) => {
  //Destructuring title and itemCards
  const { title, itemCards } = data;
 
  const handleClick = () => {
    setShowIndex()
  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title}
            {itemCards?.length ? `(${itemCards.length})` : ""}
          </span>
          <span>⬇️</span>
        </div>
        {/*Passing only the itemCards array to ItemList*/}
        { showItems && itemCards && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
