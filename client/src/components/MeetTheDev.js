import React from 'react' 
import {AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';
import { Link } from 'react-router-dom'


export default function() {

const Alex = "https://via.placeholder.com/300"
const Jasper = "https://via.placeholder.com/300"
const Kaden  = "https://via.placeholder.com/300"
const Jimmy = "https://via.placeholder.com/300"
    return (
        <div>
            <div>
            <p>Jasper</p>
            <Link to={"/"}>
            <img className="devImg" src={Alex} alt="whoops"/>
          </Link>
          <p> decs </p>
          <AwesomeButton type="primary">Primary</AwesomeButton>
            </div>
            <div>
            <p>Alex</p>
            <Link to={"/"}>
            <img className="devImg" src={Jasper} alt="whoops"/>
          </Link>
          <p> decs </p>
          <AwesomeButtonProgress type="secondary" size="medium">Primary</AwesomeButtonProgress>          

            </div>
            <div>
            <p>Jimmy</p>
            <Link to={"/"}>
            <img className="devImg" src={Kaden} alt="whoops"/>
          </Link>
          <p> decs </p>
          <AwesomeButtonSocial
        type="facebook"
        url="www.facebook.com">Button
      </AwesomeButtonSocial>
            </div>
            <div>
            <p>Kaden</p>
            <Link to={"/"}>
            <img className="devImg" src={Jimmy} alt="whoops"/>
          </Link>
          <p> decs </p>
            </div>
        </div>
    )
}

