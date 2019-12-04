import React from "react"
import LOGO from "../assets/LOGO-01.jpg"
import Icon from "../lib/Icon"
import { Link } from "react-router-dom"

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
          <div className="header-item">
            THE GUYS
          </div>
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
            <Icon icon="shopping-cart" />
          </div>
        </div>
      </header>
    )
}