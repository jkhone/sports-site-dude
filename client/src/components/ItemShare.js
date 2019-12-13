import React from 'react' 
import {AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";
import 'react-awesome-button/dist/themes/theme-blue.css';

export default props => {
console.log (props.id)
return (
    <div>
         <div>
          <AwesomeButtonSocial
            type="facebook"
            url={`http://localhost:3000/product/${props.id}`} >          
          </AwesomeButtonSocial>

          <AwesomeButtonSocial
            type="pinterest"
            url={`http://localhost:3000/product/${props.id}`} >          
          </AwesomeButtonSocial>
          
          <AwesomeButtonSocial
            type="instagram"
            url={`http://localhost:3000/product/${props.id}`} >          
          </AwesomeButtonSocial>
          
          <AwesomeButtonSocial
            type="twitter"
            url={`http://localhost:3000/product/${props.id}`} >          
            </AwesomeButtonSocial>
        </div>
    </div>
)
}