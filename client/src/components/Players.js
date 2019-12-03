import React from 'react' 
import { usePlayers } from "../hooks"
import '../styles/Players.css'

export default props => {
  const { players } = usePlayers()

  return (
    <div id="playercontainer">
      {players.map((players, i) => (
    <div id="profile"
     key={'player' + i}>
			<div className="player">
				<img className="playerImg" src={`${players.url}`} alt="" />
				<div className="playerDesc">
					<div className="teamName">{players.team}</div>
					<div className="playerName">{players.player}</div>
				</div>
			</div>
  	</div>
        )) }

        </div>
    
    )
  }
