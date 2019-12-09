import React from 'react' 
import { Link } from 'react-router-dom'
import '../styles/TheGuys.css'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

export default props => {

  const Curry1 = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/The%20Guys%2FCurryColor.jpg?alt=media&token=9a8f892e-40bc-4134-9998-cf7168fbd945"
  const Curry2 = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/The%20Guys%2FCurry2.jpg?alt=media&token=a0af4703-959f-461f-8a58-fa57902485af"
  const Curry3 = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/The%20Guys%2FCurry3.jpg?alt=media&token=f89f7366-9713-4247-975c-39aa7fc5e692"
  const Giannis = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/The%20Guys%2Fgiannis.jpg?alt=media&token=37b7dd00-6be3-4f28-b61e-7d43c44e7a22" 
  const Giannis2 = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/The%20Guys%2Fgiannis1Color.jpg?alt=media&token=e1d8b756-7ba0-44d6-b860-311dbe373592"
  const JHarden = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/The%20Guys%2FJHarden.jpg?alt=media&token=321954a6-55e5-4059-910e-198cd7def742"
  const Kawhi = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/The%20Guys%2FKawhiColor.jpg?alt=media&token=7a3162a9-9a48-4dea-aca3-a2bf3df69c02"
  const Kawhi2 = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/The%20Guys%2FKawhi2.jpeg?alt=media&token=be66d015-0516-49cf-b882-85df1eb37744"
  const Kawhi3 = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/The%20Guys%2FKawhi3.jpg?alt=media&token=dd1b0cb2-51cf-43db-860f-87c9c4d8d5bf"
  const Lebron = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/The%20Guys%2Flebron_dunk.jpg?alt=media&token=3b8dbd74-4572-4814-b071-dc7fe5e3cc19"
  const Lebron2 = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/The%20Guys%2FLebron2.jpg?alt=media&token=f3924757-f777-42c6-bfa3-7c32cc7491bc"
  const PGeorge = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/The%20Guys%2FPaulGeorge.jpg?alt=media&token=f85445a9-56b9-4a28-b3fc-39198d27bc7b"
  const Kemba = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/The%20Guys%2FKemba.jpg?alt=media&token=ebc7d175-6db1-45a7-8bb3-1c611800abc1"
  const Kemba2 = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/The%20Guys%2FKemba2.jpg?alt=media&token=4fbdd766-f196-4297-8664-0d89edf95277"
  const Green = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/The%20Guys%2FdraymondGreen.jpg?alt=media&token=cbdc8baf-dd45-431a-899b-70137d07275e"
  const Green2 = "https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/The%20Guys%2FdraymondGreen2.jpg?alt=media&token=7f9d4814-3118-47b1-8d0e-a368121229dd"

  return (
    <LazyLoadComponent>
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
    </LazyLoadComponent>
  )
}
