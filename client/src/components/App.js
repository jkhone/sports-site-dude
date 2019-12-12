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
import BrandPage from "./BrandPage"
import TeamPage from "./TeamPage"
import Dev from "./MeetTheDev"
import Login from './Login'
import Register from './Register'
import Games from './Games'
import SocialLinks from "./MintSocial"
import ShareIcons from "./PlayerSocials"
import Profile from "./Profile"
import { useAuth } from "../hooks"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const { isAuthenticated } = useAuth()

  return (

    <Router>
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/MVPs" component={TheGuys}/>
      <div className="container">
          <Route path="/stripe" component={Stripe}/>
          <Route exact path="/form" component={Form} />
          <Route path="/shoes" component={ShoesPage} />
          <Route path="/shoes/:brandId" component={BrandPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/players" component={Players} />
          <Route path="/player/:id" component={PlayerPage} />
          <Route path="/players/:team" component={TeamPage} />
          <Route path="/thedevs" component={Dev}/>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path="/games/:team1/:team2" component={Games}/>
          <Route path='/social' component={SocialLinks} />
          <Route path='/test' component={ShareIcons}/>

          {isAuthenticated ? 
            <Route path="/profiles/:username" component={Profile} /> : ""
          }
          
      </div>
      <Footer/> 
    </Router>
  )
}

export default App
