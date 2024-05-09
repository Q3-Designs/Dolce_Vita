import React from "react";


import { outFrontImages,backyardImages,
 } from "./ravennaImports";


import { TextParallaxContentExample } from "../parallaxText/parallaxText";
import HomeSection from "../homeSection/homeSection";





const Ravenna: React.FC = () => {



    return (
        <section className="absolute top-0 left-0">

            <TextParallaxContentExample
            image={ravenna1}
            heading='The Ravenna'
            subheading="lorem ipsum"
            hasDestination={false}
            title='The ravenna'
            destination=""
            description={[
                'A lovely home'
            ]}
            />

            <HomeSection
            images={outFrontImages}
            title='The front'
            description="the front is very nice"
            />

            <HomeSection
            images={backyardImages}
            title='The Back'
            description="the back is very nice"
            />

<HomeSection
            images={indoorImages}
            title='Inside'
            description="the Inside is very nice"
            />

<HomeSection
            images={bedAndBath}
            title='Bed and Bathrooms'
            description="the bathrooms are very nice"
            />

        </section>
    )
}

export default Ravenna