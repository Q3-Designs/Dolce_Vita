import React from 'react';
import { Link } from 'react-router-dom';


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


const Footer:React.FC<FooterProps> = ({links}) => {
  return (
    <>
    <footer className='w-[calc(100vw-5px)] border relative
    '>
      <div className="flex justify-around
      w-screen">
      
        {links.map((links,index) => (

        ))}
       
    

        
   
       
      </div>

      
      <p className='mt-6'>Dolce Vita Construction and project management 2024</p>
    </footer>
   
    </>
  );
};

export default Footer;