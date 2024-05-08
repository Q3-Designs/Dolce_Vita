import React, {useState} from "react";



interface NavbarProps {
    links:{
        name:string,
        destination:string
    }
}


const Navbar: React.FC<NavbarProps> = ({links}) => {

    return (
        <nav className="fixed top-0 w-screen bg-blue-200">

        </nav>
    )
}


export default Navbar