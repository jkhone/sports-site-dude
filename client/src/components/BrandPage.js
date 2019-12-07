import React, { useState, useEffect} from 'react'
import "../styles/ShoesPage.css"
import "../styles/Players.css"
import { Link } from 'react-router-dom'
import ProductFilter from "./ShoesPageFilter"
import ShoeSearch from "./ShoeSearch"
import Axios from 'axios'


export default props => {
    const brandId = props.match.params.brand
    const [shoes, setShoes] = useState([])

    useEffect(() =>{
        
        Axios.get(`/shoes/brands/+${brandId}`).then(res=>
            setShoes(res.data)
        )

    }, [brandId])
    
    return (
        <>
        {/* <div><ProductFilter/></div>
        <div><ShoeSearch /></div> */}

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