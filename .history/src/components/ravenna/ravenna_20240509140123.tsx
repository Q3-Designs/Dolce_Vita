import React from "react";


import { TextParallaxContentExample } from "../parallaxText/parallaxText";
import HomeSection from "../homeSection/homeSection";

import ravenna1 from '../../media/ravenna/ravenna1.png'

import Content from "../content/content";
import Accordion from "../accordion/accordion";
import { listText1 } from "../../data/data";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

import commercial1 from '../../media/commercial/commercial1.jpeg'
import commercial2 from '../../media/commercial/commercial2.jpeg'
import commercial3 from '../../media/commercial/commercial3.jpeg'
import commercial4 from '../../media/commercial/commercial4.jpeg'
import commercial5 from '../../media/commercial/commercial5.jpeg'
// import commercial6 from '../../media/commercial/commercial6.jpeg'
// import commercial7 from '../../media/commercial/commercial7.jpeg'
// import commercial8 from '../../media/commercial/commercial8.jpeg'


const Commercial: React.FC = () => {

    const commericalImages = [
        {
            url:commercial1,
            alt:'Commercial building 1'
        },
        {
            url:commercial2,
            alt:'Commercial building 2'
        },
        {
            url:commercial3,
            alt:'Commercial building 3'
        },
        {
            url:commercial4,
            alt:'Commercial building 4'
        },
        {
            url:commercial5,
            alt:'Commercial building 5'
        },

    ]

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
            images={commericalImages}
            title='The front'
            description="the front is very nice"
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

export default Commercial