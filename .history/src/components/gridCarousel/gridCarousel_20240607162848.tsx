import { max } from '@tensorflow/tfjs'
import React from 'react'

interface CarouselProps {
    images:{
        src:string,
        alt:string
    }[]
}

const GridCarousel:React.FC<CarouselProps> = ({images})