import React from 'react'
import './category.css';
import { Link } from 'react-router-dom';
export default function Category() {
    return (
        <>
            <div className="category-div d-flex mt-2">
                <Link to="/productlist"> <div className="catp"> <div className="cat" id="cat1"></div><h2 className="text-center">Jeans</h2></div></Link>
                <Link to="/productlist">  <div className="catp"> <div className="cat" id="cat2"></div><h2 className="text-center">Shirts</h2></div></Link>
                <Link to="/productlist">  <div className="catp"> <div className="cat" id="cat3"></div><h2 className="text-center text-dark">Kurtis</h2></div></Link>
                <Link to="/productlist">   <div className="catp"> <div className="cat" id="cat4"></div><h2 className="text-center ">Jeans</h2></div></Link>
                <Link to="/productlist">   <div className="catp"> <div className="cat" id="cat5"></div><h2 className="text-center">Shirts</h2></div></Link>
                <Link to="/productlist">   <div className="catp"> <div className="cat" id="cat6"></div><h2 className="text-center">T-shirts</h2></div></Link>
            </div>

        </>
    )
}
