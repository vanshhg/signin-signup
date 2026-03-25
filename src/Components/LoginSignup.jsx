import React, { useState } from "react"
import "./LoginSignup.css"; 

import user_icon from "../assets/person.png"
import password_icon from "../assets/password.png"
import email_icon from "../assets/email.png"

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up")

    function state(){
        if( action === "Sign Up"){
            setAction("Login")
        }else{
            setAction("Sign Up")
        }
    }

    return(
        <div className="container">
            <div className="header">
                <div className="text">
                    {action}
                </div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login"? <div></div> : <div className="input">
                    <img src={user_icon} />
                    <input type="text" placeholder="Name"/>
                </div>}
                <div className="input">
                    <img src={email_icon} />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={password_icon} />
                    <input type="password" placeholder="Password"/>
                </div>
                {action === "Sign Up"? <div></div>:<div className="forgot"><span>Forgot Password?</span></div>}
                <div className="submit-container">
                    <div className={action === "Login"? "submit gray": "submit"} onClick={state}>Sign Up</div>
                    <div className={action === "Sign Up"? "submit gray": "submit"} onClick={state}>Login</div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup