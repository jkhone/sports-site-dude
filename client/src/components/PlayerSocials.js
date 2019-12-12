import React from 'react' 
import { AwesomeButtonSocial } from "react-awesome-button"
import 'react-awesome-button/dist/themes/theme-blue.css'
import "../styles/PlayersPage.css"

export default props => {
  return (
      <div className="playersocial">
            <AwesomeButtonSocial
                  type="facebook"
                  url="https://www.sciencealert.com/images/2019-12/processed/CatsHaveFacialExpressionsButHardToRead_600.jpg"
                  target="_blank"
                  size="icon">
            </AwesomeButtonSocial>
            <AwesomeButtonSocial
                  type="instagram"
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
                  type="youtube"
                  url="https://www.sciencealert.com/images/2019-12/processed/CatsHaveFacialExpressionsButHardToRead_600.jpg"
                  target="_blank"
                  size="icon">
            </AwesomeButtonSocial>
      </div>
  )
}