import React from "react"
import ReactDom from "react-dom"
import {brandImages} from "./BrandSliderImages"
import {Gallery, GalleryImage} from 'react-gesture-gallery'
import "../styles/base.css"

const START_INDEX = 0

export default function() {
   const [index, setIndex] = React.useState(START_INDEX)
   
    return (
        <Gallery
        index={index}
        enableControls={true}
        enableIndicators={false}
        onRequestChange={i => {
            setIndex(i)
        }}
        >
            {brandImages.map((image, i) => (
                <div key={"brandslider" + i} className="brandCSS">
                 <a href={image.url1}><GalleryImage className="bImage" objectFit="cover" src={image.img1}/></a>
                 <a href={image.url2}><GalleryImage className="bImage" objectFit="cover" src={image.img2}/></a>
                 <a href={image.url3}><GalleryImage className="bImage" objectFit="cover" src={image.img3}/></a>
                 <a href={image.url4}><GalleryImage className="bImage" objectFit="cover" src={image.img4}/></a>
                 <a href={image.url5}><GalleryImage className="bImage" objectFit="cover" src={image.img5}/></a>
                 <a href={image.url6}><GalleryImage className="bImage" objectFit="cover" src={image.img6}/></a>
                 <a href={image.url7}><GalleryImage className="bImage" objectFit="cover" src={image.img7}/></a>
                 <a href={image.url8}><GalleryImage className="bImage" objectFit="cover" src={image.img8}/></a>
                </div>
            ))}
        </Gallery>
    )
}