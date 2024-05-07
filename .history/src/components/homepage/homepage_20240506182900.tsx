import React from "react"
import Content from "../content/content"
import { TextParallaxContentExample } from "../parallaxText/parallaxText"



const Homepage: React.FC = () => {

    return (
      <section className="absolute top-0 left-0 w-screen">


            <TextParallaxContentExample/>

            <Content/>
            </section>
  
    )
}


export default Homepage