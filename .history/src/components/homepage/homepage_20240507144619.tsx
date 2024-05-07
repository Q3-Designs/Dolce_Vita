import React from "react"
import Content from "../content/content"
import { TextParallaxContentExample } from "../parallaxText/parallaxText"
import home1 from '../../media/dv-main-home.png'
import home2 from '../../media/dv-home2.png'
import { text1 } from "../../data/data"
import ImageSlider from "../imageSlider/imageSlider"

const Homepage: React.FC = () => {

const images= [
    home1,home2,
    home1,home2
]

    return (
      <section className="absolute top-0 left-0 w-screen">


            <TextParallaxContentExample
            image={home1}
            heading='Dolce Vita Construction and Project Management'
            subheading="We make phenomenal homes"
            title={text1.title}
            description={text1.description}
            hasDestination={true}
            destination='custom-homes'
            />

            <Content
            image={home1}
            mainTitle={text1.title}
            customText={false}
            reverse={false}
            description={text1.description}
            floatingImage={false}
            hasAnimation={true}
            buttonLink={text1.buttonLink}
            buttonText={text1.buttonText}
            />

            <Content
            image={home2}
            mainTitle={text1.title}
            customText={false}
            reverse={true}
            description={text1.description}
            floatingImage={false}
            hasAnimation={true}
            buttonLink={text1.buttonLink}
            buttonText={text1.buttonText}
            />

            {/* <ImageSlider
            images={images}/> */}
            </section>
  
    )
}


export default Homepage