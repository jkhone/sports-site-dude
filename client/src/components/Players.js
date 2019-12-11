import React from 'react' 
import { usePlayers } from "../hooks"
import { Link } from 'react-router-dom'
import '../styles/Players.css'
import TeamLogos from "./TeamLogosFilter.js"
import PlayerSearch from "./PlayerSearch"
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

export default props => {
  const { players } = usePlayers()

  return (
    <>
        {/* <div><TeamLogos /></div> */}
        <div><PlayerSearch /></div>
    
    <div id="playercontainer">
      {players.map((players, i) => (
        <div id="profile"  key={'player' + i} >
          <Link to={"/player/" + players.id}>
            <div className="player">
              <Image className="playerImg" src={`${players.url}`} alt="" fluid />
              <div className="playerDesc">
                <Row className="teamName">{players.team}</Row>
                <Row className="playerName">{players.player}</Row>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
    </>
    )
}


