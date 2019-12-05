import React from 'react' 
import { Link } from 'react-router-dom'

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
          <Link to={"/player/10"}>
            <img className="galleryImg" src={Curry3} alt="whoops"/>
          </Link>
          <Link to={"/player/17"}>
            <img className="galleryImg" src={Kawhi2} alt="whoops"/>
          </Link>
          <Link to={"/player/7"}>
            <img className="galleryImg" src={JHarden} alt="whoops"/>
          </Link>
          <Link to={"/player/16"}>
            <img className="galleryImg" src={PGeorge} alt="whoops"/>
          </Link>
        </div>
        <div className="column2">
          <Link to={"/player/13"}>
            <img className="galleryImg" src={Giannis} alt="whoops"/>
          </Link>
          <Link to={"/player/1"}>
            <img className="galleryImg" src={Lebron2} alt="whoops"/>
          </Link>
          <Link to={"/player/10"}>
            <img className="galleryImg" src={Curry1} alt="whoops"/>
          </Link>
          <Link to={"/player/11"}>
            <img className="galleryImg" src={Green} alt="whoops"/>
          </Link>
        </div>
        <div className="column2">
          <Link to={"/player/13"}>
            <img className="galleryImg" src={Giannis2} alt="whoops"/>
          </Link>
          <Link to={"/player/11"}>
            <img className="galleryImg" src={Green2} alt="whoops"/>
          </Link>
          <Link to={"/player/4"}>
            <img className="galleryImg" src={Kemba} alt="whoops"/>
          </Link>
          <Link to={"/player/10"}>
            <img className="galleryImg" src={Curry2} alt="whoops"/>
          </Link>
        </div>
        <div className="column2">
          <Link to={"/player/17"}>
            <img className="galleryImg" src={Kawhi3} alt="whoops"/>
          </Link>
          <Link to={"/player/4"}>
            <img className="galleryImg" src={Kemba2} alt="whoops"/>
          </Link>
          <Link to={"/player/17"}>
            <img className="galleryImg" src={Kawhi} alt="whoops"/>
          </Link>
          <Link to={"/player/1"}>
            <img className="galleryImg" src={Lebron} alt="whoops"/>
          </Link>
        </div>
      </div>
    </div>
    )
  }
