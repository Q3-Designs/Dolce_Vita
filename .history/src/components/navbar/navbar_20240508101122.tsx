import React, {useState} from "react";



interface NavbarProps {
    links:{
        name:string,
        destination:string
    }[]
}


const Navbar: React.FC<NavbarProps> = ({links}) => {

    return (
        <nav className="fixed top-0 z-5 w-screen left-0 bg-blue-200
        w-[70px] ">
            slat

        </nav>
    )
}


export default Navbar