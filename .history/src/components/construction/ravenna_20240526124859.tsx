import React from "react";


import { TextParallaxContentExample } from "../parallaxText/parallaxText";
import HomeSection from "../homeSection/homeSection";

import ravenna1 from '../../media/ravenna/ravenna1.png'

import Content from "../content/content";
import Accordion from "../accordion/accordion";
import { listText1 } from "../../data/data";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

import main from '../../media/commercial/commercialMain.jpeg'

import commercial1 from '../../media/commercial/commercial1.jpeg'
import commercial2 from '../../media/commercial/commercial2.jpeg'
import commercial3 from '../../media/commercial/commercial3.jpeg'
import commercial4 from '../../media/commercial/commercial4.jpeg'
import commercial5 from '../../media/commercial/commercial5.jpeg'
import commercial6 from '../../media/commercial/commercial6.jpeg'
import commercial7 from '../../media/commercial/commercial7.jpeg'
import { useGeneralContext } from "../../context/context";
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
        // {
        //     url:commercial6,
        //     alt:'Commercial building 6'
        // },

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

        const {correctPassword} = useGeneralContext()

    return (

        {correctPassword === true ? (

 
        <section className="absolute top-0 left-0
        bg-main-color">

            <Navbar
            links={navLinks}
            />

            <TextParallaxContentExample
            image={main}
            heading='Commercial Construction'
            subheading=""
            hasDestination={false}
            title=''
            destination="contact"
            description={[
               
            ]}
            />

            <HomeSection
            images={commericalImages}
            title=''
            description="Enter a realm of architectural brilliance as we unveil our diverse portfolio of commercial properties. Each image captures our dedication to excellence and innovation. From bustling urban developments to serene suburban spaces, our projects embody sophistication and precision. Explore our gallery and witness the embodiment of our vision"
            />

          



                      <Content
           hasAnimation={true}
           image={commercial7}
           customText={ <Accordion
            text={listText1}
            hasIntro={true}
            intro='Build With Confidence'
            description='Trust our expertise, commitment to quality, and passion for excellence in construction.'
            />}

    />

    <Footer
    links={links}
    />

        </section>

        ) : (
            
        )}
    )
}

export default Commercial