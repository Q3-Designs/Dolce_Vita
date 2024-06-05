import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

import ravenna1 from '../../media/ravenna/ravenna2.webp';
import ravenna2 from '../../media/ravenna/ravenna1.webp';
import ravenna3 from '../../media/ravenna/ravenna22.webp';
import ravenna4 from '../../media/ravenna/ravenna17.webp';
import ravenna5 from '../../media/ravenna/ravenna11.webp';
import ravenna6 from '../../media/ravenna/ravenna21.webp';

// Imports for Grey Home images
import grey1 from '../../media/greyHome/grey-bed1.webp';
import grey2 from '../../media/greyHome/grey-home2.webp';
import grey3 from '../../media/greyHome/grey-home3.webp';
import grey4 from '../../media/greyHome/grey-home4.webp';
import grey5 from '../../media/greyHome/grey-home5.webp';

// Imports for White Home images
import white1 from '../../media/white/white-main.webp';
import white2 from '../../media/white/indoor1.webp';
import white3 from '../../media/white/indoor2.webp';
import white4 from '../../media/white/indoor3.webp';
import white5 from '../../media/white/indoor4.webp';



interface HeroProps {
    images:{
        src:string,
        alt:string
    }[]
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

          
            <h1 className="text-4xl mb-4 mt-4 sm:text-6xl bg-gradient-to-b from-gray-400 to-white bg-clip-text text-transparent custom-glow">
                Dolce Vita Construction
            </h1>
            <p className="mt-4 sm:text-xl pr-4 pl-4">Experience craftsmanship and personalized service as we bring your construction visions to life.</p>
            {/* <p className="text-2xl mb-4 sm:text-3xl">Place address Here</p> */}
            <Link to='contact'  >

 
            <button className="bg-orange-400 p-3
            rounded-lg">
                Book a consultation
            </button>
            </Link>
            </div>

            <div className=" h-[80vh] relative
            md:w-[50vw]">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
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