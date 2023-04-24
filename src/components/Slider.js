import React from 'react'
import "./slider.css"
import img1 from '../images/s1.jpg';
import img2 from '../images/s4.png';
import img3 from '../images/s3.png';
export default function Slider() {
    return (
        <div>

            <div className="container slidebox mt-3">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src={img1} className="d-block w-100 slide" alt="slide-1" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={img2} className="d-block w-100 slide" alt="slide-2" />
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100 slide" alt="slide-3" />
                        </div>
                    </div>
                    <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
