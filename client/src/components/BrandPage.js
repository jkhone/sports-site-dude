import React, { useEffect} from 'react'
import "../styles/ShoesPage.css"
import "../styles/Players.css"
import { useShoes } from "../hooks"




export default props => {
    const { brandShoes } = useShoes()
    const brandId = props.match.params.brandId
  

    useEffect(() =>{
        console.log(props)
        
    brandShoes(brandId)

    }, [brandId])

  
    
    return (
        <>
      
        {/* <div id="playercontainer">
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

        </div> */}
        </>
    )
}