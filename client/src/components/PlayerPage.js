import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import "../styles/PlayersPage.css"
import PlayerSocials from "./PlayerSocials"
import Popup from "reactjs-popup";
import Image from 'react-bootstrap/Image'

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
                    <Image src={player.url} alt='' fluid id="playerpic"/>
                </div>
                <div className="section2">
                    <div className="TeamName">
                        {player.team}
                    </div>
                    <PlayerSocials 
                    twitter={player.twitter} 
                    facebook={player.facebook} 
                    instagram={player.instagram} 
                    youtube={player.youtube}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <h2>Shoes worn by {player.player} </h2>
            <div className="playershoes" >
                  {shoe.map((shoe, i) => (
                    <Link className="productright" id="playershoeslist" to={"/product/" + shoe.id} key={'shoe' + i}>
                        <img className="shoePic" src={shoe.pic} alt="" />
                        <div className="brand">{shoe.brand}</div>
                        <div className="name">{shoe.shoe}</div>
                        <div className="size">Size {shoe.size}</div>
                        <div className="ShoePrice">${shoe.price}</div>
                    </Link> 
                  ))} 
            </div>
        </div>
    )
}


