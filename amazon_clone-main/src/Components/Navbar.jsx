
import { Link } from 'react-router-dom';
import "./Navbar.css"

import { useNavigate } from "react-router-dom"
import {  useSelector } from 'react-redux';
// import { catData } from "../redux/Product/action";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonIcon from '@mui/icons-material/Person';
export const Header = () => {

    const cartdata = useSelector((state) => state.handleCart);


    const navigate = useNavigate();

    return (
        <div>
            <header id="container">
                <div id="nav-bar">
                    <div id="nav-belt">
                        <div class="nav-left">
                            <div id="nav-logo">
                                <Link to="/"><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" height="30" width="90" alt="logo" /></Link>
                            </div>
                            <div id="nav-tools" className='address'>
                            <LocationOnOutlinedIcon style={{ color: "white",marginTop: 10 ,marginLeft: 10 }}/>
                                <Link to="/login">Hello <br></br>Select your address</Link>
                                
                            </div>
                        </div>
                        <div class="nav-fill">
                            <div id="nav-search">
                                <div id="nav-search-bar-form">
                                    <div class="nav-left">
                                        <Link to="">ALL</Link>
                                    </div>
                                    <div class="nav-fill">
                                        
                                    </div>
                                    <div class="nav-right">
                                        <button onClick={() => navigate('/')}>Search</button>
                                    </div>
                                    <div id="nav-logo">
                                <Link to="/"><img src="https://w7.pngwing.com/pngs/897/1002/png-transparent-flag-of-india-flag-of-china-emoji-india-flag-orange-logo.png" height="30" width="60" alt="logo" /></Link>
                            </div>
                                </div>
                            </div>
                        </div>
                        <div class="nav-right">
                            <div id="nav-tools">
                                <PersonIcon style={{ color: "white",marginTop: 10 ,marginLeft: 10 }}/>
                                <Link to="/login">Log in</Link>
                                <AddShoppingCartIcon style={{ color: "white",marginTop: 10 ,marginLeft: 10 }}/>
                                <Link to="/cart">Cart({cartdata.length})</Link>
                            </div>
                        </div>
                    </div>
                    <div id="nav-main">
                        <span onClick={() => navigate(`/showProduct/${'home'}/${'freashner'}/${'cleaning'}/${'camera'}`)}>Home</span>
                        <span onClick={() => navigate(`/showProduct/${'electronics'}/${'mobile'}/${'harddisk'}/${'tv'}`)}>Mobiles</span>
                        <span onClick={() => navigate(`/showProduct/${'book'}/${'motivation'}/${'stories'}/${'poem'}`)}>Audio</span>
                        <span onClick={() => navigate(`/showProduct/${'fashion'}/${'shirt'}/${'bag'}/${'scarf'}`)}>Refrigerator</span>
                        <span onClick={() => navigate(``)}>Today's Deals</span>
                        <span onClick={() => navigate(``)}>New Releases</span>
                        <span onClick={() => navigate(``)}>Prime</span>
                        <span onClick={() => navigate(``)}>Best Sellers</span>
                    </div>
                </div>
            </header>
        </div>
    )
}
