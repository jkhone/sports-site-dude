import React from "react"
import LOGO from "../assets/LOGO-01.png"
import { Link } from "react-router-dom"
import Cart from "./Cart"
import { useAuth } from '../hooks'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default props => {

  const { isAuthenticated, signout, username } = useAuth()

    return (
      <header>
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Link to="/">
            <div>
              <img className="logo" src={LOGO} alt="whoops" />
            </div>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/shoes" >
                <div className="header-item">
                  SHOES
                </div>
              </Link>
              <Link to="/players" >
                <div className="header-item">
                  PLAYERS
                </div>
              </Link>
              <Link to="/MVPs">
                <div className="header-item">
                  THE GUYS
                </div>
              </Link>
            </Nav>
            <Nav className="navrightside">
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Cart />
      </header>
    )
}