import { CDN_URL } from "../utils/constants";

const FoodDish = ({ info }) => {
//   console.log(info);
  return (
    <div className="flex justify-between my-2 p-2">
      <div className=" border-b border-gray-300 w-9/12">
        <h1 className="font-extrabold">{info?.name}</h1>
        <h3 className="font-bold my-2">₹ {info?.price / 100 || info?.defaultPrice / 100}</h3>
        <p className="text-gray-600">{info?.description}</p>
      </div>
      <div className="w-3/12 h-40 p-2">
        <img className=" w-full h-full object-center object-cover rounded-2xl" src={CDN_URL + info?.imageId} alt="" />
      </div>
    </div>
  );
};

export default FoodDish;
