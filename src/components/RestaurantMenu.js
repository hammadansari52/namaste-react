import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const resId = useParams();
  // 89361
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchResInfo();
  }, []);

  //   console.log(resId.id);
  const fetchResInfo = async () => {
    const data = await fetch(MENU_API + resId.id);
    const json = await data.json();
    // console.log(json);
    setResInfo(json?.data);
  };

  // console.log(json);
  if (resInfo === null) return <Shimmer />;

  const { id, name, cuisines, avgRating, costForTwoMessage, areaName } =
    resInfo?.cards[2]?.card?.card?.info;
  const recommendedItems =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  //   console.log(recommendedItems);

  return (
    <div className="res-info">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <p>
        {avgRating} - {costForTwoMessage}
      </p>
      <p>{areaName}</p>
      <h2>Menu</h2>
      <ul>
        {recommendedItems.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} -{" "}
            <b>
              Rs.{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}{" "}
            </b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
