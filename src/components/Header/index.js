import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  console.log("kavya");
  return (
    <nav className="Header-container">
      <Link className="text-decoration" to="/">
        <p className="header-p1">Home</p>
      </Link>
      <Link className="text-decoration" to="/about">
        <p className="header-p1">About Us</p>
      </Link>
      <Link className="text-decoration" to="/features">
        <p className="header-p1">Features</p>
      </Link>
      <Link className="text-decoration" to="/contact">
        <p className="header-p1">Contact</p>
      </Link>
    </nav>
  );
};

export default Header;
