import React from 'react'
import "./ItemList.css"
import { useNavigate } from "react-router-dom";

export const Productlist = () => {

    const navigate = useNavigate();

    return (
        <div className='productlist-cont'>
            <div onClick={() => navigate(`/showProduct/${'home'}/${'freashner'}/${'cleaning'}/${'camera'}`)}>
                <h1>Home</h1>
                <img src="https://m.media-amazon.com/images/I/81x5wCYdNXL._SX466_.jpg" height="150" width="150" alt="home" />
            </div>
            <div onClick={() => navigate(`/showProduct/${'book'}/${'motivation'}/${'stories'}/${'poem'}`)}>
                <h1>Audio</h1>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/CEPC/storage/2020/May/clearance-tile_440x440_04_new.jpg" height="150" width="150" alt="Audio" />
            </div>
            <div onClick={() => navigate(`/showProduct/${'fashion'}/${'shirt'}/${'bag'}/${'scarf'}`)}>
                <h1>Refrigerators</h1>
                <img src="https://m.media-amazon.com/images/I/41LY94PzSRL._SY355_.jpg" height="150" width="150" alt="Refrigerator" />
            </div>
            <div onClick={() => navigate(`/showProduct/${'electronics'}/${'mobile'}/${'harddisk'}/${'tv'}`)}>
                <h1>Mobiles</h1>
                <img src="https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg" height="150" width="150" alt="mobiles" />
            </div>
            <div onClick={() => navigate(`/showProduct/${'fashion'}/${'shirt'}/${'bag'}/${'scarf'}`)}>
                <h1>Watches</h1>
                <img src="https://m.media-amazon.com/images/I/71CrNuzQaHL._SX679_.jpg" height="150" width="150" alt="Refrigerator" />
            </div>
            <div onClick={() => navigate(`/showProduct/${'fashion'}/${'shirt'}/${'bag'}/${'scarf'}`)}>
                <h1>Laptops</h1>
                <img src="https://m.media-amazon.com/images/I/71an9eiBxpL._SX569_.jpg" height="150" width="150" alt="Refrigerator" />
            </div>
        </div>
    )
}
