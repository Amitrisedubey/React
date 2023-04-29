import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "./ShopCart.css"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { delCart, addCart } from '../redux/Cart/action';


export const Cart = () => {

    const dispatch = useDispatch();

    const [total_price, settotal_price] = useState(null)

    const cartdata = useSelector((state) => state.handleCart);


    useEffect(() => {

        const sum = cartdata.reduce((accumulator, object) => {
            return accumulator + Number(object.final)
        }, 0);
        settotal_price(sum)
    }, [cartdata])


    const deleteproduct = (product) => {
        dispatch(delCart(product))
    }

    const increment = (product) => {
        dispatch(addCart(product))
    }

   

    const navigate = useNavigate()
    return (
        <div>
            <h1>Shopping Cart</h1>

            {
                cartdata.map((e) => {
                    return (
                        <div>
                            <div className="cart">
                                <img src={e.img} alt={e.title} />
                                <h1 >{e.title}</h1>
                                <div className='empty'> </div>
                                <button onClick={() => increment(e)}>Add (+)</button>
                                <p>{e.qty}</p>
                                <button onClick={() => deleteproduct(e)}>Sub (-)</button>
                                
                            </div>
                            <hr></hr>
                        </div>
                    )
                })

            }
        <div className="total">
            <h2>Cart subtotal : Rs. {total_price}</h2>
            <div className='empty'> </div>
            <input type="checkbox" />
            <label ><b>This order contains a gift</b></label>
            <div className='empty'> </div>
            <div className='empty'> </div>
            <div><button className="f-btn" onClick={() => navigate("/ThankYou")} >Proceed to Buy</button></div>
            
            
        </div>

        </div>
    )
}
