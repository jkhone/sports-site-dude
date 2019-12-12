import React, {useState} from "react"
import { usePlayers } from "../hooks"
import "../styles/base.css"
import "../styles/Filter.css"



const PlayerSearch = props => {
    const { players, playersearch } = usePlayers()
    const [search, setSearch] = useState('')

    function handleSubmit(e) {
    e.preventDefault()
    playersearch(search)
    console.log('search started')

}

return(
    <>
    <div className="brandfiltercontainer">
        <form className="brandfilter" onSubmit={handleSubmit}>
            <input className="searchBAR" placeholder="Search by player" type="text" name="search" value={search} onChange={e=>setSearch(e.target.value)}/>
        {/* <button type="submit">Search</button> */}
        </form>
    </div>
        {/* <div id="playercontainer">
    
            {players.map((players, i) => (
                <div id="profile">
                    <Link to={"/player/" + players.id} key={'player' + i}>
                        <div className="player">
                            <img className="playerImg" src={`${players.url}`} alt="" />
                            <div className="playerDesc"></div>
                            <div className="teamName">{players.team}</div>
                            <div className="playerName">{players.player}</div>
                        </div>
                    </Link>
                </div>
            ))}
        </div> */}
    </>   
        )
    }

    
  

    export default PlayerSearch