import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
let idx = 0;
const Header = () => {
  // const btnName = "Login";
  const btnNameArr = ["Login", "Logout"];
  // let idx = 0;
  const [btnName, setBtnName] = useState(btnNameArr[idx]);
  return (
    <div className="footer">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Company Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li>Cart</li>
          <li>
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
