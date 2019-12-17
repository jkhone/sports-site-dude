import React, { useState, useEffect } from 'react' 
import { usePlayers } from "../hooks"
import { Link } from 'react-router-dom'
import '../styles/Players.css'
import '../styles/Filter.css'
import PlayerSearch from "./PlayerSearch"
import Pagination from "./Pagination"

export default props => {
  const { players, team, allPlayers } = usePlayers()

  const handleChange = (e) => {
    props.history.push(`/players/${e.target.value}`)
  }
  
  useEffect(() => {
    if (props.match.params.team) {
      team(props.match.params.team)

    } else {
      allPlayers()
    }
  },[props.match.params])

  // Pagination 
  const [currentPage, setCurrentPage] = useState(1)
  // Change this number to change how many shoes shoe per page
  const [postsPerPage] = useState(16)

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = players.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
    <div className="searchbar">
      <div className="playersearch"><PlayerSearch /></div>
      <div className="brandfiltercontainer">
      <label htmlFor="team">Choose a team:</label>
      <select name="team" id="size" onChange={handleChange}>
          <option value="Celtics">Boston Celtics</option>
          <option value="Hornets">Charlotte Hornets</option>
          <option value="Bulls">Chicago Bulls</option>
          <option value="Mavericks">Dallas Mavericks</option>
          <option value="Nuggets">Denver Nuggets</option>
          <option value="Pistons">Detroit Pistons</option>
          <option value="Warriors">Golden State Warriors</option>
          <option value="Rockets">Houston Rockets</option>
          <option value="Clippers">Los Angeles Clippers</option>
          <option value="Lakers">Los Angeles Lakers</option>
          <option value="Grizzlies">Memphis Grizzlies</option>
          <option value="Heat">Miami Heat</option>
          <option value="Bucks">Milwaukee Bucks</option>
          <option value="Timberwolves">Minnesota Timberwolves</option>
          <option value="Pelicans">New Orleans Pelicans</option>
          <option value="Thunder">Oklahoma City Thunder</option>
          <option value="Magic">Orlando Magic</option>
          <option value="Sixers">Philadelphia 76ers</option>
          <option value="Blazers">Portland Trail Blazers</option>
          <option value="Kings">Sacramento Kings</option>
          <option value="Spurs">San Antonio Spurs</option>
          <option value="Raptors">Toronto Raptors</option>
          <option value="Wizards">Washington Wizards</option>
      </select>
      </div>
      </div>
    
      <div id="playercontainer">
        {currentPosts.map((players, i) => (
          <div id="profile"  key={'player' + i} >
            <Link to={"/player/" + players.id}>
              <div className="player">
                <img className="playerImg" src={`${players.url}`} alt="" />
                <div className="playerDesc">
                  <div className="teamName">{players.team}</div>
                  <div className="playerName">{players.player}</div>
                </div>
              </div>   
            </Link>
        </div>
        ))}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={players.length} paginate={paginate} />
    </>
  )
}