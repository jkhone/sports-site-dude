import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useCart } from "../hooks"
import { Link } from 'react-router-dom'
import Popup from "reactjs-popup";
import Image from 'react-bootstrap/Image'
import "../styles/ProductPage.css"

export default props => {
    const [shoe, setShoe] = useState([])
    const [player, setPlayer] = useState([])
    const id = props.match.params.id    
    const { open, add } = useCart()

    function handleAdd(e, product) {
        e.preventDefault()
        add(product)
        open()
    }

    useEffect(() => {
        axios.get(`/api/shoes/${id}`).then(resp => {
            setShoe(resp.data[0])
        })
        axios.get(`/api/players/${id}`).then(resp => {
            setPlayer(resp.data[0])
            console.log("player", resp.data)
        })
    }, [id])

    return (
        <div className="page">
            <div className='product'>
                <div className="productleft">
                    <Image src={shoe.pic} alt='' fluid />
                </div>
                <div className="productright">
                    <div className="brand">{shoe.brand}</div>
                    <div className="name">{shoe.shoe}</div>
                    <div className="size">Size {shoe.size}</div>
                    <div className="ShoePrice">${shoe.price}</div>
                    <button className="addToCart" onClick={e => handleAdd(e, shoe)}>Add to Cart</button>
                    <Popup trigger={<button className="puButton"> Who wears this shoe?</button>} position="right center">
                        <div>
                            <Link to={"/player/" + player.id} key={'player'}>
                                <div className="playerIMG">
                                </div>
                                <div className="playerSec">
                                    <div className="playerDesc"> 
                                        <div className="brand">
                                            {player.team}
                                        </div>
                                        <div className="name">
                                            {player.player}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Popup>
                </div>
            </div>
        </div>   
    )
}