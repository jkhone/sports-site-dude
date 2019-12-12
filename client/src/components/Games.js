import React, { useEffect } from 'react' 
import { usePlayers } from "../hooks"
import { Link } from 'react-router-dom'
import '../styles/Players.css'
import "../styles/Games.css"

export default function(props) {
	const team1 = props.match.params.team1
	const team2 = props.match.params.team2

	const { teamedplayers, getteamedPlayers } = usePlayers()

	useEffect(() => {
		getteamedPlayers(team1,team2)
	},[,team1,team2])

  return (
    <div id="playercontainer">
      {teamedplayers.map((players, i) => (
				<div id="profile"  key={'player' + i} >
					<Link to={"/player/" + players.id}>
						<div className="player">
							<img
								className="playerImg"
								src={`${players.url}`}
								alt=""
							/>
							<div className="playerDesc">

								<div className="teamName">
									{players.team}
								</div>
								<div className="playerName">
									{players.player}
								</div>
								
							</div>
						</div>
					</Link>
				</div>
      ))}
    </div>
  )
}