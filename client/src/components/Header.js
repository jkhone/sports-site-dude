import React from "react"
import Icon from "../lib/Icon"
import { Link } from "react-router-dom"
import Cart from "./Cart"

export default props => {
    return (
        <header>
        <div className="header-left">
          <Link to="/">
          <div>
            <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/LOGO-01.jpg?alt=media&token=0d520d79-6189-44fc-b26b-91754466d3bb" alt="whoops" />
          </div>
          </Link>
          <Link to="/shoes">
            <div className="header-item">
              SHOES
            </div>
          </Link>
          <Link to="/players">
            <div className="header-item">
              PLAYERS
            </div>
          </Link>
          <Link to="/MVPs">
          <div className="header-item">
            THE GUYS
          </div>
          </Link>
        </div>
        <div className="header-right">
          <div>
            <Icon icon="search"/>
            <input   
              className="searchBAR"
              type="text" 
              placeholder="Search">
            </input>
          </div>
          <div className="header-item">
            <Cart />
          </div>
        </div>
      </header>
    )
}