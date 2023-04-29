import React from 'react';
import "./ThankYou.css";
import { useNavigate } from 'react-router-dom';
export const ThankYou = () => {
    const navigate = useNavigate();
    return (
        <div id="div1">
       <h1 id="con">Congratulations</h1>
    
       <img id="image" src="https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711429.jpg" alt=""/>
    <div id ="second">
       <h2>Your Order Placed Successfully !</h2>
       <h4>Your Order Id is 201896567484536</h4>
       <h5>Supplier Will Contact You in few Minutes</h5>
       <button className="f-btn" onClick={() => navigate("/")}>Continue Shopping</button>
    </div>
    </div>
    )
}