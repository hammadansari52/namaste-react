import { LOGO_URL } from "../utils/constants";

const Header = () => (
  <div className="footer">
    <div className="logo-container">
      <img
        className="logo"
        src={LOGO_URL}
        alt="Company Logo"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
