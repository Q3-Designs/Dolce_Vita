import React from "react";

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
            <h1>{title}</h1>
            <p>{description}</p>
            <Ima
        </section>
    )
}