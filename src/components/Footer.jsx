import React from 'react'
import './footer.css';
export default function Footer() {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">
                    <h3>LANDMEN<span>.in</span></h3>
                    <p className="footer-links">
                        <a href="/" className="link-1">Home</a>
                        <a href="/">Blog</a>
                        <a href="/">Pricing</a>
                        <a href="/">About</a>
                        <a href="/">Faq</a>
                        <a href="/">Contact</a>
                    </p>

                    <p className="footer-company-name">LANDMEN.in ©2023</p>
                </div>

                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>803 E,vrundavan heights</span>mota varacha,surat</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+91 7990845663</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:support@beladiya.com">support@LandMan.com</a></p>
                    </div>
                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>

                    <div className="footer-icons">
                        <a href="/"><i className="fa fa-facebook"></i></a>
                        <a href="/"><i className="fa fa-twitter"></i></a>
                        <a href="/"><i className="fa fa-linkedin"></i></a>
                        <a href="/"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
