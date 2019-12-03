import React from "react"
import { BrowserRouter as Router, Route} from "react-router-dom"
import ShoesPage from './ShoesPage'
import ProductPage from "./ProductPage"

function App() {
  return (    
    <Router>
      <div>
        <Route path="/shoes" component={ShoesPage} />
        <Route path="/product/:id" component={ProductPage} />
      </div>
    </Router>
  )
}

export default App
