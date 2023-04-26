import React from 'react';
import './productbanner.css';
import img1 from '../images/s2.png';
import img2 from '../images/s5.gif';
import img3 from '../images/p20.webp';
import img4 from '../images/p21.webp';
import img5 from '../images/p2.webp';
import img6 from '../images/p22.webp';
import { Link } from 'react-router-dom';
export default function ProductBanner() {
    return (
        <div>
            <div className="main-banner  mt-4 d-flex flex-column">
                <h1 className="fs-4 mx-4">Top Picks</h1>
                <div className="d-flex cat-card">
                    <Link to='/productlist' ><div className="main-category-card">
                        <img src={img3} alt="" />
                    </div></Link>
                    <Link to='/productlist' > <div className="main-category-card">
                        <img src={img5} alt="" />
                    </div></Link>
                    <Link to='/productlist' ><div className="main-category-card">
                        <img src={img4} alt="" />
                    </div></Link>

                    <Link to='/productlist' >  <div className="main-category-card">
                        <img src={img6} alt="" />
                    </div></Link>
                </div>
            </div>
            <div className="container mt-3">
                <div className="prd-card-out">
                    <img src={img1} alt="" />
                </div>
            </div>

            <div className="main-banner d-flex flex-column mt-4">
                <h1 className="fs-4 mx-4">Pocket Friendly</h1>
                <div className="d-flex cat-card">
                    <Link to='/productlist' ><div className="main-category-card2">
                        <img src={img3} alt="" />
                    </div></Link>
                    <Link to='/productlist' > <div className="main-category-card2">
                        <img src={img5} alt="" />
                    </div></Link>
                    <Link to='/productlist' ><div className="main-category-card2">
                        <img src={img4} alt="" />
                    </div></Link>

                    <Link to='/productlist' >  <div className="main-category-card2">
                        <img src={img6} alt="" />
                    </div></Link>
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
