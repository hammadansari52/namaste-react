import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FoodDish from "./FoodDish";
import { useState } from "react";
const RestaurantCategory = ({ data, showItemIdx, index }) => {
  const [showItems, setShowItems] = useState(false);
  const [rotateIcon, setRotateIcon] = useState("");
  const [showItemIndex, setShowItemIndex] = showItemIdx;

  const handleClick = () => {
    index === showItemIndex ? setShowItemIndex(null) : setShowItemIndex(index);
    rotateIcon === "" ? setRotateIcon("-rotate-180") : setRotateIcon("");
  };

  return (
    <div onClick={handleClick}>
      <div className="flex justify-between bg-gray-200 p-4 my-4 shadow-lg rounded-md font-bold text-lg cursor-pointer">
        <span>
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span>
          <FontAwesomeIcon
            className={rotateIcon + " transition-transform duration-500 "}
            icon={faChevronDown}
          />
        </span>
      </div>
      <div>
        {showItemIndex === index
          ? data?.itemCards.map((item) => {
              return (
                <FoodDish key={item?.card?.info?.id} info={item?.card?.info} />
              );
            })
          : (rotateIcon === "" ? false : setRotateIcon(""))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
