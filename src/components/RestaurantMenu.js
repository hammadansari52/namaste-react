import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const resId = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showItemIndex, setShowItemIndex] = useState(null);

  // console.log(json);
  if (resInfo === null) return <Shimmer />;

  const { id, name, cuisines, avgRating, costForTwoMessage, areaName } =
    resInfo?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold py-2">{name}</h1>
        <h3 className="font-medium">{cuisines.join(", ")}</h3>
      </div>
      {categories.map((category, index)=>{
        return (
          <RestaurantCategory key={category?.card?.card?.title} data = {category?.card?.card}  showItemIdx = {[showItemIndex, setShowItemIndex]} index = {index}/>
        )
      })}
    </div>
  );
};

export default RestaurantMenu;
