import React, { useState } from 'react' 
import { usePlayers } from "../hooks"
import { Link } from 'react-router-dom'
import '../styles/Players.css'
import TeamLogos from "./TeamLogosFilter.js"
import PlayerSearch from "./PlayerSearch"
import Image from 'react-bootstrap/Image'
import Pagination from "./Pagination"

export default props => {
  const { players } = usePlayers()

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
      {/* <div><TeamLogos /></div> */}
      <div><PlayerSearch /></div>
    
      <div id="playercontainer">
        {currentPosts.map((players, i) => (
          <div id="profile"  key={'player' + i} >
            <Link to={"/player/" + players.id}>
              <div className="player">
                <Image className="playerImg" src={`${players.url}`} alt="" fluid />
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