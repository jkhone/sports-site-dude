import React from 'react' 
import {AwesomeButtonSocial} from "react-awesome-button";
import 'react-awesome-button/dist/themes/theme-blue.css';
import "../styles/MintSocial.css"


export default props => {

return (
    <div>
      <div>
        <div className="social">
         <AwesomeButtonSocial
            type="facebook"
            a href="https://www.facebook.com/MintGearCo/" target="_blank"
            size="icon">
          </AwesomeButtonSocial>
          <AwesomeButtonSocial
            type="instagram"
            a href="https://www.instagram.com/mintgearco/" target="_blank"
            size="icon">
          </AwesomeButtonSocial>
        </div>
        <div className="social">
          <AwesomeButtonSocial
            type="twitter"
            a href="https://www.twitter.com/TeamMint4" target="_blank"
            size="icon">
          </AwesomeButtonSocial>
          <AwesomeButtonSocial
            type="youtube"
            a href="http://www.youtube.com" target="_blank"
            size="icon">
          </AwesomeButtonSocial>
        </div>
      </div>
    </div>
)
}