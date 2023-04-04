import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./paddingcommon.css";

export const ProductDetails = () => {
  const [details, setDetails] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const { proid } = useParams();
  const fetchProduct = () => {
    setIsLoading(true);
    axios
      .get(`https://dummyjson.com/products/${proid}`)
      .then((response) => {
        console.log(response.data);
        setDetails(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return isloading ? (
    <div>...Loading</div>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",

        alignItems: "center",
      }}
      className="common"
    >
      <img
        src={details.thumbnail}
        alt="product"
        style={{ width: 400, height: 250, marginTop: 35 }}
      />
      <div style={{ marginTop: 40, marginLeft: 40 }}>
        <h3>{` Category :- ${details.category}`}</h3>
        <h3>{` Brand :- ${details.brand}`}</h3>
        <h3>{` Price :- ${details.price}`}</h3>
        <h5>{` Description :- ${details.description}`} </h5>
      </div>
    </div>
  );
};
