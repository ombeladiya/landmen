import React from 'react';
import './navbar.css';
import logo from '../images/logojpgf.jpg'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div>
            <nav className="navbar ">
                <div className="d-flex">
                    <div className="logo"><a href="./navbar.html"><img src={logo} alt='L' />LANDMEN</a></div>
                    <div className="search align-middle">
                        <input className="search-input" type="search" name="search" placeholder="Search for Products" />
                        <button className="search-btn" type="submit" name="search"><i className="fas fa-search" aria-hidden="true"></i></button>
                    </div>
                    <div className="category-drop">
                        <ul className="d-flex ">
                            <li>
                                <div className="dropdown">
                                    <button className="dropbtn">Men</button>
                                    <div className="dropdown-content">
                                        <Link to="/product1">Shirts</Link>
                                        <a href="/">Jeans</a>
                                        <a href="/">T-shirts</a>
                                        <a href="/">Shirts</a>
                                        <a href="/">Jeans</a>
                                        <a href="/">T-shirts</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <button className="dropbtn">Women</button>
                                    <div className="dropdown-content">
                                        <a href="/">Shirts</a>
                                        <a href="/">Jeans</a>
                                        <a href="/">T-shirts</a>
                                        <a href="/">Shirts</a>
                                        <a href="/">Kurtas</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <button className="dropbtn">Shirts</button>
                                    <div className="dropdown-content">
                                        <a href="/">Shirts</a>
                                        <a href="/">Jeans</a>
                                        <a href="/">T-shirts</a>
                                        <a href="/">Shirts</a>
                                        <a href="/">Jeans</a>
                                        <a href="/">T-shirts</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <button className="dropbtn">Kurtis</button>
                                    <div className="dropdown-content">
                                        <a href="/">Shirts</a>
                                        <a href="/">Jeans</a>
                                        <a href="/">T-shirts</a>
                                        <a href="/">Shirts</a>
                                        <a href="/">Jeans</a>
                                        <a href="/">T-shirts</a>
                                        <a href="/">Shirts</a>
                                        <a href="/">Jeans</a>
                                        <a href="/">T-shirts</a>
                                        <a href="/">Shirts</a>
                                        <a href="/">Jeans</a>
                                        <a href="/">T-shirts</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <button className="dropbtn">Women Top</button>
                                    <div className="dropdown-content">
                                        <a href="/">Shirts</a>
                                        <a href="/">Jeans</a>
                                        <a href="/">T-shirts</a>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <button className="dropbtn">Boxer</button>
                                    <div className="dropdown-content">
                                        <a href="/">Shirts</a>
                                        <a href="/">Jeans</a>
                                        <a href="/">T-shirts</a>
                                        <a href="/">Shirts</a>
                                        <a href="/">Jeans</a>
                                        <a href="/">T-shirts</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <button className="dropbtn">Men</button>
                                    <div className="dropdown-content">
                                        <a href="/">Shirts</a>
                                        <a href="/">Jeans</a>
                                        <a href="/">T-shirts</a>
                                        <a href="/">Shirts</a>
                                        <a href="/">Jeans</a>
                                        <a href="/">T-shirts</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="nav-opt d-flex ">
                        <ul className="d-flex">
                            <li><Link to="/Cart"><i className="fa fa-shopping-cart"></i></Link></li>
                            <li><Link to="/login"><i className="fa fa-user-o" aria-hidden="true"></i> </Link></li>
                            <li className='hamburger-btn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <div className="hamburgerd"></div>
                                <div className="hamburgerd"></div>
                                <div className="hamburgerd"></div>
                            </li>
                            <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-header">
                                    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    ...
                                </div>
                            </div>
                        </ul>
                    </div>

                </div>

            </nav >
            <div className='secondary-navbar d-flex align-middle'>
                <div className="search-secondary ">
                    <input className="search-input-secondary" type="search" name="search" placeholder="Search for Products" />
                    <button className="search-btn-secondary" type="submit" name="search"><i className="fas fa-search" aria-hidden="true"></i></button>
                </div>
            </div>
        </div >
    )
}
