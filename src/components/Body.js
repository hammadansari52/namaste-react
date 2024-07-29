import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // restaurants = [];
  const [resList, setResList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [nextOffset_, setNextOffset_] = useState("");
  const [csrf_, setCsrf_] = useState("");

  let observer = new IntersectionObserver(callback, { threshold: 0 });
  function observeInfinite() {
    document.getElementById("infinite") === null
      ? console.log("null")
      : observer.observe(document.getElementById("infinite"));
  }

  async function updateData() {
    // console.log("no" + nextOffset_)
    // console.log("no" + csrf_)
    const reqObj = {
      lat: 26.8466937,
      lng: 80.94616599999999,
      nextOffset: nextOffset_,
      widgetOffset: {
        NewListingView_category_bar_chicletranking_TwoRows: "",
        NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
        Restaurant_Group_WebView_SEO_PB_Theme: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
        inlineFacetFilter: "",
        restaurantCountWidget: "",
      },
      filters: {},
      seoParams: {
        seoUrl: "https://www.swiggy.com/",
        pageType: "FOOD_HOMEPAGE",
        apiName: "FoodHomePage",
      },
      page_type: "DESKTOP_WEB_LISTING",
      _csrf: csrf_,
    };
    const req = new Request(
      "https://www.swiggy.com/dapi/restaurants/list/update",
      {
        method: "POST",
        body: JSON.stringify(reqObj),
      }
    );

    const res = await fetch(req);
    console.log(res);
    // return res;
  }

  function callback(entries, observer) {
    if (entries[0].intersectionRatio > 0) {
      console.log("triggered");
      updateData();
      observer.unobserve(entries[0].target);
      // console.log("triggered");
    }
  }

  useEffect(() => {
    observeInfinite();
  }, [resList]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    resListbackup =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setNextOffset_(json?.data?.pageOffset?.nextOffset);
    setCsrf_(json?.csrfToken);
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              // console.log(searchText);
            }}
          />
          <button
            className="search"
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
          className="filter-btn"
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
      <div className="res-container">
        {filteredRes.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
      <div id="infinite">infinite</div>
    </div>
  );
};

export default Body;
