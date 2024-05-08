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
      
        
       
      <div className="flex flex-col pt-5 justify-center 
       items-center w-[200px] text-left">
        <h2 className='font-medium text-2xl mb-4 mr-4'>Our work</h2>
        {links.map((link,index) => (
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

        <div className="flex flex-col pt-5 justify-center 
       items-center w-[200px] text-left">
        <h2 className='font-medium text-2xl mb-4 mr-4'>title</h2>
        {links.map((link,index) => (
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
   
       
      </div>

      
      <p className='mt-6'>Dolce Vita Construction and project management 2024</p>
    </footer>
   
    </>
  );
};

export default Footer;