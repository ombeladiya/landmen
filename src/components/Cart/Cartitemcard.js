import React from "react";
import "./CartItemCard.css";
import img1 from '../../images/p7.webp';


const CartItemCard = () => {
    return (
        <>
            <div className="CartItemCard container ">
                <img src={img1} alt="ssa" />
                <div className="item-detail mx-3">
                    <h2 className="cart-name">Luxure by Louis Philippe</h2>
                    <div className="oriprice-cart d-flex">₹799 <span className="off-cart text-danger">-20%</span></div>
                    <div className='d-flex dmrp-cart'>MRP: <div className="dupprice-cart">₹1499</div></div>
                    <div className="size-cart">Size:<span> M</span></div>
                    <div className="d-flex rimf-cart">Quntity:<select name="quntity" id="quntity-cart">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select></div>
                    <div className="bcbtn-cart d-flex mt-2">
                        <button>Remove</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItemCard;