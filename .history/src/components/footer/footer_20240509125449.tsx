import React, {useEffect} from 'react';
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

    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`
    
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
    <footer className='w-[calc(100vw-5px)] border relative
    '>
      <div className="flex justify-around
      w-screen">
      
        {links.map((links,index) => (

<div key={index}
className="flex flex-col pt-5 justify-center 
items-center w-[200px] text-left mb-auto">
 <h2 className='font-medium text-2xl mb-4  mr-auto'>{links.title}</h2>
 {links.links.map((link,index) => (
     <ul className='mr-auto'>

     <li className='  mb-4'>
   <Link to={link.destination}
   className='pb-4 text-white hover:text-red-200'
   key={index}>
     {link.name}
   </Link>
   </li>
   </ul>
 ))}
 </div>

        ))}
       
    

        
   
       
      </div>

      
      <p className='mt-6'>Dolce Vita Construction and project management 2024</p>
      <Link to='https://q3designs.netlify.app'>


<motion.button
whileHover={{
    scale:1.015
}}
whileTap={{
    scale: 0.985
}}
style={{
    border,
    boxShadow
}}
className>
   Powered by Q3 Designs
</motion.button>
</Link>
    </footer>
   
    </>
  );
};

export default Footer;