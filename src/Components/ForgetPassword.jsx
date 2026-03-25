import React, { useState } from "react"
import "./LoginSignup.css";

import email_icon from "../assets/email.png"

const forgetp = ({goBack}) => {
    const [submit, setSubmit] = useState(false)

    if(submit){
        return (
            <div className="container">
                <div className="header">
                    <div className="text">Check Your Email</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <p style={{textAlign: "center", color: "gray", padding: "10px", fontSize: "20px", margin: "0px"}}>
                        We've sent a password reset link to your email.
                    </p>
                    <div className="submit-container">
                        <div className="submit" onClick={goBack}>Back to Login</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="header">
                <div className="text">Forget Password</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <p style={{textAlign: "center", color: "gray", padding: "0px 20px", margin: "0px"}}>Enter your Email & We'll send you a reset link.</p>
                <div className="input">
                    <img src={email_icon} />
                    <input type="email" placeholder="Email" />
                </div>
            </div>
            <div className="submit-container1">
                <div className="submit gray" onClick={goBack}>Back</div>
                <div className="submit" onClick={() => setSubmit(true)}>Send Link</div>
            </div>
        </div>
    )
} 

export default forgetp