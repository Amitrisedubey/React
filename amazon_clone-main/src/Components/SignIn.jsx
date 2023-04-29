import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import "./SignIn.css"
export const Login = () => {
    const navigate = useNavigate()
    return (
        <div>
            

            <div className="login-box">
                <h1>Sign-In</h1>
                <h4>Email or mobile phone number</h4>
                <input className="lgn-inp" type="text" /> <br></br>
                <button onClick={() => navigate("/")} className="f-btn">Continue</button>
                <h5>By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span> Privacy Notice.</span></h5>
                <h4> <NavigateNextIcon style={{height:15,marginRight:-10}}/> Need help?</h4>
                <h4>-----------------New to Amazon?-------------------</h4>
                <button className="f-btn2" onClick={() => navigate("/Register")}>Create your Amazon account</button>
                
            </div>
            <div className="foott">
                <span> Conditions of Use</span><span> Privacy Notice </span><span> Help </span>
                <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
    )
}
