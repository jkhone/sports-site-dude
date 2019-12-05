import React from 'react' 
import { usePlayers } from "../hooks"
import { Link } from 'react-router-dom'
import '../styles/Players.css'
import TeamLogos from "./TeamLogosFilter.js"

export default props => {
  const { players } = usePlayers()

  return (
    <>
        <div><TeamLogos /></div>
    
    <div id="playercontainer">
   
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

    </div>
    </>
    )
  }


