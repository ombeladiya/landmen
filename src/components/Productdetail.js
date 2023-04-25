import React from 'react'
import './productdetail.css';
import img1 from '../images/p7.webp';
import img2 from '../images/p18.webp';
import img4 from '../images/p18.webp';
import img3 from '../images/p7.webp';
export default function Productdetail() {

    return (
        <div >
            <br /><br />
            <div className="productdetail container d-flex " >
                <div className="pdetail container" >
                    <div id="carouselExampleAutoplaying" className="carousel carousel-fade slide shadow-sm" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="2000">
                                <img src={img1} className="d-block  pslide" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={img2} className="d-block  pslide" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={img3} className="d-block  pslide" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={img4} className="d-block pslide" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className='big-screen-img'>
                        <div className='d-flex justify-content-center simg '>
                            <img src={img1} alt="" className="small-img-product shadow-sm" />
                            <img src={img2} alt="" className="small-img-product shadow-sm" />
                            <img src={img3} alt="" className="small-img-product shadow-sm" />
                            <img src={img4} alt="" className="small-img-product shadow-sm" />
                        </div>
                    </div>
                </div>
                <div className="pdetail container pdt">

                    <h1 className="product-detail-title">Luxure by Louis Philippe</h1>
                    <h2 className="product-detail-subtitle">Men White Slim Fit Casual Shirt</h2>
                    <div className="revrat d-flex">
                        <div className="rat d-flex shadow-sm">
                            <span className="ratting">4.6</span><span><i className="fa fa-star" aria-hidden="true"></i></span>
                        </div>
                        <div className="rat d-flex shadow-sm">
                            <span className="tratting">4787</span><span>Rattings</span>
                        </div>

                        <div className="rat d-flex shadow-sm">
                            <span className="tratting">828145</span><span>Reviews</span>
                        </div>
                    </div>
                    <hr />
                    <div className="price d-flex flex-column">
                        <div className="oriprice d-flex">₹799 <span className="off">-20%</span></div>
                        <div className='d-flex dmrp'>MRP: <div className="dupprice">₹1499</div></div>
                        <div className="d-flex rimf">Inclusive of all taxes</div>
                        <div className="d-flex"><p>Free Delivery</p><span className="delivary-date"> On Friday, 18 january</span></div>
                        <div className="d-flex rimf">Quntity:<select name="quntity" id="quntity">
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select></div>

                    </div>
                    <hr />

                    <div>
                        <div className="size1 d-flex">
                            <p>Size:</p>
                            <div className="size text-center">S</div>
                            <div className="size text-center">M</div>
                            <div className="size text-center">L</div>
                            <div className="size text-center">X</div>
                            <div className="size text-center">XL</div>
                        </div>
                        <div className="bcbtn d-flex mt-4">
                            <button>Add to Cart</button>
                            <button>Buy Now</button>
                        </div>
                    </div>
                    <hr />
                    <div className="offers">
                        <ul>
                            <li>20% Offer on First Order</li>
                            <li>100% Original Products</li>
                            <li>Pay on delivery available</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="productdes">
                        <a href="/">see product discription</a>
                    </div>
                    <hr />
                    <div className="rattingdiv">
                        <div className="ratting-head">Customers Ratting</div>
                        <div className="d-flex">
                            <div className="rat d-flex shadow-sm">
                                <span className="ratting">4.6</span><span><i className="fa fa-star" aria-hidden="true"></i></span>
                            </div>
                            <div className="rat d-flex shadow-sm">
                                <span className="tratting">4787</span><span>Rattings</span>
                            </div>
                        </div>
                        <div className="d-flex mt-3 star5">
                            <div className="d-flex">
                                <span className="">5</span><span><i className="fa fa-star indi-star" aria-hidden="true"></i></span>
                            </div>
                            <div className="total-star d-flex">
                                <div className="starper" id="star-5"></div>
                            </div>
                            <div className=" d-flex">
                                <span className="">217</span>
                            </div>
                        </div>
                        <div className="d-flex star5">
                            <div className="d-flex">
                                <span className="">4</span><span><i className="fa fa-star indi-star" aria-hidden="true"></i></span>
                            </div>
                            <div className="total-star d-flex">
                                <div className="starper" id='star-4'></div>
                            </div>
                            <div className=" d-flex">
                                <span className="">21</span>
                            </div>
                        </div>
                        <div className="d-flex star5">
                            <div className="d-flex">
                                <span className="">3</span><span><i className="fa fa-star indi-star" aria-hidden="true"></i></span>
                            </div>
                            <div className="total-star d-flex">
                                <div className="starper" id='star-3'></div>
                            </div>
                            <div className=" d-flex">
                                <span className="">789</span>
                            </div>
                        </div>
                        <div className="d-flex star5">
                            <div className="d-flex">
                                <span className="">2</span><span><i className="fa fa-star indi-star" aria-hidden="true"></i></span>
                            </div>
                            <div className="total-star d-flex">
                                <div className="starper" id='star-2'></div>
                            </div>
                            <div className=" d-flex">
                                <span className="">89</span>
                            </div>
                        </div>
                        <div className="d-flex star5">
                            <div className="d-flex">
                                <span className="">1</span><span><i className="fa fa-star indi-star" aria-hidden="true"></i></span>
                            </div>
                            <div className="total-star d-flex">
                                <div className="starper" id='star-1'></div>
                            </div>
                            <div className=" d-flex">
                                <span className="">6</span>
                            </div>
                        </div>
                        <hr />

                        <div className="customers-review">
                            <div className="ratting-head mb-2">Reviews</div>
                            <div className="container shadow-sm indi-review mb-2">
                                <div className="d-flex u-icon-review"><i className="fa fa-user-circle" aria-hidden="true"></i><div className="usernamrreview">Gautam Beladiya</div>
                                    <div className="ratt d-flex">
                                        <span className="rattting">5</span><span><i className="fa fa-star re-rat-star" aria-hidden="true"></i></span>
                                    </div> </div>
                                <div className="review-content">it's a good product in this category and  it's a good product for running this bjgjb.</div>
                            </div>
                            <div className="container shadow-sm indi-review mb-2">
                                <div className="d-flex u-icon-review"><i className="fa fa-user-circle" aria-hidden="true"></i><div className="usernamrreview">Om Beladiya</div>
                                    <div className="ratt d-flex">
                                        <span className="rattting">4</span><span><i className="fa fa-star re-rat-star" aria-hidden="true"></i></span>
                                    </div> </div>
                                <div className="review-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta in dolore sint quis voluptate placeat vel aut possimus repellendus debitis. a good product for running this bjgjb.</div>
                            </div>
                            <div className="container shadow-sm indi-review mb-2">
                                <div className="d-flex u-icon-review"><i className="fa fa-user-circle" aria-hidden="true"></i><div className="usernamrreview">Meet Narola</div>
                                    <div className="ratt d-flex">
                                        <span className="rattting">3</span><span><i className="fa fa-star re-rat-star" aria-hidden="true"></i></span>
                                    </div> </div>
                                <div className="review-content">Very Good Product!!</div>
                            </div>
                            <div className="productdes">
                                <a href="/">See all Reviews</a>
                            </div>
                        </div>
                        <hr />
                        <div className="give-ratting mt-3">
                            <div className="ratting-head">Rate This Product</div>

                            <div id="rating_bar">
                                <span id="rate_1"></span>
                                <span id="rate_2"></span>
                                <span id="rate_3"></span>
                                <span id="rate_4"></span>
                                <span id="rate_5"></span>
                            </div>
                            <div className="comment_bar d-flex flex-column">
                                <textarea name="comment" className='shadow-sm' id="comment_input" cols="20" rows="2" placeholder='Review something about Product...'></textarea>
                            </div>
                            <button className="submit_review_btn mt-2">Review</button>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}
