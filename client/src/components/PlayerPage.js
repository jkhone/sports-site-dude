import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import "../styles/PlayersPage.css"

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
        axios.get(`/api/shoes/${id}`).then(resp => {
            setShoe(resp.data[0])
            console.log("shoe", resp.data)
        })
    }, [id])

    return (
        <div>
            <div className='playerprofile'>
                 <div className="section1">
                    <div className="ppProfileImage">
                        <img src={player.url} alt=''/>
                    </div>
                </div>
                <div className="section2">
                    <div className="ppTeamName">
                        <p>{player.team}</p>
                    </div>
                    <div className="ppPlayerName">
                        <p>{player.player}</p>
                    </div>
                    
                    <Link to={"/product/" + shoe.id} key={'shoe'}>
                    <div 
                    className="ppShoeImage">
                        <img src={`${shoe.pic}`} alt="" />
                        <p>{shoe.brand}</p>
                        <p>{shoe.shoe}</p>   
                        <p>${shoe.price}</p>
                    </div>
                </Link>
                </div>

            </div>
        </div>
    )
}
