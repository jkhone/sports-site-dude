import React from 'react' 
import {AwesomeButtonSocial, ICONS } from "react-awesome-button";
import 'react-awesome-button/dist/themes/theme-blue.css';

export default props => {

return (
    <div>
         <div>
          
         <AwesomeButtonSocial
                type="facebook"
                a href="https://www.facebook.com/MintGearCo/" target="_blank">
              </AwesomeButtonSocial>
              <AwesomeButtonSocial
                type="instagram"
                a href="https://www.instagram.com/mintgearco/" target="_blank">
              </AwesomeButtonSocial>
              <AwesomeButtonSocial
                type="twitter"
                a href="https://www.twitter.com/TeamMint4" target="_blank">
              </AwesomeButtonSocial>
              <AwesomeButtonSocial
                type="youtube"
                a href="http://www.youtube.com" target="_blank">
              </AwesomeButtonSocial>
              

        </div>

    </div>
)
}