import React from "react";
import { ImageSlider2 } from "../imageSlider2/imageSlider2";

interface HomeSectionProps {
    title:string,
    description:string,
    images:{
        url:string,
        alt:string
    }[];
}

const HomeSection: React.FC<HomeSectionProps> = ({title,
description,images}) => {

    return (
        <section >
            <h1 className="text-2xl">{title}</h1>
            <p className="text-left ml-4 ">{description}</p>
            <ImageSlider2
            images={images}
            />

        </section>
    )
}

export default HomeSection