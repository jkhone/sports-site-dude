import React from "react"
<<<<<<< HEAD
import {brandImages} from "./BrandSliderImages"
import {Gallery, GalleryImage} from 'react-gesture-gallery'
=======
import { brandImages } from "./BrandSliderImages"
import "react-responsive-carousel/lib/styles/carousel.min.css"
>>>>>>> 0af94dc7d7f9c832e964675d2bdba6a6e76c8f0f
import "../styles/base.css"
import { Link } from "react-router-dom"

export default function() {

    return (
        <div className="brandshome">
            {brandImages.map((brand, i) => (
                <div key={"brand" + i}>
                    <Link to={brand.url}>
                        <img src={`${brand.img}`} alt="whoops" />
                    </Link>
                </div>
            ))}
        </div>
    )
}