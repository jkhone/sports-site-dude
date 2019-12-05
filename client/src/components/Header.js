import React from "react"
import LOGO from "../assets/LOGO-01.png"
import Icon from "../lib/Icon"
import { Link } from "react-router-dom"
import Cart from "./Cart"

export default props => {
    return (
        <header>
        <div className="header-left">
          <Link to="/">
          <div>
            <img className="logo" src={LOGO} alt="" />
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
            {/* <Icon icon="shopping-cart" /> */}
            <Cart />
          </div>
        </div>
      </header>
    )
}