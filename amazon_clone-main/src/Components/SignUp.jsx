import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./SignIn.css"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export const Register = () => {

    const navigate = useNavigate()

    return (
        <div>
            

            <div className="login-box">
                <h1>Create account</h1>
                <h4>Your Name</h4>
                <input className="lgn-inp" type="text" /> <br></br>
                <h4>Mobile number or email</h4>
                <input className="lgn-inp" type="text" /> <br></br>
                <h4>Password</h4>
                <input className="lgn-inp" type="text" /> <br></br>
                <h4>Password again</h4>
                <input className="lgn-inp" type="text" /> <br></br>

                <button onClick={() => navigate("/")} className="f-btn">Continue</button>
                <h5>By creating an account or logging in, you agree to Amazon's <span>  Conditions of Use  </span> and <span> Privacy Policy.</span> </h5>
                <h4> <NavigateNextIcon style={{height:15,marginRight:-10}}/> Need help?</h4>
                <h4>----------Already have an Account?------------</h4>
                <button className="f-btn2" onClick={() => navigate("/login")}>Sign in </button>
                
            </div>
            <br></br>
            <br></br>
            <div className="foott">
                <span> Conditions of Use</span><span> Privacy Notice </span><span> Help </span>
                <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
            
        </div>
    )
}
