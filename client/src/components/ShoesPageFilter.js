import React, { useEffect } from "react"
import {brandFilter} from "./ShoesPageFilterImages"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/Filter.css"
import { Link } from "react-router-dom"
import { useShoes } from "../hooks"


export default function() {
    const { brandShoes } = useShoes()



    return (
        <div className="brandfiltercontainer">

        <div className="brandfilter">
            {brandFilter.map((brand, i) => (
                <div key={"brand" + i}>
                    <Link to={"/shoes/"+brand.name}>
                    <div onClick={e=> brandShoes(brand.name)}>
                        <img src={`${brand.img}`} alt="whoops" />
                    </div>
                    </Link>
                </div>
            ))}
        </div>

        </div>
    )
}

// 
