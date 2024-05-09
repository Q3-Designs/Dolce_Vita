import React from "react"
import Content from "../content/content"
import { TextParallaxContentExample } from "../parallaxText/parallaxText"
import home1 from '../../media/ravenna/ravenna1.png'
import home2 from '../../media/dv-home2.png'
import { text1,listText1,closerText,openingText,
text2,text3 } from "../../data/data"
import ImageSlider from "../imageSlider/imageSlider"
import Footer from "../footer/footer"
import Navbar from "../navbar/navbar"
import ShuffleHero from "../shuffleHero/shuffleHero"
import Accordion from "../accordion/accordion"
import Closer from "../closer/closer"
import dark from '../../media/ravenna/dark-ravenna.png'
import darkWhite from '../../media/white/dark-white.png'

const Homepage: React.FC = () => {
    const workLinks = {
        title: 'Our Work',
        links: [
            {
                destination: 'custom-homes',
                name: 'Custom Homes'
            },
            {
                destination: 'commercial-construction',
                name: 'Commercial Construction'
            },
            {
                destination: 'retail-homes',
                name: 'Retail Homes'
            }
        ]
    };
    
    const contactLinks = {
        title: 'Contact',
        links: [
            {
                destination: 'contact',
                name: 'Email Us'
            }
        ]
    };

        const links = [
            workLinks,
            contactLinks
        ]

        const navLinks = [
            ...workLinks.links,
           {
            destination:'contact',
            name:'Contact'
           }
        ]

        

    return (
        <>
           <Navbar
        links={navLinks}
        />
      <section className="absolute top-20 left-0 w-screen">

<ShuffleHero/>

            <Closer
            {...openingText}
            image={darkWhite}/>

            <Content
            image={home1}
          {...text1}
            customText={false}
            reverse={false}
           
            floatingImage={false}
            hasAnimation={true}
      
            />

            <Content
            image={home2}
            // mainTitle={text2.title}
            customText={false}
            reverse={true}
            // description={text2.description}
            floatingImage={false}
            hasAnimation={true}
            // buttonLink={text2.buttonLink}
            // buttonText={text2.buttonText}
            {...text2}
            />

<Content
            image={home2}
            mainTitle={text3.title}
            customText={false}
            reverse={false}
            description={text3.description}
            floatingImage={false}
            hasAnimation={true}
            buttonLink={text3.buttonLink}
            buttonText={text3.buttonText}
            />

            <Accordion
            hasIntro={true}
            intro='More Facts'
            description='Lorem 20'
            text={listText1}
            />

            <Closer
            {...closerText}
            image={dark}/>


            <Footer
            links={links}
            />

            {/* <ImageSlider
            images={images}/> */}
            </section>
            </>
    )
    
}


export default Homepage