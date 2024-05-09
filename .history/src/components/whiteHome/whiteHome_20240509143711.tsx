import React from "react";



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

import main from '../../media/white/white-main.png'
import { whiteHouseText1,listText1,whiteHouseText2 } from "../../data/data";
import HomeSection from "../homeSection/homeSection";
import Accordion from "../accordion/accordion";
import { TextParallaxContentExample } from "../parallaxText/parallaxText";
import grey1 from '../../media/greyHome/grey-home1.png'
import TextFormat from "../textFormat/textFormat";
import Content from "../content/content";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const WhiteHome: React.FC = () => {

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

    return (
        <>
        <Navbar
        links={navLinks}
        />
        <section className="absolute top-0 left-0 flex justify-center flex-col items-center w-screen">
            {/* <h2>We make awesome custom homes </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde sint alias porro ea natus error voluptatum, laudantium autem eius quod laboriosam eum totam rem? Consequatur cum nisi magni iste.</p> */}

            <TextParallaxContentExample
            image={main}
            heading='Our white  Home'
            subheading="It is very nice"
            destination="link"
            title='title'
            description={[
                'description'
            ]}
            hasDestination={false}/>


            <HomeSection
           {...whiteHouseText1}
            images={images2}


            />

            <HomeSection
           {...whiteHouseText2}
            images={images3}
            />

            <HomeSection
            

            {/* <HomeSection
            {...greyHomeText2}
            images={images3}
            /> */}

           <Content
           hasAnimation={true}
           image={grey1}
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

       
        </>
    )
}

export default WhiteHome