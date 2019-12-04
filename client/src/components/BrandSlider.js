import React from "react"
import { brandImages } from "./BrandSliderImages"
import "react-responsive-carousel/lib/styles/carousel.min.css"
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