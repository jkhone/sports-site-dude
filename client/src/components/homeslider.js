import React from "react"
import {popImages} from "./homesliderimages"
import {Gallery, GalleryImage} from 'react-gesture-gallery'
import "../styles/MVPSlider.css"

const START_INDEX = 0

export default function() {
   const [index, setIndex] = React.useState(START_INDEX)
   React.useEffect(() => {
   const interval = setInterval(() => {
       if (index === popImages.length - 1) {
           setIndex(START_INDEX)
       } else {
           setIndex(index + 1)
       }
    }, 2500)
    return () => clearInterval(interval)
   }, [index])
   
    return (
        <Gallery
        index={index}
        enableControls={false}
        enableIndicators={false}
        onRequestChange={i => {
            setIndex(i)
        }}
        >
            {popImages.map(image => (
                <>
                 <a className="MVPSlider" href={image.url}><GalleryImage objectFit="cover" src={image.img}/></a>
                </>
            ))}
        </Gallery>
    )
}



