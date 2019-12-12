import {AwesomeButtonSocial } from "react-awesome-button";
import 'react-awesome-button/dist/themes/theme-blue.css';
import React from "react"

export default props => {
return (
    <div>
         <div>
         <AwesomeButtonSocial
                type="facebook"
                url="www.google.com"
                target="_blank"
                size="icon">
          </AwesomeButtonSocial>
          <AwesomeButtonSocial
                type="facebook"
                url="https://www.sciencealert.com/images/2019-12/processed/CatsHaveFacialExpressionsButHardToRead_600.jpg"
                target="_blank"
                size="icon">
          </AwesomeButtonSocial>
          <AwesomeButtonSocial
                type="twitter"
                url="https://www.sciencealert.com/images/2019-12/processed/CatsHaveFacialExpressionsButHardToRead_600.jpg"
                target="_blank"
                size="icon">
          </AwesomeButtonSocial>
          <AwesomeButtonSocial
                type="twitter"
                url="https://www.sciencealert.com/images/2019-12/processed/CatsHaveFacialExpressionsButHardToRead_600.jpg"
                target="_blank"
                size="icon">
          </AwesomeButtonSocial>
        </div>

    </div>
)
}