import React from "react";
import { Link } from "react-router-dom";
import './productcard.css';
import img2 from '../images/p7.webp';
import img4 from '../images/p18.webp';
const ProductCard = () => {

    return (
        <Link className="productCard mt-3" to={`/product1`}>
            <div className="product-grid">
                <div className="product-image">
                    <a href="/" className="image">
                        <img className="img-1" src={img2} alt="" />
                        <img className="img-2" src={img4} alt="" />
                    </a>
                </div>
                <div className="product-content">
                    <ul className="rating">
                        <li className="fas fa-star"></li>
                        <li className="fas fa-star"></li>
                        <li className="fas fa-star"></li>
                        <li className="fas fa-star"></li>
                        <li className="fas fa-star disable"></li>
                        <li className="disable">(187 reviews)</li>
                    </ul>
                    <h3 className="title"><a href="/">Yellow Kurti</a></h3>
                    <div className="price">₹ 799</div>
                </div>
            </div>
        </Link>

    );
};

export default ProductCard;
