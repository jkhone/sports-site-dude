import React, {useState} from "react"
import { usePlayers } from "../hooks"
import "../styles/base.css"
import "../styles/Filter.css"



const PlayerSearch = props => {
    const { playersearch } = usePlayers()
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
    </>   
        )
    }

    
  

    export default PlayerSearch