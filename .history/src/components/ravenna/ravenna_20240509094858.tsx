import React from "react";


import { outFrontImages,backyardImages,
    indoorImages,bedAndBath} from "./ravennaImports";


import { TextParallaxContentExample } from "../parallaxText/parallaxText";
import HomeSection from "../homeSection/homeSection";

import ravenna1 from '../../media/ravenna/ravenna1.png'

import Content from "../content/content";
import Accordion from "../accordion/accordion";
import {list}

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

                      <Content
           hasAnimation={true}
           image={grey1}
           customText={ <Accordion
            text={listText1}
            hasIntro={true}
            intro='lorem ipsum lorem'
            description='Here are some other features'
            />}

    />

        </section>
    )
}

export default Ravenna