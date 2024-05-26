import React, {useEffect} from "react"
import Content from "../content/content"

import home2 from '../../media/dv-home2.png'
import { text1,closerText,openingText,
text2,text3 } from "../../data/data"

import Footer from "../footer/footer"
import Navbar from "../navbar/navbar"
import ShuffleHero from "../shuffleHero/shuffleHero"

import Closer from "../closer/closer"
import dark from '../../media/ravenna/dark-ravenna.png'
import darkWhite from '../../media/white/dark-white.png'
import indoor3 from '../../media/white/indoor3.png'
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

        const {password, setPassword, passwordCorrect, setPasswordCorrect} = useGeneralContext()


        

    return (
        <>

        {passwordCorrect === true ? (

        )}

          
            </>
    )
    
}


export default Homepage