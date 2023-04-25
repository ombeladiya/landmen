import React from 'react';
import './productbanner.css';
import img1 from '../images/s4.png';
import img2 from '../images/s5.gif';


export default function ProductBanner() {
    return (
        <div>
            <div className="container">
                <div className="main-category-card">

                </div>
                <div className="main-category-card">

                </div>
            </div>
            <div className="container mt-3">
                <div className="prd-card-out">
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className="container mt-3">
                <div className="prd-card-out">
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
    )
}
