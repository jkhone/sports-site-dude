import React, { useState, useEffect} from 'react'
import "../styles/ShoesPage.css"
import "../styles/Players.css"
import { Link } from 'react-router-dom'
import { usePlayers } from "../hooks"


export default props => {
    const teamId = props.match.params.team
    const { team, players } = usePlayers()


    useEffect(() =>{
        team(teamId)
        console.log(teamId)
    }, [teamId])

    return (
        <>
  

        {/* <div id="playercontainer">
        
        {players.map((players, i) => (
        <div id="profile">
        <Link to={"/player/" + players.id} key={'player' + i}>
            <div className="player">
            <img className="playerImg" src={`${players.url}`} alt="" />
            <div className="playerDesc">
                <div className="teamName">{players.team}</div>
                <div className="playerName">{players.player}</div>
            </div>
            </div>
        </Link>
        </div>
            )) }

        </div> */}
        </>
    )
}