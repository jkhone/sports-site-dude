import React from 'react' 
import {AwesomeButtonSocial } from "react-awesome-button";
import { Link } from 'react-router-dom'
import "../styles/TheDevs.css"
import 'react-awesome-button/dist/themes/theme-blue.css';

export default function() {

const Alex =  "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/DevPics%2Fdownload.png?alt=media&token=96e21598-1800-4d6d-877e-a2af932296cc"
const Jasper = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/DevPics%2FIMG_0596%20copy.JPG?alt=media&token=226f869b-d230-49e3-9a29-88ca7217683b"
const Kaden  = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/DevPics%2FIMG_0599.jpg?alt=media&token=6d2c61b4-6b72-4910-818c-2ab4f6397678"
const Jimmy = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/DevPics%2FIMG_0581.JPG?alt=media&token=f5e61dad-1943-4e0a-bf3c-e1ca9a1d2cd8"
    
  return (
        <div className="devpage">
            <div className="dev">
              <div className="part1dev">
                <p>Alex</p>
                <Link to={"/"}>
                  <img className="devImg" src={Alex} alt="whoops"/>
                </Link>
              </div>
              <div className="part2dev">
                <AwesomeButtonSocial
                  type="linkedin"
                  a href="https://www.linkedin.com/in/alexanderjgonzalez/"
                  target="_blank">
                </AwesomeButtonSocial>
                <AwesomeButtonSocial
                  type="github"
                  a href="https://github.com/Julian1alex"
                  target="_blank">
                </AwesomeButtonSocial>
              </div>
              <div className="part3dev">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eos quas, maiores fugiat, rerum minus ad veniam. Sint assumenda perferendis, quam officiis maxime eum aut. Culpa atque obcaecati quasi illo? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eos quas, maiores fugiat, rerum minus ad veniam. Sint assumenda perferendis, quam officiis maxime eum aut. Culpa atque obcaecati quasi illo?</p>
              </div>
            </div>
            <div className="dev">
              <div className="part1dev">
                <p>Kaden</p>
                <Link to={"/"}>
                  <img className="devImg" src={Kaden} alt="whoops"/>
                </Link>
              </div>
              <div className="part2dev">
                <AwesomeButtonSocial
                  type="linkedin"
                  a href="https://www.linkedin.com/in/kaden-neuman-7212a8195/"
                  target="_blank">
                </AwesomeButtonSocial>
                <AwesomeButtonSocial
                  type="github"
                  a href="https://github.com/KadenN2019"
                  target="_blank">
                </AwesomeButtonSocial>
              </div>
              <div className="part3dev">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eos quas, maiores fugiat, rerum minus ad veniam. Sint assumenda perferendis, quam officiis maxime eum aut. Culpa atque obcaecati quasi illo? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eos quas, maiores fugiat, rerum minus ad veniam. Sint assumenda perferendis, quam officiis maxime eum aut. Culpa atque obcaecati quasi illo?</p>
              </div>
            </div>
            <div className="dev">
              <div className="part1dev">
                <p>Jimmy</p>
                <Link to={"/"}>
                  <img className="devImg" src={Jimmy} alt="whoops"/>
                </Link>
              </div>
              <div className="part2dev">
                <AwesomeButtonSocial
                  type="linkedin"
                  a href="https://www.linkedin.com/in/jimmy-lin-0034992/"
                  target="_blank">
                </AwesomeButtonSocial>
                <AwesomeButtonSocial
                  type="github"
                  a href="https://github.com/jimmygrin"
                  target="_blank">
                </AwesomeButtonSocial>
              </div>
              <div className="part3dev">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eos quas, maiores fugiat, rerum minus ad veniam. Sint assumenda perferendis, quam officiis maxime eum aut. Culpa atque obcaecati quasi illo? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eos quas, maiores fugiat, rerum minus ad veniam. Sint assumenda perferendis, quam officiis maxime eum aut. Culpa atque obcaecati quasi illo?</p>
              </div>
            </div>
            <div className="dev">
              <div className="part1dev">
                <p>Jasper</p>
                <Link to={"/"}>
                  <img className="devImg" src={Jasper} alt="whoops"/
                  >
                </Link>
              </div>
              <div className="part2dev">
                <AwesomeButtonSocial
                  type="linkedin"
                  a href="https://www.linkedin.com/in/jasper-khonesavanh-812006195/"
                  target="_blank">
                </AwesomeButtonSocial>
                <AwesomeButtonSocial
                  type="github"
                  a href="https://github.com/jkhone"
                  target="_blank">
                </AwesomeButtonSocial>
              </div>
              <div className="part3dev">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eos quas, maiores fugiat, rerum minus ad veniam. Sint assumenda perferendis, quam officiis maxime eum aut. Culpa atque obcaecati quasi illo? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eos quas, maiores fugiat, rerum minus ad veniam. Sint assumenda perferendis, quam officiis maxime eum aut. Culpa atque obcaecati quasi illo?</p>
              </div>
            </div>
        </div>
    )
}


