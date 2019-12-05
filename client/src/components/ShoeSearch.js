import React, {useState} from "react"
import { useShoes } from "../hooks"



const ShoeSearch = props => {
    const { shoes, shoesearch } = useShoes()
    const [search, setSearch] = useState('')

    function handleSubmit(e) {
    e.preventDefault()
    shoesearch(search)
    console.log('search started')

}

return(
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" value={search} onChange={e=>setSearch(e.target.value)}/>
        <button type="submit">Search</button>
        </form>


    </>   
        )
    }

    
  

    export default ShoeSearch