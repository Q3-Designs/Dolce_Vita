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
import { listText3 } from "../../data/data";
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
            title:'Ravenna 2',
            description:'',
            link:''
        },
        {
            url:ravenna9,
            title:'Ravenna 2',
            description:'',
            link:''
        },
        {
            url:ravenna10,
            title:'Ravenna 2',
            description:'',
            link:''
        },
        {
            url:ravenna11,
            title:'Ravenna 2',
            description:'',
            link:''
        },
        {
            url:ravenna12,
            title:'Ravenna 2',
            description:'',
            link:''
        },
        {
            url:ravenna13,
            title:'Ravenna 2',
            description:'',
            link:''
        },
        {
            url:ravenna14,
            title:'Ravenna 2',
            description:'',
            link:''
        },
       
    ]

   

    const greyImages = [
        {
            url: grey2,
            title: 'Grey 2',
            description: '',
            link: ''
        },
        {
            url: grey3,
            title: 'Grey 3',
            description: '',
            link: ''
        },
        {
            url: grey4,
            title: 'Grey 4',
            description: '',
            link: ''
        },
        {
            url: grey5,
            title: 'Grey 5',
            description: '',
            link: ''
        },
    
    ];
    
    const images2 = [
        {
            url: outdoor1,
            title: 'Outdoor image 1',
            description: '',
            link: ''
        },
        {
            url: outdoor2,
            title: 'Outdoor image 2',
            description: '',
            link: ''
        },
        {
            url: outdoor3,
            title: 'Outdoor image 3',
            description: '',
            link: ''
        },
        {
            url: outdoor4,
            title: 'Outdoor image 4',
            description: '',
            link: ''
        },
        {
            url: outdoor5,
            title: 'Outdoor image 5',
            description: '',
            link: ''
        },
        {
            url: outdoor6,
            title: 'Outdoor image 6',
            description: '',
            link: ''
        },
    ];
    
    const images3 = [
        {
            url: indoor1,
            title: 'Indoor image 1',
            description: '',
            link: ''
        },
        {
            url: indoor2,
            title: 'Indoor image 2',
            description: '',
            link: ''
        },
        {
            url: indoor3,
            title: 'Indoor image 3',
            description: '',
            link: ''
        },
        {
            url: indoor4,
            title: 'Indoor image 4',
            description: '',
            link: ''
        },
        {
            url: indoor5,
            title: 'Indoor image 5',
            description: '',
            link: ''
        },
        {
            url: indoor6,
            title: 'Indoor image 6',
            description: '',
            link: ''
        },
        {
            url: indoor7,
            title: 'Indoor image 7',
            description: '',
            link: ''
        },
        {
            url: indoor8,
            title: 'Indoor image 8',
            description: '',
            link: ''
        },
    ];
    

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
    
  

        const links = [
            {
                destination:'/',
                name:'Homepage'
            },
            {
                destination: 'contact',
                name: 'Contact us'
            },
            {
                destination: '/retail-homes',
                name: 'Retail Homes'
            },
            {
                destination: '/commercial-construction',
                name: 'Commercial Construction'
            }
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
        {correctPassword === false ? (

       <>
        <Navbar
        links={navLinks}
        />
        <section className="absolute top-0 left-0 w-screen 
        bg-main-color ">
            {/* <h2>We make awesome custom homes </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde sint alias porro ea natus error voluptatum, laudantium autem eius quod laboriosam eum totam rem? Consequatur cum nisi magni iste.</p> */}

<div className="mb-[-5rem]">
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
</div>

<HomeSection
images={backyardImages}
title='Our outdoor work'
description="Discover our exceptional outdoor projects, featuring stunning landscapes, patios, and beautiful garden designs."
/>

          <HomeSection
images={greyImages}
title='Our interior work'
description="Explore our beautiful interior designs, showcasing modern, cozy spaces perfect for any home"
/>  

<HomeSection
images={images2}
title=''
description=""
/>  


<HomeSection
images={images3}
title='Modern and welcoming'
description="Explore our stunning collection of modern interiors, showcasing stylish, welcoming, and beautifully designed homes."
/>  

         

            
            <article className="mt-[12rem]">

       
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
     </article>

           
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