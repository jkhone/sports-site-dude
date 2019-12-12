import React, { useState } from 'react'
import { useShoes } from "../hooks"
import "../styles/ShoesPage.css"
import "../styles/Players.css"
import { Link } from 'react-router-dom'
import ProductFilter from "./ShoesPageFilter"
import ShoeSearch from "./ShoeSearch"
import ShoeSize from "./ShoeSizeFilter"
import Pagination from "./Pagination"
import Image from 'react-bootstrap/Image'


export default props => {
    const { shoes } = useShoes()

    // Pagination 
    const [currentPage, setCurrentPage] = useState(1)
    // Change this number to change how many shoes shoe per page
    const [postsPerPage] = useState(16)

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = shoes.slice(indexOfFirstPost, indexOfLastPost)

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
        {/* <div><ProductFilter/></div> */}
        <div><ShoeSearch /></div>
        <div><ShoeSize /></div>
        
        <div id="playercontainer">
            {currentPosts.map((shoe, i) => (
                <Link to={"/product/" + shoe.id} key={'shoe' + i}>
                    <div className="player">
                        <Image className="shoeImg" src={`${shoe.pic}`} alt="" fluid />
                        <div className="playerDesc">
                            <div className="teamName">{shoe.brand}</div>
                            <div className="playerName">{shoe.shoe}</div>   
                            <div className="shoePrice">${shoe.price}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        <Pagination postsPerPage={postsPerPage} totalPosts={shoes.length} paginate={paginate} />
        </>
    )
}