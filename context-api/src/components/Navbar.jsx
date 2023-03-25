import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Cart } from "./Cart";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      Theme is : {theme} in navbar <br />
      <button
        onClick={() => {
          toggleTheme();
        }}
      >
        Theme
      </button>
      <Cart />
    </div>
  );
};
