import React, {useState} from "react"
import { useShoes } from "../hooks"
import "../styles/base.css"
import "../styles/Filter.css"

const ShoeSearch = props => {
    const { shoes, shoesearch } = useShoes()
    const [search, setSearch] = useState('')

    function handleSubmit(e) {
    e.preventDefault()
    shoesearch(search)
    console.log('search started')
}

return(
    <div className="brandfiltercontainer">
        <form className="brandfilter" onSubmit={handleSubmit}>
            <input className="searchBAR" placeholder="Search" type="text" name="search" value={search} onChange={e=>setSearch(e.target.value)}/>
        {/* <button type="submit">Search</button> */}
        </form>


    </div>   
        )
    }

    
  

    export default ShoeSearch