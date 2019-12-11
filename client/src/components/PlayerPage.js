import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import "../styles/PlayersPage.css"
import PlayerSocials from "./PlayerSocials"

export default props => {
    const [player, setPlayer] = useState([])
    const [shoe, setShoe] = useState([])
    const id = props.match.params.id

    console.log(id)

    useEffect(() => {
        axios.get(`/api/players/${id}`).then(resp => {
            setPlayer(resp.data[0])
            console.log("player", resp.data)
        })
        axios.get(`/api/playershoes/${id}`).then(resp => {
            setShoe(resp.data)
            console.log("shoe", resp.data)
        })
    }, [id])

    return (
        <div>
            <div className='playerprofile'>
                <div className="productleft">
                    <img src={player.url} alt=''/>
                </div>
                <div>
                <PlayerSocials/>
                </div>

                <div className="section2">
                    <div className="playerDesc"> 
                        <div className="TeamName">
                            {player.team}
                        </div>
                        <div className="PlayerName">
                            {player.player}
                        </div>
                    </div>
                    {shoe.map((shoe, i) => (
                    <Link className="productright" to={"/product/" + shoe.id} key={'shoe' + i}>
                        <img className="shoePic" src={shoe.pic} alt="" />
                        <div className="brand">{shoe.brand}</div>
                        <div className="name">{shoe.shoe}</div>
                        <div className="size">Size {shoe.size}</div>
                        <div className="ShoePrice">${shoe.price}</div>
                    </Link> 
                  ))} 
                </div>

            </div>
        </div>
    )
}


