import React from 'react'

interface CarouselItemProps {
    height:string,
    width:string,
    maxHeight:string,
    maxWidth:string,
    
}


const CarouselItem:React.FC<CarouselItemProps> = ({}) => {


    return (
        <img className={`w-[${width}]`}
    )

}