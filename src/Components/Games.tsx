"use client";
import { FC, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

// eslint-disable-next-line
interface GamesProps {}

const Games: FC<GamesProps> = ({}) => {
  const variants: any = {
    initial: (direction: number) => {
      return {
        x: direction > 0 ? 1250 : -1250,
      };
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? -1250 : 1250,
      };
    },
  };

  const GamesBg = [
    "/alabayAssets/alabayGames/alabay guard prev 2 1.png",
    "/alabayAssets/alabayGames/alabay lost heritage prev 1.png",
  ];
  const GamesPrev = [
    "/alabayAssets/alabayGames/artifacts 2.png",
    "/alabayAssets/alabayGames/Abilities 2.png",
    "/alabayAssets/alabayGames/image 3 alabay guard 2.png",
  ];

  const [activeItem, setActiveItem] = useState(0);
  const [direction, setDiection] = useState(0);
  const slider = useRef<any>(null);

  const handleScrollLeft = () => {
    setDiection(-1);
    setActiveItem((GamesBg.length + activeItem - 1) % GamesBg.length);
  };
  const handleScrollRight = () => {
    setActiveItem((activeItem + 1) % GamesBg.length);
    setDiection(1);
  };

  return (
    <div className="w-full h-[200vh] flex flex-col items-center relative overflow-hidden bg-white">
      <div className="absolute  w-[200%] h-[60%] -top-32 -left-24 -z-4  transform rotate-[8deg]">
        <div className="w-full h-full bg-radial-gradient from-[#FFF280] to-[#FFC700]"></div>
      </div>
      <div className="w-full h-[50vh] flex flex-col justify-center items-center z-10 relative">
        <p className="w-full h-1/2 text-4xl text-white text-center Cheeseburga text-[200px]">
          GAMES
        </p>
        <p className="w-full h-1/4 text-[50px] text-3xl text-center text-[#353535] font-extrabold">
          Stay tuned for upcoming games !
        </p>
      </div>
      <div className="w-full h-[75vh]  flex items-center justify-center">
        <div className="w-[75%] h-full relative flex justify-center ">
          <FaArrowLeft
            onClick={() => handleScrollLeft()}
            className="absolute z-10 left-0 top-1/2 bg-black rounded-3xl  p-4 h-16 w-12 my-auto hover:cursor-pointer"
            size={25}
            color="white"
          />
          <div
            ref={slider}
            className="w-full h-full  flex flex-nowrap overflow-hidden relative transition-transform ease-in-out duration-500"
          >
            {GamesBg.map((bg, id: any) => (
              <div
                key={id}
              >
                <AnimatePresence custom={direction} initial={false} >
                {activeItem === id  && (
                  <motion.img
                    key={id} 
                    variants={variants}
                    custom={direction}initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full h-full absolute  object-cover rounded-3xl"
                    transition={{ duration: 1, ease: "backInOut" }}
                    src={bg}
                  />
                )}
              </AnimatePresence>
                <div className="absolute w-1/4  h-[10%] -translate-y-2/4 -translate-x-2/4 bottom-10 left-2/4">
                  <motion.button
                    whileTap={{ scale: 0.5 }}
                    transition={{ duration: 0.5, ease: "backInOut" }}
                    className="w-full h-full bg-[#843AFC]   rounded-3xl"
                  >
                    <p className="text-white font-extrabold text-3xl w-full flex items-center justify-center h-full ">
                      Discover <span /> <FaArrowRight />
                    </p>
                  </motion.button>
                </div>
              </div>
            ))}
          </div>
          <FaArrowRight
            onClick={() => handleScrollRight()}
            className="absolute z-10 right-0 top-1/2 bg-black rounded-3xl p-4 h-16 w-12 my-auto hover:cursor-pointer"
            size={25}
            color="white"
          />
        </div>
      </div>

      <div className="w-4/5 h-[75vh] flex flex-col justify-around items-start ">
        <div className=" h-1/3 w-full">
          <p className="font-extrabold text-3xl w-full flex items-center justify-start h-full text-left text-[#353535] text-[50px]">
            Game <span className="text-[#FFA800]"> Previews</span>
          </p>
        </div>
        <div className="w-full h-4/5 flex justify-center relative">
          <FaArrowLeft
            className="absolute z-10 left-0 top-1/2 bg-black rounded-3xl p-4 h-16 w-12 my-auto hover:cursor-pointer"
            size={25}
            color="white"
          />
          <div className="w-full h-full flex flex-nowrap justify-around overflow-x-scroll scrollbar-hide scroll-smooth relative">
            {GamesPrev.map((bg, id: number) => (
              <div
                key={id.toString()}
                className="w-[24%] rounded-3xl h-full relative "
              >
                <div className=" w-full h-full ">
                  <Image src={bg} alt="" fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
          <FaArrowRight
            // onClick={() => handleScroll(1500)}
            className="absolute z-10 right-0 top-1/2 bg-black rounded-3xl p-4 h-16 w-12 my-auto hover:cursor-pointer"
            size={25}
            color="white"
          />
        </div>
      </div>
    </div>
  );
};

export default Games;
