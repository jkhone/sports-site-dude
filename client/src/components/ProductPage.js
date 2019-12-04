import React, { useState, useEffect } from "react"
import axios from 'axios'

export default props => {
    const [shoe, setShoe] = useState([])
    const id = props.match.params.id
    console.log(id)

    useEffect(() => {
        axios.get(`/api/shoes/${id}`).then(resp => {
            setShoe(resp.data[0])
            console.log("shoe", resp.data)
        })
    }, [id])

    return (
        <div>
            <div className='product'>
                <img src={shoe.pic} alt=''/>
                <p>{shoe.brand}</p>
                <p>{shoe.shoe}</p>
                <p>{shoe.size}</p>
                <p>{shoe.price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}