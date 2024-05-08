import React, {useState} from "react";



interface NavbarProps {
    links:{
        name:string,
        destination:string
    }
}


const Navbar: React.FC<NavbarProps> = ({links}) => {

    return (
        <nav className="fixed top-0 w-screen bg-blue-200
        w-[70px]">

        </nav>
    )
}


export default Navbar