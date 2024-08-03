import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, avgRating, sla, cuisines, areaName, cloudinaryImageId } =
    props?.resData?.info;
  // console.log(cloudinaryImageId);
  return (
    <div className="mx-4 hover:scale-110 transition">
      <div className="my-4">
        <img
          className="w-full h-44 object-cover rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="res-img"
        />
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

export const withTopLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute left-4 z-10 bg-red-900 text-white px-4 rounded-sm opacity-90">Top Rated</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
