import React from 'react'
import { useShoes } from "../hooks"
import "../styles/ShoesPage.css"
import { Link } from 'react-router-dom'
import ProductFilter from "./ShoesPageFilter"

export default props => {
    const { shoes } = useShoes()

    return (
        <>
        <div><ProductFilter/></div>
        
        <div className="shoes">
            {shoes.map((shoe, i) => (
                <Link to={"/product/" + shoe.id} key={'shoe' + i}>
                    <div 
                    
                    className="shoe">
                        <img src={`${shoe.pic}`} alt="" />
                        <p>{shoe.brand}</p>
                        <p>{shoe.shoe}</p>   
                        <p>${shoe.price}</p>
                    </div>
                </Link>
            ))}

        </div>
        </>
    )
}