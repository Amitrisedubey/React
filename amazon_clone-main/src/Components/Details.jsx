import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Details.css"
import { useDispatch } from 'react-redux';

import { addCart } from "../redux/Cart/action";


export const ProductDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const [product, setProduct] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://amazonabc.herokuapp.com/products/${id}`);
            setProduct(await response.json());
        }
        getProduct()
       
    }, )



    const addProduct = (product) => {
        dispatch(addCart(product))
    }

    return (
        <div>
            <img src={product.img} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.descr}</p>
            <button onClick={() => addProduct(product)} className="addtocartbtn">ADD TO CART</button>

        </div>
    )
}
