import React from "react";
import ImageSlider from "../imageSlider/imageSlider";
import home1 from '../../media/dv-main-home.png'
import home2 from '../../media/dv-home2.png'

const CustomProperty: React.FC = () => {

    const images = [
        home1,home2
    ]

    return (
        <section className="absolute top-0 left-0 flex ">
            <h2>We make awesome custom homes </h2>
            <ImageSlider
            images={images}
            />
        </section>
    )
}

export default CustomProperty