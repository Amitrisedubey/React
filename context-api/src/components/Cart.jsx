import { useContext } from "react";
import { CartContext } from "../contexts/Cartcontext";
export const Cart = () => {
  const { cart } = useContext(CartContext);
  return <div> No of Cart items:{cart}</div>;
};
