import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resList, setResList] = useState(restaurants);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            const filteredRes = resList.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setResList(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
