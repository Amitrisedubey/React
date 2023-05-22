import { FaTimes, FaBars } from "react-icons/fa";
import "../Styles/main.css";
import { useRef } from "react";
export const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_navbar");
  };
  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">My work</a>
        <a href="/#">Blog</a>
        <a href="/#">About me</a>
        <button className="navbtn clsbtn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="navbtn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};
