import React, {useEffect} from "react"
import Content from "../content/content"


import { text1,closerText,openingText,
text2,text3 } from "../../data/data"

import Footer from "../footer/footer"
import Navbar from "../navbar/navbar"


import Closer from "../closer/closer"
import dark from '../../media/ravenna/dark-ravenna.webp'
import darkWhite from '../../media/white/dark-white.webp'
import indoor3 from '../../media/white/indoor3.webp'
import commercial from '../../media/commercial/commercialMain.webp'




import grey3 from '../../media/greyHome/grey-home3.webp';

import ravenna1 from '../../media/ravenna/ravenna1.webp'

import indoor8 from '../../media/white/indoor8.webp'
import outdoor5 from '../../media/white/outdoor5.webp'
import indoor2 from '../../media/white/indoor2.webp'
import outdoor8 from '../../media/white/outdoor1.png'

// Imports for White Home images

import white3 from '../../media/white/indoor2.webp';
import video from '../../media/video.mp4'

// import { useGeneralContext } from "../../context/context"
import ImageHero from "../imageHero/imageHero"
import ScrollableCarousel from "../scrollableCarousel/scrollableCarousel"
// import triple from '../../media/triple-bay.jpeg'
import kdot from '../../media/white/outdoor1.png'
import sketch from '../../media/house-sketch.png'
const Homepage: React.FC = () => {

    const scrollables = [
     
        {
            src:sketch,
            alt:'A sketch of the previous white home'
        },
        {
            src:kdot,
            alt:'A wonderful outdoor picture of a big white home'
        },
        {
            src:ravenna1,
            alt:'The ravenna, one of our best projects'
        },
        // {
        //     src:triple,
        //     alt:'One of our newest listings, triple bay road'
        // },
        {
            src:indoor2,
            alt:'Indoor image 2'
        },
        {
            src:outdoor5,
            alt:'Outdoor image 5'
        },
       
        // {
        //     src:gray,
        //     alt:'gray home'
        // },
        {
            src:indoor8,
            alt: 'Outdoor image 8'
        }
    ]


    useEffect(()=> {
        window.scrollTo(0,0)
    },[])
    const workLinks = {
        title: 'Our Work',
        links: [
            {
                destination: 'custom-homes',
                name: 'Portfolio'
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
    
   

        const links = [
            {
                destination: 'custom-homes',
                name: 'Portfolio'
            },
            {
                destination: 'commercial-construction',
                name: 'Commercial Construction'
            },
            {
                name: 'Retail Homes',
                destination: 'retail-homes',
                
            },
            {
                destination:'contact',
                name:'Contact'
               }
        ]

        const navLinks = [
            ...workLinks.links,
           {
            destination:'contact',
            name:'Contact'
           }
        ]

        // const {password, setPassword, correctPassword, setCorrectPassword} = useGeneralContext()

        // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        //     event.preventDefault();
        //     if (password === 'clients2024') {
        //         setCorrectPassword(true);
        //     } else {
        //       alert('Incorrect password. Please try again.');
        //     }
        //   };
        
        //   const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //     setPassword(event.target.value);
        //   };


          const imagesArray = [
            { src: sketch, alt: 'Ravenna 3' },
            { src: kdot, alt: 'Ravenna 4' },
            { src: ravenna1, alt: 'Ravenna 5' },
            { src: white3, alt: 'White Home 3' },
            { src: grey3, alt: 'Gray home 3'}
           
        ]


        

    return (
        <>

       
            <>
 <Navbar
 links={navLinks}
 />
<section className="absolute top-20 left-0 w-screen overflow-x-hidden
bg-main-color ">

<ImageHero
images={imagesArray}/>

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
     image={outdoor8}
    {...text2}
     customText={false}
     reverse={false}
    
     floatingImage={false}
     hasAnimation={true}
   
     />

     {/* <h1 className="text-center">
        We get to work
     </h1> */}
     <section className="flex flex-col justify-center items-center">
     <h1 className="

bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent font-caveat
leading-tight ml-auto mr-auto mb-5 md:text-6xl">
 Contemporary
</h1>


<iframe className="ml-auto mr-auto rounded-lg w-[90vw] h-[50vw] max-w-[950px] max-h-[650px] mb-[4rem] "
 src="https://www.youtube.com/embed/gzKfRibY-6Y?si=uoTjYfaaLvHlLM0N" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
     </section>
<section className="flex flex-col justify-center items-center" >
 <h1 className="

           bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent font-caveat
           leading-tight ml-auto mr-auto mb-5 md:text-6xl">
            Elegance
 </h1>


<iframe className="ml-auto mr-auto rounded-lg w-[90vw] h-[50vw] max-w-[950px] max-h-[650px] mb-[4rem]" src="https://www.youtube.com/embed/5eK7zecheEM?si=5jh1cUOCJ9P92cr6&amp;start=5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</section>

<section className="flex flex-col justify-center items-center" >
<h1 className="
md:text-6xl
           bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent font-caveat
           leading-tight ml-auto mr-auto mb-5">
            Traditional fusion
 </h1>

 <video controls
 className="ml-auto mr-auto rounded-lg w-[90vw] h-[50vw] max-w-[950px] max-h-[650px]">
    <source src={video} type='video/mp4'/>
 </video>
 </section>

     <ScrollableCarousel
     images={scrollables}
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
      {/* ) : (
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
        )}  */}

          
            </>
    )
    
}


export default Homepage