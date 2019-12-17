import React, {useState, useEffect} from "react"
import { useShoes } from "../hooks"
import "../styles/base.css"
import "../styles/Filter.css"


const ShoeSize = props => {
    const { getSize } = useShoes()
    const [size, setSize] = useState([])

    console.log(size)

 useEffect(() =>{    
    getSize(size)

}, [size])


return(
    <div className="brandfiltercontainer">

        <label for="sizes">Choose a size:</label>
        <select name="size" id="size" onChange={e=>setSize(e.target.value)}>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
        </select>

    </div>   
        )
    }

    
  

    export default ShoeSize




    // <form id="size">
    // <input type="checkbox" name="size" value="9" onChange={sizesArr}/>
    // <label for="size">Size 9</label>
    // <input type="checkbox" name="size" value="10" onChange={sizesArr}/>
    // <label for="size">Size 10</label>
    // </form>