import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
export default function Signup() {
    const [showOtpField, setShowOtpField] = useState(false);

    const handlesubmit = (e) => {
        e.preventDefault();
        if (showOtpField) {
            console.log('login successfully!');
        } else {
            setShowOtpField(true);
            console.log('otp sent');
        }
    }
    return (
        <div>
            <br />
            <div className="main-box-login d-flex">
                <div className="login-box d-flex justify-content-center">
                    <div className="lbox ">

                        <form action="" onSubmit={handlesubmit} >
                            <div className="mobileno text-center fs-5" ><b>Sign Up</b></div>
                            <div className="mobileno flex-column d-flex ">
                                <label htmlFor="name">Name</label>
                                <input
                                    className="mobile-number-input"
                                    type="text"
                                    name="name"
                                    id=""
                                    required />
                            </div>
                            <div className="mobileno flex-column d-flex ">
                                <label htmlFor="email">Email</label>
                                <input
                                    className="mobile-number-input"
                                    type="email"
                                    name="email"
                                    id=""
                                    required />
                            </div>
                            <div className="mobileno flex-column d-flex ">
                                <label htmlFor="mobile">Mobile</label>
                                <input
                                    className="mobile-number-input"
                                    type="tel"
                                    name="mobile"
                                    id=""
                                    pattern='[0-9]{10}'
                                    required />
                            </div>
                            {showOtpField && <div className="mobileno flex-column d-flex" >
                                <label htmlFor="otp">Otp</label>
                                <input className="otp-number-input"
                                    type="Number"
                                    name="otp"
                                    id=""
                                    required />
                            </div>
                            }
                            <div className="mobileno flex-column d-flex mt-3">
                                <input className="login-btn" type="submit" name="login" id=""
                                    value={showOtpField ? 'Sign up' : 'Send Otp'}
                                />
                            </div>

                        </form>
                        <div className="mobileno flex-column d-flex">
                            <p>Already Has Account? <span ><Link to='/login' className='swap-link-btn'>Log in</Link></span> </p>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br />

        </div>
    )
}

