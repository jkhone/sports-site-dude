import React from 'react' 
import '../styles/TheGuys.css'

import Curry1 from "../assets/Color/CurryColor.jpg"
import Curry2 from "../assets/Color/Curry2.jpg"
import Curry3 from "../assets/Color/Curry3.jpg"
import Giannis from "../assets/Color/giannis.jpg"
import Giannis2 from "../assets/Color/giannis1Color.jpg"
import JHarden from "../assets/Color/JHarden.jpg"
// import JHarden2 from "../assets/Color/JHarden2.jpg"
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
          <img className="galleryImg" src={Curry3} alt="whoops"/>
          <img className="galleryImg" src={Kawhi2} alt="whoops"/>
          <img className="galleryImg" src={JHarden} alt="whoops"/>
          <img className="galleryImg" src={PGeorge} alt="whoops"/>
          
        </div>
        <div className="column2">
          <img className="galleryImg" src={Giannis} alt="whoops"/>
          <img className="galleryImg" src={Lebron2} alt="whoops"/>
          <img className="galleryImg" src={Curry1} alt="whoops"/>
          <img className="galleryImg" src={Green} alt="whoops"/>
        </div>
        <div className="column2">
          <img className="galleryImg" src={Giannis2} alt="whoops"/>
          <img className="galleryImg" src={Green2} alt="whoops"/>
          <img className="galleryImg" src={Kemba} alt="whoops"/>
          <img className="galleryImg" src={Curry2} alt="whoops"/>
        </div>
        <div className="column2">
          <img className="galleryImg" src={Kawhi3} alt="whoops"/>
          <img className="galleryImg" src={Kemba2} alt="whoops"/>
          <img className="galleryImg" src={Kawhi} alt="whoops"/>
          <img className="galleryImg" src={Lebron} alt="whoops"/>
        </div>
      </div>
    </div>
    )
  }
