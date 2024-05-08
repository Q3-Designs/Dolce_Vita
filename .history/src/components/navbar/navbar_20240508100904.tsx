import React, {useState} from "react";



interface NavbarProps {
    links:{
        name:string,
        destination:string
    }
}


const Navbar: React.FC<NavbarProps