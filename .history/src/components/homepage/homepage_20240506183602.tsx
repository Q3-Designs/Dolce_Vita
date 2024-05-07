import React from "react"
import Content from "../content/content"
import { TextParallaxContentExample } from "../parallaxText/parallaxText"
import home1 from '../../media/dv-main-home.png'
import home2 from '../../media/dv-home2.png'
import { text1 } from "../../data/data"

const Homepage: React.FC = () => {

    return (
      <section className="absolute top-0 left-0 w-screen">


            <TextParallaxContentExample/>

            <Content
            image={home1}
            mainTitle={text1.title}
            customText={false}
            reverse={false}
            description={text1.description}
            floatingImage={false}
            hasAnimation={false}
            buttonLink={text1.buttonLink}
            buttonText
            />
            </section>
  
    )
}


export default Homepage