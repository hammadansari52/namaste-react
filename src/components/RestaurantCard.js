import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { name, avgRating, sla, cuisines, areaName, cloudinaryImageId } =
    props?.resData?.info;
  // console.log(cloudinaryImageId);
  return (
    <div className="w-48 mx-4 hover:scale-110 transition">
      <div className="my-4">
        <img className="w-48 h-32 object-cover rounded-lg" src={CDN_URL + cloudinaryImageId} alt="res-img" />
      </div>
      <h3 className="font-bold pb-2">{name}</h3>
      <h4>
        {avgRating} &#183; {sla?.slaString} mins
      </h4>
      <h4 className="text-gray-700">{cuisines.join(", ")}</h4>
      <h4 className="font-medium">{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
