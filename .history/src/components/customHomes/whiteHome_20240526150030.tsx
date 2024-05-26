import React, { useEffect, FormEvent } from "react";
import { useGeneralContext } from "../../context/context";


import outdoor1 from '../../media/white/outdoor1.png'
import outdoor2 from '../../media/white/outdoor2.png'
import outdoor3 from '../../media/white/outdoor3.png'
import outdoor4 from '../../media/white/outdoor4.png'
import outdoor5 from '../../media/white/outdoor5.png'
import outdoor6 from '../../media/white/outdoor6.png'

import indoor1 from '../../media/white/indoor1.png'
import indoor2 from '../../media/white/indoor2.png'
import indoor3 from '../../media/white/indoor3.png'
import indoor4 from '../../media/white/indoor4.png'
import indoor5 from '../../media/white/indoor5.png'
import indoor6 from '../../media/white/indoor6.png'
import indoor7 from '../../media/white/indoor7.png'
import indoor8 from '../../media/white/indoor8.png'

import ravenna8 from '../../media/ravenna/ravenna8.png'
import ravenna9 from '../../media/ravenna/ravenna9.png'
import ravenna10 from '../../media/ravenna/ravenna10.png'
import ravenna11 from '../../media/ravenna/ravenna11.png'
import ravenna12 from '../../media/ravenna/ravenna12.png'
import ravenna13 from '../../media/ravenna/ravenna13.png'
import ravenna14 from '../../media/ravenna/ravenna14.png'


import grey2 from '../../media/greyHome/grey-home2.png'
import grey3 from '../../media/greyHome/grey-home3.png'
import grey4 from '../../media/greyHome/grey-home4.png'
import grey5 from '../../media/greyHome/grey-home5.png'
// import bed1 from '../../media/greyHome/grey-bed1.png'
// import bed2 from '../../media/greyHome/grey-bed2.png'
// import bath1 from '../../media/greyHome/grey-bathroom1.png'
// import bath2 from '../../media/greyHome/grey-bathroom2.png'

import main from '../../media/white/white-main.png'
import { whiteHouseText1,whiteHouseText2,listText3 } from "../../data/data";
import HomeSection from "../homeSection/homeSection";
import Accordion from "../accordion/accordion";
import { TextParallaxContentExample } from "../parallaxText/parallaxText";
import grey1 from '../../media/greyHome/grey-home1.png'
// import TextFormat from "../textFormat/textFormat";
import Content from "../content/content";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const WhiteHome: React.FC = () => {

    useEffect(()=> {
        window.scrollTo(0,0)
    },[])

     const backyardImages = [
        {
            url:ravenna8,
            alt:'Ravenna 2'
        },
        {
            url:ravenna9,
            alt:'Ravenna 2'
        },
        {
            url:ravenna10,
            alt:'Ravenna 2'
        },
        {
            url:ravenna11,
            alt:'Ravenna 2'
        },
        {
            url:ravenna12,
            alt:'Ravenna 2'
        },
        {
            url:ravenna13,
            alt:'Ravenna 2'
        },
        {
            url:ravenna14,
            alt:'Ravenna 2'
        },
        // {
        //     url:ravenna15,
        //     alt:'Ravenna 2'
        // },
    ]

    const greyImages = [
        {
            url:grey2,
            alt:'grey2'
        },
        {
            url:grey3,
            alt:'grey3'
        },
        {
            url:grey4,
            alt:'grey4'
        },
        {
            url:grey5,
            alt:'grey5'
        },
        {
            url:grey5,
            alt:'grey6'
        },
        {
            url:grey5,
            alt:'grey7'
        },
    ]
    

    const images2 = [
        {
            url:outdoor1,
            alt:'Outdoor image 1'
        },
        {
            url:outdoor2,
            alt:'Outdoor image 2'
        },
        {
            url:outdoor3,
            alt:'Outdoor image 3'
        },
        {
            url:outdoor4,
            alt:'Outdoor image 4'
        },
        {
            url:outdoor5,
            alt:'Outdoor image 5'
        },
        {
            url:outdoor6,
            alt:'Outdoor image 6'
        },
        ...backyardImages
        
    ]

    const images3 = [
      {
        url:indoor1,
        alt:'Indoor image 1'
      },
      {
        url:indoor2,
        alt:'Indoor image 2'
      },
      {
        url:indoor3,
        alt:'Indoor image 3'
      },
      {
        url:indoor4,
        alt:'Indoor image 4'
      },
      {
        url:indoor5,
        alt:'Indoor image 5'
      },
      {
        url:indoor6,
        alt:'Indoor image 6'
      },
      {
        url:indoor7,
        alt:'Indoor image 7'
      },
      {
        url:indoor8,
        alt:'Indoor image 8'
      },
      ...greyImages



    ]

    // const images3 = [
    //     {
    //         url:bed1,
    //         alt:'bed 1'
    //     },
    //     {
    //         url:bed2,
    //         alt:'bed 2'
    //     },
    //     {
    //         url:bath1,
    //         alt:'bath 1'
    //     },
    //     {
    //         url:bath2,
    //         alt:'bath 1'
    //     }
    // ]

    const workLinks = {
        title: 'Our Work',
        links: [
          
            {
                destination: '/retail-homes',
                name: 'Retail Homes'
            },
            {
                destination: '/commercial-construction',
                name: 'Commercial Construction'
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
        {correctPassword === true ? (

       <>
        <Navbar
        links={navLinks}
        />
        <section className="absolute top-0 left-0 flex justify-center flex-col items-center w-screen
        bg-main-color">
            {/* <h2>We make awesome custom homes </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde sint alias porro ea natus error voluptatum, laudantium autem eius quod laboriosam eum totam rem? Consequatur cum nisi magni iste.</p> */}

            <TextParallaxContentExample
            image={main}
            heading='Our Homes'
            subheading=""
            destination="link"
            title=''
            description={[
                ''
            ]}
            hasDestination={false}/>


            <HomeSection
           {...whiteHouseText1}
            images={[...images2, ...images3]}


            />

            <HomeSection
           {...whiteHouseText2}
            images={images3}
            />

            {/* <HomeSection
            {...whiteHouseText2}
            images={backyardImages}
            /> */}

            

           <Content
           hasAnimation={true}
           image={grey1}
           customText={ <Accordion
            text={listText3}
            hasIntro={true}
            intro='Ready to work'
            description='Experience our innovation, project diversity, and dedication to sustainable solutions.'
            />}

    />


           
<Footer
        links={links}
        />
        </section>

        </>
         ) : (
            <>
            <section className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 p-8 rounded-md shadow-md`
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

export default WhiteHome