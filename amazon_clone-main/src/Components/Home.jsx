import React, { useEffect } from 'react'
import { Productlist } from './ItemList'
import { useDispatch } from 'react-redux';
import { storeData } from "../redux/Product/action";
import { Slideshow} from "./SlideShow"
import { Footer} from "./Footer"
export const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        fetch("https://amazonabc.herokuapp.com/products")
            .then((res) => res.json())
            .then((res) => dispatch(storeData(res)))
            .catch((err) => console.error(err))

    },)

    return (
        <div>
            <Slideshow />
            <Productlist />
            <Footer />
        </div>
    )
}
