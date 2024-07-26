import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {restaurants.map((res) => (
        <RestaurantCard key={res.info.id} resData={res} />
      ))}
    </div>
  </div>
);

export default Body;
