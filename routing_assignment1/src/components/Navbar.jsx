import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="navv">
      <Link to="/" className="ink" style={{ textDecoration: "none" }}>
        <h2>Home</h2>
      </Link>
      <Link
        to="/products"
        style={{ margin: 10, textDecoration: "none" }}
        className="ink"
      >
        <h2>Products</h2>
      </Link>
      <Link
        to="/about"
        style={{ margin: 10, textDecoration: "none" }}
        className="ink"
      >
        <h2> About</h2>
      </Link>
      <Link to="/contact" className="ink" style={{ textDecoration: "none" }}>
        <h2>Contact</h2>
      </Link>
    </div>
  );
};
