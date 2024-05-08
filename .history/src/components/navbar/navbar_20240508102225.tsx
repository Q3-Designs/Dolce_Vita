import React, {useState} from "react";



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
        <nav className="fixed  top-0 z-20 w-screen left-0 bg-blue-200
        h-[100px] flex items-center justify-between ">
          <p className="ml-2">Dolce Vita</p>
          <div className="mr-2"
          onClick={se}>
            <div className="h-[3px] bg-white w-[20px] mb-1"/>
            <div className="h-[3px] bg-white w-[20px] mb-1"/>
            <div className="h-[3px] bg-white w-[20px]"/>
          </div>

        </nav>
    )
}


export default Navbar