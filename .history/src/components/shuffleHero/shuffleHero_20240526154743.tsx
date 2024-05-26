import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ravenna1 from '../../media/ravenna/ravenna2.webp'
import ravenna2 from '../../media/ravenna/ravenna1.webp'
import ravenna3 from '../../media/ravenna/ravenna22.webp'
import ravenna4 from '../../media/ravenna/ravenna17.webp'
import ravenna5 from '../../media/ravenna/ravenna11.webp'
import ravenna6 from '../../media/ravenna/ravenna21.webp'

import grey1 from '../../media/greyHome/grey-bed1.webp'
import grey2 from '../../media/greyHome/grey-home2.webp'
import grey3 from '../../media/greyHome/grey-home3.webp'
import grey4 from '../../media/greyHome/grey-home4.webp'
import grey5 from '../../media/greyHome/grey-home5.webp'

import white1 from '../../media/white/white-main.webp'
import white2 from '../../media/white/indoor1.webp'
import white3 from '../../media/white/indoor2.webp'
import white4 from '../../media/white/indoor3.webp'
import white5 from '../../media/white/indoor4.webp'
import { Link } from "react-router-dom";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        {/* <span className="block mb-4 text-xs md:text-sm text-white font-medium">
          Better every day
        </span> */}
        <h3 className="text-4xl md:text-6xl font-semibold text-white">
          Dolce Vita Construction
        </h3>
        <p className="text-base text-white md:text-lg text-slate-700 my-4 md:my-6">
        Experience craftsmanship and personalized service as we bring your construction visions to life.
        </p>
        <Link to='/boo'
        <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Transform Your Vision
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: ravenna1
  },
  {
    id: 2,
    src: ravenna2
  },
  {
    id: 3,
    src: ravenna3
  },
  {
    id: 4,
    src: ravenna4
  },
  {
    id: 5,
    src: ravenna5
  },
  {
    id: 6,
    src: ravenna6
  },
  {
    id: 7,
    src: grey1
  },
  {
    id: 8,
    src: grey2
  },
  {
    id: 9,
    src:grey3
  },
  {
    id: 10,
    src:grey4
  },
  {
    id: 11,
    src: grey5
  },
  {
    id: 12,
    src:white1
  },
  {
    id: 13,
    src:white2
  },
  {
    id: 14,
    src: white3
  },
  {
    id: 15,
    src: white4
  },
  {
    id: 16,
    src: white5
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      shuffleSquares();
    }, 3000);

    return () => clearTimeout(timeoutRef.current);
  }, [squares]);

  const shuffleSquares = () => {
    setSquares(generateSquares());
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;