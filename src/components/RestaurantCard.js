import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { name, avgRating, sla, cuisines, areaName, cloudinaryImageId } =
    props?.resData?.info;
  console.log(cloudinaryImageId);
  return (
    <div className="res-card">
      <div className="res-img">
        <img src={CDN_URL + cloudinaryImageId} alt="res-img" />
      </div>
      <h3>{name}</h3>
      <h4>
        {avgRating} &#183; {sla?.slaString} mins
      </h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
