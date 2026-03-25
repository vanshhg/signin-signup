import React from "react"
import "./LoginSignup.css";

import user_icon from "../assets/person.png"
import password_icon from "../assets/password.png"
import email_icon from "../assets/email.png"

const LoginSignup = () => {
    return(
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} />
                    <input type="text" placeholder="Username"/>
                </div>
                <div className="input">
                    <img src={email_icon} />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={password_icon} />
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="forgot"><span>Forgot Password?</span></div>
                <div className="submit-container">
                    <div className="submit">Sign Up</div>
                    <div className="submit">Login</div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup