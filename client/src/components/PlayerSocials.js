import React from 'react' 
import { AwesomeButtonSocial } from "react-awesome-button"
import 'react-awesome-button/dist/themes/theme-blue.css'
import "../styles/PlayersPage.css"

export default props => {
      console.log(props.id)
  return (
      <div className="playersocial">
            <AwesomeButtonSocial
                  type="facebook"
                  href={`${props.facebook}`}                   
                  target="_blank"
                  size="icon">
            </AwesomeButtonSocial>
            <AwesomeButtonSocial
                  type="instagram"
                  href={`${props.instagram}`}                   
                  target="_blank"
                  size="icon">
            </AwesomeButtonSocial>
            <AwesomeButtonSocial
                  type="twitter"
                  href={`${props.twitter}`}                   
                  target="_blank"
                  size="icon">
            </AwesomeButtonSocial>
            <AwesomeButtonSocial
                  type="youtube"
                  href={`${props.youtube}`}                   
                  target="_blank"
                  size="icon">
            </AwesomeButtonSocial>
      </div>
  )
}