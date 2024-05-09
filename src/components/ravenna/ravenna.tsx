import React from "react";


import { outFrontImages,backyardImages,
    indoorImages,bedAndBath} from "./ravennaImports";


import { TextParallaxContentExample } from "../parallaxText/parallaxText";
import HomeSection from "../homeSection/homeSection";

import ravenna1 from '../../media/ravenna/ravenna1.png'

import Content from "../content/content";
import Accordion from "../accordion/accordion";
import { listText1 } from "../../data/data";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Ravenna: React.FC = () => {

    const workLinks = {
        title: 'Our Work',
        links: [
          
            {
                destination: '/retail-homes',
                name: 'Retail Homes'
            },
            {
                destination: '/custom-homes',
                name: 'Custom Homes'
            }
        ]
    };
    
    const contactLinks = {
        title: 'Site Map',

        links: [
            {
                destination:'/',
                name:'Homepage'
            },
            {
                destination: 'contact',
                name: 'Contact us'
            },

        ]
    };

        const links = [
            workLinks,
            contactLinks
        ]

        const navLinks = [
            {
                destination:'/',
                name:'Home'
            },
            ...workLinks.links,
           {
            destination:'contact',
            name:'Contact'
           }
        ]

    return (
        <section className="absolute top-0 left-0">

            <Navbar
            links={navLinks}
            />

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
           image={ravenna1}
           customText={ <Accordion
            text={listText1}
            hasIntro={true}
            intro='lorem ipsum lorem'
            description='Here are some other features'
            />}

    />

    <Footer
    links={links}
    />

        </section>
    )
}

export default Ravenna