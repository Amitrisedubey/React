import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Product } from "./Products";
import { About } from "./About";
import { Contact } from "./Contact";
import { ProductDetails } from "./ProductDetails";
export const Routerss = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/products/:proid" element={<ProductDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};
