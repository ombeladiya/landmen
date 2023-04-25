import React, { useState } from 'react'
import './login.css';
import { Link } from 'react-router-dom';
export default function Login() {

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
                            <div className="mobileno text-center fs-5" ><b>log in</b></div>
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
                                    value={showOtpField ? 'Login' : 'Send Otp'}
                                />
                            </div>

                        </form>
                        <div className="mobileno flex-column d-flex">
                            <p>Don't Have Account? <span ><Link to='/signup' className='swap-link-btn'>Signup</Link></span> </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
