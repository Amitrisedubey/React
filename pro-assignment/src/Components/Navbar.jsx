import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#cffa80",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "60px",
        fontSize: "28px",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>Home</h1>
      </Link>
      <Link to="/counter" style={{ textDecoration: "none" }}>
        <h1>Counter</h1>
      </Link>
      <Link to="/todos" style={{ textDecoration: "none" }}>
        <h1>Todos</h1>
      </Link>
      <Link to="/movie" style={{ textDecoration: "none" }}>
        <h1>Movies</h1>
      </Link>
      <Link to="/user" style={{ textDecoration: "none" }}>
        <h1>Users</h1>
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <h1>Contact</h1>
      </Link>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <h1>Login</h1>
      </Link>
    </div>
  );
};
