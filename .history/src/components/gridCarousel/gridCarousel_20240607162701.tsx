import { max } from '@tensorflow/tfjs'
import React from 'react'

interface CarouselItemProps {
    height:string,
    width:string,
    maxHeight:string,
    maxWidth:string,
    src:string,
    alt:string
    
}


const CarouselItem:React.FC<CarouselItemProps> = ({
    height,width,maxHeight,maxWidth,src,stri
}) => {


    return (
        <img className={`w-[${width}] h-[${height}]
        max-w-[${maxHeight}] max-h-[${maxWidth}]`}
    )

}