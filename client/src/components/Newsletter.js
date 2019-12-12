import React from 'react' 
import Popup from "reactjs-popup";
import "../styles/Newsletter.css"




export default props => {
return (
<div className="newslettercontainer">
  <div className="newletter">Join the Mint Newsletter</div>
  <div className="newlettersub">"Join for news, discounts, and daily deals; These are deals that will surely keep you looking fresh!"</div>
    <Popup trigger={<button className="puButtonHome"> Subscribe </button>}
    modal
    closeOnDocumentClick
  >
    <div className="footcontainer">
      <div className="footer2">
        <div className="form">
          <input type="name" name="email" aria-autocomplete="none" aria-required="true"/>
          <label for="email" className="label-email">
          <span className="content-email">Full Name</span>
          </label>
        </div>
        <div className="form">
          <input type="email" name="email" aria-autocomplete="none" aria-required="true"/>
          <label for="email" className="label-email">
          <span className="content-email">Email</span>
          </label>
        </div>
        <div className="form">
          <input type="tel" name="email" aria-autocomplete="none" aria-required="true"/>
          <label for="email" className="label-email">
          <span className="content-email">Phone Number</span>
          </label>
        </div>
        <div className="form">
          <input type="day" name="email" aria-autocomplete="none" aria-required="true"/>
          <label for="email" className="label-email">
          <span className="content-email">Birthday</span>
          </label>
        </div>
      </div>
    </div>
  <div className="puHomeContainer">
    <Popup
    trigger={<button className="puButtonHome2"> Subscribe </button>}
    modal
    closeOnDocumentClick
  >
    <div className="puThanks"><span>THANKS FOR SUBSCRIBING! - Mint</span></div>
  </Popup></div>
  </Popup>
          
</div>
  )
}


