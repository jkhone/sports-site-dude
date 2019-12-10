import React from "react"
import { BrowserRouter as Router, Route} from "react-router-dom"
import ShoesPage from './ShoesPage'
import ProductPage from "./ProductPage"
import Players from './Players'
import PlayerPage from "./PlayerPage"
import "../styles/base.css"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import TheGuys from "./TheGuys"
import Form from "./form"
import {Stripe} from "./StripeCheckout"
import Dev from "./MeetTheDev"
import Login from './Login'
import Register from './Register'
import Profile from "./Profile"
import { useAuth } from "../hooks"

function App() {
  const { isAuthenticated } = useAuth()

  return (

    <Router>
      <div className="container">
        <Header />
          <Route path="/stripe" component={Stripe}/>
          <Route exact path="/form" component={Form} />
          <Route exact path="/" component={Main} />
          <Route path="/shoes" component={ShoesPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/players" component={Players} />
          <Route path="/player/:id" component={PlayerPage} />
          <Route path="/MVPs" component={TheGuys}/>
          <Route path="/thedevs" component={Dev}/>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />

          {isAuthenticated ? 
            <Route path="/profiles/:username" component={Profile} /> : ""
          }

        <Footer/>    
      </div>
    </Router>
  )
}

export default App
