import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./paddingcommon.css";
export const Product = () => {
  const [productsdata, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const getProduct = () => {
    setIsLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);
  return isloading ? (
    <div>...Loading</div>
  ) : (
    <div className="common">
      <h1>Products</h1>
      {productsdata.map((product, i) => (
        <div key={i}>
          <Link
            style={{ textDecoration: "none" }}
            to={`/products/${product.id}`}
          >
            {`${product.title}`}{" "}
          </Link>
        </div>
      ))}
    </div>
  );
};
