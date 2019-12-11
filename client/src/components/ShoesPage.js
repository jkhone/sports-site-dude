import React, { useEffect} from 'react'
import { useShoes } from "../hooks"
import "../styles/ShoesPage.css"
import "../styles/Players.css"
import { Link } from 'react-router-dom'
import ProductFilter from "./ShoesPageFilter"
import ShoeSearch from "./ShoeSearch"
import ShoeSize from "./ShoeSizeFilter"

export default props => {
    const { shoes } = useShoes()

  

    return (
        <>
        <div><ProductFilter/></div>
        <div><ShoeSearch /></div>
        <div><ShoeSize /></div>
        
        <div id="playercontainer">
            {shoes.map((shoe, i) => (
                <Link to={"/product/" + shoe.id} key={'shoe' + i}>
                    <div className="player">
                        <img className="shoeImg" src={`${shoe.pic}`} alt="" />
                        <div className="playerDesc">
                            <div className="teamName">{shoe.brand}</div>
                            <div className="playerName">{shoe.shoe}</div>   
                            <div className="shoePrice">${shoe.price}</div>
                        </div>
                    </div>
                </Link>
            ))}

        </div>
        </>
    )
}