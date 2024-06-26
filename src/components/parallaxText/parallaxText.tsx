import { ReactNode, useRef, useEffect, useState, memo } from "react";
import { motion, useScroll, useTransform, motionValue } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useGeneralContext } from '../../context/context';
import { Link } from "react-router-dom";

interface ParallaxTextProps {
  image: string;
  subheading: string;
  heading: string;
  destination: string;
  title: string;
  description: string[];
  hasDestination: boolean;
}



export const TextParallaxContentExample: React.FC<ParallaxTextProps> = memo(
  ({ image, subheading, heading, destination, title, description, hasDestination }) => {

    const {isMobile} = useGeneralContext()
    return (
     <>
        {!isMobile ? (

          <div className="relative w-screen">
        <TextParallaxContent imgUrl={image} subheading={subheading} heading={heading}>
          <TextExample1 destination={destination} title={title} description={description} hasDestination={hasDestination} />
        </TextParallaxContent>
        </div>
        ) : (
          <>
         <div className="mb-[6.5rem] mt-[8rem] flex flex-col items-center justify-center h-[60vw]">
         <h1 className=" relative ml-auto mr-auto text-4xl font-bold md:text-8xl bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent font-caveat">{heading}</h1>
         
          <img src={image}
          className=' relative w-[90vw] object-cover ml-auto mr-auto mb-4 h-[60vw]'/>
           
           </div>
          </>
        ) }
 </>
    );
  }
);

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children?: ReactNode;
}) => {
  return (
    <div>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = memo(({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const { textYPosition } = useGeneralContext();
  const motionTextYPosition = motionValue(textYPosition);

  const brightness = useTransform(motionTextYPosition, [0, -100], [0.2, 1]);

  const [imgBrightness, setImgBrightness] = useState(0.2);

  useEffect(() => {
    const unsubscribe = brightness.onChange(setImgBrightness);
    return () => unsubscribe();
  }, [brightness]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: '100vh',
        top: IMG_PADDING,
        scale,
        filter: `brightness(${imgBrightness})`,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden relative"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
});

const OverlayCopy = memo(({ subheading, heading }: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const { setTextYPosition } = useGeneralContext();

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  useEffect(() => {
    const unsubscribe = y.onChange(setTextYPosition);
    return () => unsubscribe();
  }, [y, setTextYPosition]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-3xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-5xl sm:text-7xl font-bold md:text-8xl bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent font-caveat">
        {heading}
      </p>
    </motion.div>
  );
});

interface TextExampleProps {
  destination: string;
  title: string;
  description: string[];
  hasDestination: boolean;
}

const TextExample1: React.FC<TextExampleProps> = memo(({ destination, title, description, hasDestination }) => {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 text-white">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        {title}
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          {description[0]}
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          {description[1]}
        </p>

        {hasDestination && (
          <Link to={destination}>
            <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
              Learn more <FiArrowUpRight className="inline" />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
});
