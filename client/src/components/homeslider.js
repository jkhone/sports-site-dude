import React from "react"
import { popImages } from "./homesliderimages"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/base.css"
import "../styles/MVPSlider.css"

export default function() {

    return (
        <Carousel 
        autoPlay interval={3000} infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}>
        {popImages.map((pop, i) => (
            <div key={"pop" + i}>
                <img src={`${pop.img}`} alt="whoops" />
            </div>
        ))}
        </Carousel>
    )
}

