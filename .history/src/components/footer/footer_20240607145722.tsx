import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionTemplate, useMotionValue,
    animate } from "framer-motion";


interface Link {
    destination: string;
    name: string;
}

interface FooterLink {
    title: string;
    links: Link[];
}

interface FooterProps {
    links: FooterLink[];
}

const colors = [
    "#0080ff", // Slightly darker shade of blue
    "#00ccff", // Lighter shade of blue
    "#7f5af0", // Slight purple shade
    "#d8a5ff", // Lighter shade of the slight purple
  ];


const Footer:React.FC<FooterProps> = ({links}) => {

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
    <footer className='
    w-[calc(100vw-5px)] border relative
    text-gray-500
    '>
      <div className="flex justify-center
      w-screen text-center items-center
      ">
      
        {links.map((links,index) => (

<div key={index}
className="flex flex-col pt-5 justify-center 
items-center w-[200px] text-center md:text-left mb-auto">
 <h2 className='font-medium text-2xl mb-4  mr-auto ml-auto md:ml-0'>{links.title}</h2>
 {links.links.map((link,index) => (
     <ul className='mr-auto ml-auto md:ml-0'>

     <li className='  mb-4'>
   <Link to={link.destination}
   className='pb-4 text-gray-500 hover:text-red-200'
   key={index}>
     {link.name}
   </Link>
   </li>
   </ul>
 ))}
 </div>

        ))}
       
    

        
   
       
      </div>

      
      <p className='mt-6 text-center'>Dolce Vita Construction and project management 2024</p>
      <Link 
            to='https://q3designs.netlify.app'>
                <motion.p
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
               
                style={{
                    boxShadow: hovered ? boxShadow : "none",
                    backgroundColor: hovered ? 'rgb(0, 0, 30)' : "transparent",
                    color:backgroundColor,
                }}
                className='w-[200px] ml-auto mr-auto mb-5 mt-5'   >
                Created by Q3 Designs
                </motion.p>
               
            </Link>
    </footer>
   
    </>
  );
};

export default Footer;