import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionTemplate, useMotionValue,
    animate } from "framer-motion";


interface links {
    links:{
        name:string,
        destination:string,
    }[]
    
    
}

// interface FooterLink {
//     title: string;
//     links: Link[];
// }

// interface FooterProps {
//     links: FooterLink[];
// }

const colors = [
    "#0080ff", // Slightly darker shade of blue
    "#00ccff", // Lighter shade of blue
    "#7f5af0", // Slight purple shade
    "#d8a5ff", // Lighter shade of the slight purple
  ];


const Footer:React.FC<links> = ({links}) => {

    const color = useMotionValue(colors[0])

    // const pColor = useMotionTemplate`${color}`

    const backgroundColor = useMotionTemplate`${color}`

    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

    const [hovered, setHovered] = useState(false)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }
    
            useEffect(()=> {
                animate(color, colors, {
                    ease: 'easeInOut',
                    duration:10,
                    repeat:Infinity,
                    repeatType: 'mirror'
    
               })
            },[])
    

  return (
    <>
    <footer className='w-[calc(100vw-5px)]
      relative mt-[8rem] 
  pb-12
      ml-auto mr-auto
      text-center
      bg-radial-gradient from-blue-700 to-blue-900
    '>
      <div className="
      pt-8
      w-[screen] md:w-[50vw] max-w-[700px] ml-auto mr-auto flex flex-col 
       ">
        <h2 className='
        text-4xl sm:text-5xl
        mb-4   bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent font-caveat'>
            Site Map
        </h2>
      
        {links.map((link,index) => (

<Link key={index}
to={link.destination} >



            <p className='mt-2 text-gray-500 hover:text-orange-400 md:text-xl hover:text-gold
            '>{link.name}</p>
            </Link>


        ))}
       
    

        
   
       
      </div>

      <section className='flex flex-col
       items-center justify-center
     '>


      <p className='mt-6
      sm:text-2xl text-gray-500 '>Dolce Vita Construction and management 2024</p>
      <Link 
            to='https://www.focusflowsoftware.com'
            >
                <motion.p
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
               
                style={{
                    boxShadow: hovered ? boxShadow : "none",
                    backgroundColor: hovered ? 'white' : "transparent",
                    color:backgroundColor,
                }}
                className='w-[200px] ml-auto mr-auto mb-5 mt-5 p-3 rounded-xl
                '   >
                Created by Focusflow Software
                </motion.p>
               
            </Link>
            </section>
    </footer>
   
    </>
  );
};

export default Footer;