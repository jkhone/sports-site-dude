import React from "react"
import {teamFilter} from "./TeamLogos"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/Filter.css"
import { usePlayers } from "../hooks"
import { Link } from "react-router-dom"
import Image from 'react-bootstrap/Image'

export default function() {
    const { team } = usePlayers()
   
    return (
        <div className="brandfiltercontainer">
        <div className="brandfilter">
            {teamFilter.map((logo, i) => (
                <div key={"logo" + i}>
                    <Link to={"/players/"+logo.name}>
                        <div onClick={e=> team(logo.name)}>
                            <Image src={`${logo.img}`} alt="whoops" fluid />
                        </div>
                    </Link>
                </div> 
            ))}
        </div>
        </div>
    )
}