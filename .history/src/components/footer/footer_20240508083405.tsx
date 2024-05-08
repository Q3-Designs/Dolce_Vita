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
    <footer className='w-[calc()] border'>
      <div className="
      w-screen">
      
        
       
      <div className="flex flex-col pt-5 ">
        {links.map((link,index) => (
          <Link to={link.destination}
          className='pb-4 text-white'
          key={index}>
            {link.name}
          </Link>
        ))}
        </div>
   
       
      </div>

      <p>Dolce Vita Construction and project management 2024</p>
    
    </footer>
  );
};

export default Footer;