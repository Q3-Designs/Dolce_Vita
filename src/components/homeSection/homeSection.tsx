import React from "react";
import Carousel from "../carousel/carousel";
import ImageSlider from "../imageSlider/imageSlider";
// import { ImageSlider2 } from "../imageSlider2/imageSlider2";

interface HomeSectionProps {
    title:string,
    description:string,
    images: {
        url:  string,
      
        title: string,
        description: string,
        link: string
    }[],
}

const HomeSection: React.FC<HomeSectionProps> = ({title,
description,images}) => {

    return (
        <section className="mt-4 text-gray-500">
            <h1 className="text-center font-pacifico bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent">{title}</h1>
            <p className="text-center  mt-5 mb-5 max-w-[800px] mr-auto ml-auto
            md:p-0">{description}</p>
            {/* <ImageSlider2
            images={images}
            /> */}
           <Carousel
           images={images}
           hasDescription={false}
           isGrid={true}/>
            

        </section>
    )
}

export default HomeSection