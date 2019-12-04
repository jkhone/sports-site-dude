import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useCart } from "../hooks"
import "../styles/ProductPage.css"

export default props => {
    const [shoe, setShoe] = useState([])
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
    }, [id])

    return (
        <div>
            <div className='product'>
                <div className="productleft">
                    <img src={shoe.pic} alt=''/>
                </div>
                <div className="productright">
                    <p>{shoe.brand}</p>
                    <p>{shoe.shoe}</p>
                    <p>Size {shoe.size}</p>
                    <p>${shoe.price}</p>
                    <button onClick={e => handleAdd(e, shoe)}>Add to Cart</button>
                </div>
            </div>
        </div>   
    )
}