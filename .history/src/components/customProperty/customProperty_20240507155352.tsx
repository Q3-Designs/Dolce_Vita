import React from "react";
import ImageSlider from "../imageSlider/imageSlider";
import home1 from '../../media/dv-main-home.png'
import home2 from '../../media/dv-home2.png'
import custom1 from '../../media/customHome/custom-intreior.png'
import grey2 from '../../media/greyHome/grey-home2.png'
import grey3 from '../../media/greyHome/grey-home3.png'
import grey4 from '../../media/greyHome/grey-home4.png'
import grey5 from '../../media/greyHome/grey-home5.png'
const CustomProperty: React.FC = () => {

    const images = [
        grey2,grey3
    ]

    return (
        <section className="absolute top-0 left-0 flex justify-center flex-col items-center w-screen">
            <h2>We make awesome custom homes </h2>
            <ImageSlider
            images={images}
            />
        </section>
    )
}

export default CustomProperty