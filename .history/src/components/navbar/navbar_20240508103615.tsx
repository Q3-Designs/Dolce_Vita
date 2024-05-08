import React, {useState} from "react";
import { Link } from "react-router-dom";



interface NavbarProps {
    links:{
        name:string,
        destination:string
    }[]
}


const Navbar: React.FC<NavbarProps> = ({links}) => {

    const [subMenuClicked, setSubMenuClicked] = useState(false)

    function handleSubmenuClick(){
        setSubMenuClicked(!subMenuClicked)
    }

    return (
        <nav className="fixed top-0 z-20 w-screen left-0 bg-blue-200
        h-[100px] flex justify-between items-center ">
       

 
          <p className="ml-2">Dolce Vita</p>
          <div className="mr-[8rem] flex flex-col justify-center items-center"
          onClick={handleSubmenuClick}>
            <div className="h-[3px] bg-white w-[20px] mb-1"/>
            <div className="h-[3px] bg-white w-[20px] mb-1"/>
            <div className="h-[3px] bg-white w-[20px]"/>
            <ul className={`text-left bg-blue-300 fixed top-[15%]
            right-[5%] overflow-hidden transition-[height] ${subMenuClicked ? 'h-[100px]' : 'h-[0px]'}
        `}>
            {links.map((link,index) => (
               <Link key={index}
                to={link.destination}>
                <li className="text-xs mb-2">
                    {link.name}
                </li>
               </Link> 
            ))}
           </ul>
          </div>
          
   
        </nav>
    )
}


export default Navbar