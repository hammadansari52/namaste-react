import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

let idx = 0;
const Header = () => {
  // const btnName = "Login";
  const btnNameArr = ["Login", "Logout"];
  // let idx = 0;
  const [btnName, setBtnName] = useState(btnNameArr[idx]);
  const onlinestatus = useOnlineStatus();
  return (
    <div className="flex justify-between items-center border-b border-solid border-gray-300 shadow-md">
      <div className="px-4">
        <Link to={"/"}><img className="w-32" src={LOGO_URL} alt="Company Logo" /></Link>
      </div>
      <div className="flex">
        <ul className="flex">
          <li className="px-4">Online Status: {onlinestatus === true ? "🟢" : "🔴"}</li>
          <li className="px-4"><Link to={"/"}>Home</Link></li>
          <li className="px-4"><Link to={"/about"}>About</Link></li>
          <li className="px-4"><Link to={"/contact"}>Contact Us</Link></li>
          <li className="px-4"><Link to={"/grocery"}>Grocery</Link></li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <button
              className="login-btn"
              onClick={() => {
                idx = 1 - idx;
                setBtnName(btnNameArr[idx]);
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
