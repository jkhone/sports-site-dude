import React, { useState } from "react"
import { useAuth } from "../hooks"
import { useProfile } from "../hooks"
import firebase from "firebase"
import FileUploader from "react-firebase-file-uploader"
import LoadingOverlay from 'react-loading-overlay'
import "../styles/Profile.css" 

const firebaseConfig = {
    apiKey: "AIzaSyCYB4M49C3bgeyS0KM2Uq6ThgEkybLSjlQ",
    authDomain: "sports-site-dude.firebaseapp.com",
    databaseURL: "https://sports-site-dude.firebaseio.com",
    projectId: "sports-site-dude",
    storageBucket: "sports-site-dude.appspot.com",
    messagingSenderId: "731350671787",
    appId: "1:731350671787:web:f9b450aaa088f53245f2ee",
    measurementId: "G-F6Y9HXKMHE"
  }
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default props => {
    const { username } = useAuth()
    const { profilepic, addProfile } = useProfile()
    const [pic, setPic] = useState()
    const [fileName, setFileName] = useState('')
    const [isUploading, setIsUploading] = useState(false)

    function handleUploadStart(filename) {
        setIsUploading(true)
    }
    function handleProgress(progress) {
    }
    function handleUploadError(error) {
        setIsUploading(false)
    }

    function handleUploadSuccess(filename,e) {
        setFileName('')
        setIsUploading(false)
        firebase
          .storage()
          .ref("ProfilePics")
          .child(filename)
          .getDownloadURL()
          .then(url => {
              console.log(url)
              setPic(url)
              addProfile(url)
            })
    }

    return (
        <div className= "profile">
            <LoadingOverlay
            active={isUploading}
            spinner
            text='Uploading your image...'
            ></LoadingOverlay>
            <h1>Hello, {username}!</h1>
            <FileUploader
            accept="image/*"
            name="profilepic"
            randomizeFilename
            storageRef={firebase.storage().ref("ProfilePics")}
            onUploadStart={handleUploadStart}
            onUploadError={handleUploadError}
            onUploadSuccess={handleUploadSuccess}
            onProgress={handleProgress}
            />
            <div className="profilepic" >
                <img src={profilepic} alt="Set a Pic!" />
            </div>
        </div>
    )

}