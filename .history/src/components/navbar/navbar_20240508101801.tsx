import React, {useState} from "react";



interface NavbarProps {
    links:{
        name:string,
        destination:string
    }[]
}


const Navbar: React.FC<NavbarProps> = ({links}) => {

    return (
        <nav className="fixed  top-0 z-20 w-screen left-0 bg-blue-200
        h-[100px] flex items-center justify-between ">
          <p>Dolce Vita</p>
          <div className="bg-red-200">
            <div className="h-[10px] bg-white w-[20px]"></div>
          </div>

        </nav>
    )
}


export default Navbar