import React from 'react';
import ProductCard from './Productcard';
import './productlist.css';
export default function Productlist() {
    return (
        <>
            <div className="topbar ">
                <h1 className="mx-2  fs-4 text-center"><br />
                    <b>Women's Kurties</b></h1>

                <ul className="list-group">
                    <li className="list-group-item list-group-item-secondary">Showing results for <span className='text-danger'>"kurtis"</span>
                        <div className="dropdown position-absolute sortbtn">
                            <a className="btn btn-outline-dark  btn-sm" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort <i className="fa fa-sort" aria-hidden="true"></i>
                            </a>


                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Price: Low to High</a></li>
                                <li><a className="dropdown-item" href="/">Price: High to Low</a></li>
                                <li><a className="dropdown-item" href="/">Ratting: Highest to Low</a></li>
                            </ul>
                        </div>

                    </li>
                </ul>

            </div>
            <div className="d-flex">
                <div className="sidebar">
                    <div className="Pricefilter-h mt-4">
                        <div className="pricefilterh mx-4">Price(Inr)</div>
                        <ul>
                            <li>Under <i class="fa fa-inr" aria-hidden="true"></i>199</li>
                            <li><i class="fa fa-inr" aria-hidden="true"></i>200 - <i class="fa fa-inr" aria-hidden="true"></i>499</li>
                            <li><i class="fa fa-inr" aria-hidden="true"></i>500 - <i class="fa fa-inr" aria-hidden="true"></i>999 </li>
                            <li><i class="fa fa-inr" aria-hidden="true"></i>1000 - <i class="fa fa-inr" aria-hidden="true"></i>1999</li>
                            <li>Over <i class="fa fa-inr" aria-hidden="true"></i>2000</li>
                        </ul>
                    </div>
                    <div className="Pricefilter-h">
                        <div className="pricefilterh mx-4">Size</div>
                        <ul className='d-flex flex-wrap'>
                            <li className="size-list ">S</li>
                            <li className="size-list">M</li>
                            <li className="size-list">L</li>
                            <li className="size-list">XL</li>
                            <li className="size-list">2XL</li>
                            <li className="size-list">3XL</li>
                            <li className="size-list">4XL</li>
                            <li className="size-list">5XL</li>
                            <li className="size-list">6XL</li>
                            <li className="size-list">free</li>
                        </ul>
                    </div>
                    <div className="Pricefilter-h">
                        <div className="pricefilterh mx-4">Color</div>
                        <ul className='d-flex flex-wrap'>
                            <li className="color-list ">Black</li>
                            <li className="color-list">White</li>
                            <li className="color-list">Blue</li>
                            <li className="color-list">Yellow</li>
                            <li className="color-list">Red</li>
                            <li className="color-list">Brown</li>
                            <li className="color-list">Green</li>
                            <li className="color-list">Pink</li>
                            <li className="color-list">Orange</li>
                            <li className="color-list">Purple</li>
                        </ul>
                    </div>
                    <div className="ratefilter-h">
                        <div className="pricefilterh mx-4">Ratting</div>
                        <ul>
                            <li className='star-li' >
                                <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                &Up
                            </li>
                            <li className='star-li'>
                                <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                &Up
                            </li>
                            <li className='star-li'>
                                <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                &Up
                            </li>
                            <li className='star-li'>
                                <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                &Up
                            </li>
                            <li className='star-li'>
                                <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                &Up
                            </li>

                        </ul>
                    </div>
                    <div className="Pricefilter-h mt-4">
                        <div className="pricefilterh mx-4">Discounts</div>
                        <ul>
                            <li>10% off! or more</li>
                            <li>20% off! or more</li>
                            <li>25% off! or more</li>
                            <li>50% off! or more</li>
                            <li>70% off! or more</li>
                        </ul>
                    </div>
                </div>
                <div className="productlisting-div">
                    <div className="productlisting-sub-div container my-3 d-flex ">
                        <br /><br />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>

                </div>

            </div>
            <div className="bottombar shadow-sm">
                <button className="filter-sort-btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight"><i class="fa fa-filter" aria-hidden="true"></i>Filter</button>
                <div class="offcanvas offcanvas-end" id="offcanvasRight2" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <h5 id="offcanvasRightLabel"><b>Filter</b></h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div className="sidebar2">
                            <div className="Pricefilter-h">
                                <div className="pricefilterh mx-4">Price(Inr)</div>
                                <ul>
                                    <li>Under <i class="fa fa-inr" aria-hidden="true"></i>199</li>
                                    <li><i class="fa fa-inr" aria-hidden="true"></i>200 - <i class="fa fa-inr" aria-hidden="true"></i>499</li>
                                    <li><i class="fa fa-inr" aria-hidden="true"></i>500 - <i class="fa fa-inr" aria-hidden="true"></i>999 </li>
                                    <li><i class="fa fa-inr" aria-hidden="true"></i>1000 - <i class="fa fa-inr" aria-hidden="true"></i>1999</li>
                                    <li>Over <i class="fa fa-inr" aria-hidden="true"></i>2000</li>
                                </ul>
                            </div>
                            <div className="Pricefilter-h">
                                <div className="pricefilterh mx-4">Size</div>
                                <ul className='d-flex flex-wrap'>
                                    <li className="size-list ">S</li>
                                    <li className="size-list">M</li>
                                    <li className="size-list">L</li>
                                    <li className="size-list">XL</li>
                                    <li className="size-list">2XL</li>
                                    <li className="size-list">3XL</li>
                                    <li className="size-list">4XL</li>
                                    <li className="size-list">5XL</li>
                                    <li className="size-list">6XL</li>
                                    <li className="size-list">free</li>
                                </ul>
                            </div>
                            <div className="Pricefilter-h">
                                <div className="pricefilterh mx-4">Color</div>
                                <ul className='d-flex flex-wrap'>
                                    <li className="color-list ">Black</li>
                                    <li className="color-list">White</li>
                                    <li className="color-list">Blue</li>
                                    <li className="color-list">Yellow</li>
                                    <li className="color-list">Red</li>
                                    <li className="color-list">Brown</li>
                                    <li className="color-list">Green</li>
                                    <li className="color-list">Pink</li>
                                    <li className="color-list">Orange</li>
                                    <li className="color-list">Purple</li>
                                </ul>
                            </div>
                            <div className="ratefilter-h">
                                <div className="pricefilterh mx-4">Ratting</div>
                                <ul>
                                    <li className='star-li' >
                                        <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                        <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                        <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                        <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                        <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                        &Up
                                    </li>
                                    <li className='star-li'>
                                        <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                        <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                        <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                        <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                        <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                        &Up
                                    </li>
                                    <li className='star-li'>
                                        <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                        <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                        <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                        <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                        <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                        &Up
                                    </li>
                                    <li className='star-li'>
                                        <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                        <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                        <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                        <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                        <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                        &Up
                                    </li>
                                    <li className='star-li'>
                                        <i class="fa fa-star star-indi-ico" aria-hidden="true"></i>
                                        <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                        <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                        <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                        <i class="fa fa-star unfilled" aria-hidden="true"></i>
                                        &Up
                                    </li>

                                </ul>
                            </div>
                            <div className="Pricefilter-h mt-4">
                                <div className="pricefilterh mx-4">Discounts</div>
                                <ul>
                                    <li>10% off! or more</li>
                                    <li>20% off! or more</li>
                                    <li>25% off! or more</li>
                                    <li>50% off! or more</li>
                                    <li>70% off! or more</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="filter-sort-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><i class="fa fa-sort-amount-desc" aria-hidden="true"></i> Sort</button>
                <div class="offcanvas offcanvas-bottom" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasBottomLabel"><b>Sort</b></h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body2 small">
                        <ul>
                            <li><a href="/"><input type="radio" name="sort" id="" /><b>Price:</b> Low to High</a></li>
                            <li><a className="" href="/"><input type="radio" name="sort" id="" /><b>Price:</b> High to Low</a></li>
                            <li><a className="" href="/"><input type="radio" name="sort" id="" /><b>Ratting:</b> Highest to Low</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
