import React from "react"
import {teamFilter} from "./TeamLogos"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/Filter.css"
import { Link } from "react-router-dom"
import { usePlayers } from "../hooks"

export default function() {
    const { team } = usePlayers()
    return (
        <div className="brandfiltercontainer">

        <div className="brandfilter">
            {teamFilter.map((logo, i) => (
                <div key={"logo" + i}>
                    <div onClick={e=> team(logo.name)}>
                        <img src={`${logo.img}`} alt="whoops" />
                    </div>
                </div>
            ))}
        </div>

        </div>
    )
}