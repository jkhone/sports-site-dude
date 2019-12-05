import React from "react"
import {brandFilter} from "./ShoesPageFilterImages"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/Filter.css"
import { useShoes } from "../hooks"

export default function() {
    const { brandShoes } = useShoes()
    return (
        <div className="brandfiltercontainer">

        <div className="brandfilter">
            {brandFilter.map((brand, i) => (
                <div key={"brand" + i}>
                    <div onClick={e=> brandShoes(brand.name)}>
                        <img src={`${brand.img}`} alt="whoops" />
                    </div>
                </div>
            ))}
        </div>

        </div>
    )
}

