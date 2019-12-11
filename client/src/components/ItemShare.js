import React from 'react' 
import {AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";
import 'react-awesome-button/dist/themes/theme-blue.css';

export default props => {

return (
    <div>
         <div>
          
          <AwesomeButtonSocial
            type="facebook"
            url="https://www.sciencealert.com/images/2019-12/processed/CatsHaveFacialExpressionsButHardToRead_600.jpg" /* URL is link to what is being shared */
            >
          </AwesomeButtonSocial>

          <AwesomeButtonSocial
            type="pinterest"
            url="https://www.sciencealert.com/images/2019-12/processed/CatsHaveFacialExpressionsButHardToRead_600.jpg">
          </AwesomeButtonSocial>
          
          <AwesomeButtonSocial
            type="instagram"
            // url="https://www.sciencealert.com/images/2019-12/processed/CatsHaveFacialExpressionsButHardToRead_600.jpg"
            // target="_blank"
            href="https://instagram.com/julian1alex">
            
          </AwesomeButtonSocial>
          
          <AwesomeButtonSocial
            type="twitter"
            url="https://www.sciencealert.com/images/2019-12/processed/CatsHaveFacialExpressionsButHardToRead_600.jpg">
          </AwesomeButtonSocial>
          
          

        </div>

    </div>
)
}