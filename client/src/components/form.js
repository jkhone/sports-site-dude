import React, {useState} from "react"

import Axios from "axios"
import '../styles/form.css'



function AddPlayer(props) {


  const [player, setPlayer] = useState('')
  const [team, setTeam] = useState('')
  const [url, setUrl] = useState('')
  const [playerId, setPlayerId] = useState('')
  const [brand, setBrand] = useState('')
  const [shoe, setShoe] = useState('')
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [pic, setPic] = useState('')
  const [price, setPrice] = useState('')

function handleSubmit(e){
   e.preventDefault()

Axios.post('/api/players', {player, team, url}).then(resp=> {
    console.log('playerApi')
})
Axios.post('/api/shoes', {playerId, brand, shoe, size, color, pic, price}).then(resp=> {
  console.log('shoeApi')
})





}
  return (
    <>
      <div>
          <h1>Shoes</h1>
          <form class="form" onSubmit={handleSubmit}>
                  <input type="text" placeholder="PlayerID" onChange={e => setPlayerId(e.target.value)}></input>
                  <input type="text" placeholder="Brand"onChange={e => setBrand(e.target.value)}></input>
                  <input type="text" placeholder="Shoe Name" onChange={e=> setShoe(e.target.value)}></input>
                  <input type="text" placeholder="Size" onChange={e=> setSize(e.target.value)}></input>
                  <input type="text" placeholder="Color" onChange={e=> setColor(e.target.value)}></input>
                  <input type="text" placeholder="URL" onChange={e=> setPic(e.target.value)}></input>
                  <input type="text" placeholder="Price" onChange={e=> setPrice(e.target.value)}></input>
                  <button type="submit">Submit</button>
          </form>
            
      </div>
          
          <div>
              <h1>Players</h1>
              <form class="form" onSubmit={handleSubmit}>
                      <input type="text" placeholder="Player" onChange={e => setPlayer(e.target.value)}></input>
                      <input type="text" placeholder="Team"onChange={e => setTeam(e.target.value)}></input>
                      <input type="text" placeholder="url" onChange={e=> setUrl(e.target.value)}></input>
                      <button type="submit">Submit</button>
              </form>
                
      </div>

</>
    
  
  )
}

export default AddPlayer