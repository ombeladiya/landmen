import React from 'react'
import Slider from './Slider.js'
import Category from './Category.jsx'
import ProductBanner from './ProductBanner.js'




export default function Home() {
    return (
        <div>
            <Slider />
            <br /><br />
            <Category />
            <ProductBanner />
            <br />
        </div>
    )
}
