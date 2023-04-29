import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    Box,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    CardMedia
} from '@mui/material';
import "./Item.css"
import Stack from '@mui/material/Stack';


import { useNavigate } from "react-router-dom";

export const Product = () => {

    const [sorting, setSorting] = useState("");
    const [categorytype, setCategoryType] = useState("")
    // const [] = useState("")
    // console.log(categorytype)
    const { cat, type1, type2, type3 } = useParams();

    const navigate = useNavigate()

    const res = useSelector((state) => state.reducer.data);
    // console.log(res)

    return (
        <div className="product-cont">
            <h4>Sort by Price</h4>
            <Stack spacing={2} direction="row">
                <Button variant="contained"  onClick={() => setSorting("asc")}>Low To High</Button>
                <Button variant="contained" onClick={() => setSorting("desc")}>High To Low</Button>
            </Stack>
            {/* <h4>Filter by Category</h4> */}
            <Stack spacing={2} direction="row">
                <Button  onClick={() => setCategoryType("")}></Button>
                <Button  onClick={() => setCategoryType(type1)}></Button>
                <Button  onClick={() => setCategoryType(type2)}></Button>
                <Button  onClick={() => setCategoryType(type3)}></Button>

            </Stack>
            <h1>Show Products</h1>
            <div className="product-cont1">
                {
                    res.filter((categ) => {
                        return categ.category === cat
                    }).filter((types) => {
                        if (categorytype === "") {
                            return res
                        } else {
                            return types.type === categorytype
                        }
                    })
                        .sort((a, b) => {
                            if (sorting === "asc") {
                                return a.price - b.price
                            } else if (sorting === "desc") {
                                return b.price - a.price
                            } else {
                                return 0;
                            }
                        })
                        .map((data, index) => {
                            return (
                                <div key={index}>
                                    <Box width='300px' >
                                        <Card>
                                            <CardMedia
                                                component='img'
                                                height='280'
                                                image={data.img}
                                                alt='unsplash image'
                                                className="Prodimage"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant='h5' component='div'>
                                                    {data.title}
                                                </Typography>
                                                <Typography gutterBottom variant='p' component='div'>
                                                    Rs. {data.price}
                                                </Typography>
                                            </CardContent>
                                            <CardActions className="btn">
                                                <Button variant="contained" onClick={() => { navigate(`/productDetails/${data.id}/${data.type}`) }}>Buy Now</Button>
                                            </CardActions>
                                        </Card>
                                    </Box>
                                </div>
                            )
                        })
                }
            </div>
            
        </div>
    )
}
