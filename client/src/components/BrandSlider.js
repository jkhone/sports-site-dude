import React from "react"
import { brandImages } from "./BrandSliderImages"
import "../styles/base.css"
import { Link } from "react-router-dom"
import Image from 'react-bootstrap/Image'

export default function() {

    return (
        <div className="brandshome">
            {brandImages.map((brand, i) => (
                <div key={"brand" + i}>
                    <Link to={brand.url}>
                        <Image src={`${brand.img}`} alt="whoops" fluid />
                    </Link>
                </div>
            ))}
        </div>
    )
}





