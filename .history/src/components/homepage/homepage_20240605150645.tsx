import React, {useEffect, FormEvent} from "react"
import Content from "../content/content"

import home2 from '../../media/dv-home2.png'
import { text1,closerText,openingText,
text2,text3 } from "../../data/data"

import Footer from "../footer/footer"
import Navbar from "../navbar/navbar"
import ShuffleHero from "../shuffleHero/shuffleHero"

import Closer from "../closer/closer"
import dark from '../../media/ravenna/dark-ravenna.webp'
import darkWhite from '../../media/white/dark-white.webp'
import indoor3 from '../../media/white/indoor3.webp'
import commercial from '../../media/commercial/commercialMain.jpeg'
import { useGeneralContext } from "../../context/context"

const Homepage: React.FC = () => {

    useEffect(()=> {
        window.scrollTo(0,0)
    },[])
    const workLinks = {
        title: 'Our Work',
        links: [
            {
                destination: 'custom-homes',
                name: 'Our Work'
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

        const {password, setPassword, correctPassword, setCorrectPassword} = useGeneralContext()

        const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (password === 'clients2024') {
                setCorrectPassword(true);
            } else {
              alert('Incorrect password. Please try again.');
            }
          };
        
          const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
          };


        

    return (
        <>

        {correctPassword === false ? (
            <>
 <Navbar
 links={navLinks}
 />
<section className="absolute top-20 left-0 w-screen overflow-x-hidden
bg-main-color">

<ShuffleHero/>

     <Closer
     {...openingText}
     image={darkWhite}/>

     <Content
     image={commercial}
   {...text3}
     customText={false}
     reverse={false}
    
     floatingImage={false}
     hasAnimation={true}

     />

     <Content
     image={indoor3}
     {...text1}
     customText={false}
     reverse={true}

     floatingImage={false}
     hasAnimation={true}
 

     />

     <Content
     image={home2}
    {...text2}
     customText={false}
     reverse={false}
    
     floatingImage={false}
     hasAnimation={true}
   
     />

     {/* <Accordion
     hasIntro={true}
     intro='More Facts'
     description='Lorem 20'
     text={listText1}
     /> */}

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
      ) : (
            <>
            <section className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 p-8 rounded-md shadow-md
            bg-main-color`
        }>
                <h2 className="text-center text-xl font-semibold mb-4 text-black">Please Enter Password</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
                  />
                  <button type="submit" className="mt-4 w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500">Submit</button>
                </form>
              </section>
          </>
        )} 

          
            </>
    )
    
}


export default Homepage