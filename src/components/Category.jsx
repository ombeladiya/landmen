import React from 'react'
import './category.css';
import { Link } from 'react-router-dom';
export default function Category() {
    return (
        <>
            <div className="container d-flex">
                <div className="catp"> <div className="cat" id="cat1"></div><h2 className="text-center fs-5">Jeans</h2></div>
                <div className="catp"> <div className="cat" id="cat2"></div><h2 className="text-center fs-5">Shirts</h2></div>
                <Link to="/productlist">  <div className="catp"> <div className="cat" id="cat3"></div><h2 className="text-center fs-5 text-dark">Kurtas</h2></div></Link>
                <div className="catp"> <div className="cat" id="cat4"></div><h2 className="text-center fs-5">Jeans</h2></div>
                <div className="catp"> <div className="cat" id="cat5"></div><h2 className="text-center fs-5">Shirts</h2></div>
                <div className="catp"> <div className="cat" id="cat6"></div><h2 className="text-center fs-5">T-shirts</h2></div>
            </div>

        </>
    )
}
