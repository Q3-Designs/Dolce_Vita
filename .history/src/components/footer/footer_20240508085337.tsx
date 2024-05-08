import React from 'react';
import { Link } from 'react-router-dom';


interface Props {
    links:{
        destination:string,
        name:string
    }[]
}

const Footer:React.FC<Props> = ({links}) => {
  return (
    <>
    <footer className='w-[calc(100vw-5px)] border relative
    '>
      <div className="flex justify-around
      w-screen">
      
        
       
      <div className="flex flex-col pt-5 justify-center
       items-center w-[150px] ">
        <h2 className='font-medium text-2xl mb-4 mr-4'>Our work</h2>
        {links.map((link,index) => (
            <ul className='text-left'>

            <li className='text-left  mb-4'>
          <Link to={link.destination}
          className='pb-4 text-white hover:text-red-200'
          key={index}>
            {link.name}
          </Link>
          </li>
          </ul>
        ))}
        </div>

        <div className="flex flex-col pt-5 justify-center items-center w-[100px] ">
        <h2 className='font-medium text-xl mb-4'>Our work</h2>
        {links.map((link,index) => (
            <ul className='text-left'>

            <li className='text-left mb-4'>
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