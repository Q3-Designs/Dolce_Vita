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
            <p>{description}</p>
            <ImageSlider2
            images={images}
            />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium vitae suscipit assumenda corrupti odio! Dolore quisquam ex blanditiis exercitationem veritatis totam cupiditate, hic rerum commodi dolores aperiam. Voluptatibus minima vitae nam vero, velit ea itaque repellendus, saepe culpa provident facere?
        </section>
    )
}

export default HomeSection