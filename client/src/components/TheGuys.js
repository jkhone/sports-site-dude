import React from 'react' 
import '../styles/TheGuys.css'

import Curry1 from "../assets/Color/CurryColor.jpg"
import Curry2 from "../assets/Color/Curry2.jpg"
import Curry3 from "../assets/Color/Curry3.jpg"
import Giannis from "../assets/Color/giannis.jpg"
import Giannis2 from "../assets/Color/giannis1Color.jpg"
import JHarden from "../assets/Color/JHarden.jpg"
import JHarden2 from "../assets/Color/JHarden2.jpg"
import Kawhi from "../assets/Color/KawhiColor.jpg"
import Kawhi2 from "../assets/Color/Kawhi2.jpeg"
import Kawhi3 from "../assets/Color/Kawhi3.jpg"
import Lebron from "../assets/Color/lebron_dunk.jpg"
import Lebron2 from "../assets/Color/Lebron2.jpg"
import PGeorge from "../assets/Color/PaulGeorge.jpg"
import Kemba from "../assets/Color/Kemba.jpg"
import Kemba2 from "../assets/Color/Kemba2.jpg"
import Green from "../assets/Color/draymondGreen.jpg"
import Green2 from "../assets/Color/draymondGreen2.jpg"

export default props => {
  return (
    <div className="cont">
      <div className="row">
        <div className="column1">
          <img className="galleryImg" src={Curry3} />
          <img className="galleryImg" src={Kawhi2} />
          <img className="galleryImg" src={JHarden} />
          <img className="galleryImg" src={PGeorge} />
          
        </div>
        <div className="column2">
          <img className="galleryImg" src={Giannis} />
          <img className="galleryImg" src={Lebron2} />
          <img className="galleryImg" src={Curry1} />
          <img className="galleryImg" src={Green} />
        </div>
        <div className="column2">
          <img className="galleryImg" src={Giannis2} />
          <img className="galleryImg" src={Green2} />
          <img className="galleryImg" src={Kemba} />
          <img className="galleryImg" src={Curry2} />
        </div>
        <div className="column2">
          <img className="galleryImg" src={Kawhi3} />
          <img className="galleryImg" src={Kemba2} />
          <img className="galleryImg" src={Kawhi} />
          <img className="galleryImg" src={Lebron} />
        </div>
      </div>
    </div>
    )
  }
