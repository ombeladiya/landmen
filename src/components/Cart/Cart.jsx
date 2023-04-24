import React from 'react'
import { Link } from 'react-router-dom';
import CartItemCard from './Cartitemcard';
import './Cart.css';

export default function Cart() {
    return (
        <>
            <br />
            <div className="cartitem-div d-flex justify-content-center ">
                <div >
                    <CartItemCard />


                </div>
                <div className="bill-div d-flex flex-column justify-content-center">
                    <div className="kupan">
                        <p className="text-success fs-5">Congratulations!!</p>
                        <div className='d-flex'>

                            <div> ₹200 OFF!<span>For your first Order</span></div>
                        </div>
                    </div>
                    <div className="makepayment mt-3">
                        <h3 className='fs-6'><b>Price Details (2 Items) :</b></h3>
                        <div className="totel-price-cart">
                            <div className="mrp-cart ">Total MRP: <span>₹4599</span></div>
                            <div className="mrp-cart ">Discount On MRP: <span className='text-success'>- ₹1599</span></div>
                            <div className="mrp-cart ">Coupon Discount: <span className='text-success'>- ₹200</span></div>
                            <hr />
                            <div className="mrp-cart "><b>Total: </b><span><b>₹2599</b></span></div>
                        </div>
                    </div>
                    <Link to='/address' className="mt-3">  <button className="proceed-to-pay-btn">Buy Now</button></Link>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />
        </>
    );
}
