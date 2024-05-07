import React from "react";
import ImageSlider from "../imageSlider/imageSlider";
import home1 from '../../media/dv-main-home.png'
import home2 from '../../media/dv-home2.png'

const CustomProperty: React.FC = () => {

    const images = [
        home1,
    ]

    return (
        <section className="absolute top-0 left-0">
            <ImageSlider
        </section>
    )
}

export default CustomProperty