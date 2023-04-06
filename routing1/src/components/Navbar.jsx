import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { ChakraProvider } from "@chakra-ui/react";
export const Navbar = () => {
  return (
    <ChakraProvider>
      <div className="navbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Home</h1>
        </Link>
        <Link to="/about" style={{ margin: "10px", textDecoration: "none" }}>
          <h1>About</h1>
        </Link>

        <Link to="/users" style={{ margin: "10px", textDecoration: "none" }}>
          <h1>Users</h1>
        </Link>
        <Link to="/contact" style={{ margin: "10px", textDecoration: "none" }}>
          <h1> Contact</h1>
        </Link>
        <Link to="/login" style={{ margin: "10px", textDecoration: "none" }}>
          <h1>Login</h1>
        </Link>
      </div>
    </ChakraProvider>
  );
};
