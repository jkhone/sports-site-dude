import React from "react"
import LOGO from "../assets/LOGO-01.png"
import Icon from "../lib/Icon"
import { Link } from "react-router-dom"
import Cart from "./Cart"
import { useShoes } from '../hooks'
import { usePlayers } from '../hooks'
import { useAuth } from '../hooks'

export default props => {
  const { show } = useShoes()
  const { allPlayers } = usePlayers()

  const { isAuthenticated, signout, username } = useAuth()

    return (
        <header>
        <div className="header-left">
          <Link to="/">
          <div>
            <img className="logo" src={LOGO} alt="whoops" />
          </div>
          </Link>
          <Link to="/shoes" onClick={show}>
            <div className="header-item">
              SHOES
            </div>
          </Link>
          <Link to="/players" onClick={allPlayers}>
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
          {isAuthenticated ? 
            <>
              <Link to={"/profiles/" + username}>
                <div className="header-item">
                  PROFILE
                </div>
              </Link>
              <div 
              onClick={e => signout()}
              className="header-item">LOGOUT</div>
            </>
              : 
              <>
              <Link to="/login">
                <div className="header-item">
                  LOGIN
                </div>
              </Link>
              <Link to="/register">
                <div className="header-item">
                  REGISTER
                </div>
              </Link>
              </>
              }
          
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