import React, { useState, useEffect } from "react";
import Link from 'react-router-dom';
interface HeroProps {
    images: string[];
}

const ImageHero: React.FC<HeroProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Calculate the index of the next image
            const nextImageIndex = (currentImageIndex + 1) % images.length;
            setCurrentImageIndex(nextImageIndex);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clear the interval on component unmount
    }, [currentImageIndex, images.length]);

    return (
        <header className="flex w-screen flex flex-col relative
        mt-10 sm:mt-5
        md:flex-row 
        pb-10">
            <div className="md:w-[50vw] relative
            md:flex md:flex-col md:justify-center md:items-center
            mb-8 text-center">

          <p className="mt-4 sm:text-xl pr-4 pl-4">A newly built home that has never been used before</p>
            <h1 className="text-4xl mb-4 mt-4 sm:text-6xl bg-gradient-to-b from-gray-400 to-white bg-clip-text text-transparent custom-glow">Pheasant Cove</h1>
            <p className="text-2xl mb-4 sm:text-3xl">Place address Here</p>
            <Link to='contact'  >

 
            <button className="bg-orange-400 p-3
            rounded-lg">
                Fill an application
            </button>
            </Link>
            </div>

            <div className="image-container h-[80vh] relative
            md:w-[50vw]">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index}`}
                        className={`w-full h-full top-0 object-cover
                         absolute  object-center opacity-0  transition-opacity 
                          duration-1000 ${index === currentImageIndex ? 'opacity-100' : ''}`}
                    />
                ))}
            </div>
        </header>
    );
};

export default ImageHero;