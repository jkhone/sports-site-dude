import React from "react"
import HomeSlider from "./homeslider"
import BrandSlider from "./BrandSlider"
import "../styles/Main.css"

export default props => {
    return (
        <div className="main">
            <div><HomeSlider/></div>
            <div><BrandSlider/></div>
        </div>
    )
}