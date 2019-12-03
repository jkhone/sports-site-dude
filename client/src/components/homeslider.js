import React from "react"
import ReactDom from "react-dom"
import {popImages} from "./homesliderimages"
import {Gallery, GalleryImage} from 'react-gesture-gallery'

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
        style={{
            width: "100%",
        }}
        index={index}
        enableControls={false}
        enableIndicators={false}
        onRequestChange={i => {
            setIndex(i)
        }}
        >
            {popImages.map(image => (
                <>
                 <a href={image.url}><GalleryImage objectFit="cover" src={image.img}/></a>
                </>
            ))}
        </Gallery>
    )
}

const rootElement = document.getElementById("root")
ReactDom.render(<default/>, rootElement)

