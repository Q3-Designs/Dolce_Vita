import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

interface Props {
    links:{
        dest:string,
        name:string
    }[]
}

const Footer:React.FC<Props> = ({links}) => {
  return (
    <footer>
      <div className="
      w-screen">
      
        
       
      <div className="flex flex-col">
        {links.map((link,index) => (
          <Link to={link.dest}
          className='link'
          key={index}>
            {link.name}
          </Link>
        ))}
        </div>
   
       
      </div>

      <p>Q3 Creations 2024</p>
    
    </footer>
  );
};

export default Footer;