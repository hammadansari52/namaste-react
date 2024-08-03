import RestaurantCard, { withTopLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";

const Body = () => {
  // restaurants = [];
  const [resList, setResList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering

  if (onlineStatus === false) return <Offline />;

  const TopRestaurantCard = withTopLabel(RestaurantCard);

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" max-w-screen-lg mx-auto">
      <div className="flex my-6">
        <div className="">
          <input
            className="border border-solid border-black rounded-sm mx-6 py-2 px-2"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              // console.log(searchText);
            }}
          />
          <button
            className="bg-slate-600 px-4 py-2 text-slate-100 rounded-md mx-2"
            onClick={() => {
              const filteredRes = resList.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-2 bg-blue-600 mx-2 text-white rounded-md"
          onClick={() => {
            console.log("button clicked");
            const filteredRes = resList.filter(
              (res) => res.info.avgRating >= 4.3
            );
            setFilteredRes(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((res) => (
          <Link
            key={res.info.id}
            to={/restaurants/ + res.info.id}
            className="w-1/4"
          >
            {res?.info?.avgRating >= 4.4 ? (
              <TopRestaurantCard resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
