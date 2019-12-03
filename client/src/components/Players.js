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
            <img src={`${players.url}`} alt="" />
         <ul>
        <li>{players.player}</li>     
        <li>    {players.team}</li>
        </ul>   
        </div>   
        )) }

        </div>
    
    )
  }
//   test