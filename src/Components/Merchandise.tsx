"use client";
import Image from "next/image";
import { FC, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// eslint-disable-next-line
interface MerchandiseProps {}

const Merchandise: FC<MerchandiseProps> = ({}) => {
  const slider = useRef<any>(null);
  const [activeItem, setActiveItem] = useState<any>(0);
  const [direction, setDirection] = useState(0)



  
  const MerchBg = [
    "/alabayAssets/alabayMerch/black hoodie bck.png",
    "/alabayAssets/alabayMerch/blue cap bck.png",
    "/alabayAssets/alabayMerch/pink tee bck.png",
    "/alabayAssets/alabayMerch/yellow tee bck.png",
  ];
  const Merch = [
    "/alabayAssets/alabayMerch/black hoodie.png",
    "/alabayAssets/alabayMerch/cap mockup.png",
    "/alabayAssets/alabayMerch/pink tshirt.png",
    "/alabayAssets/alabayMerch/yellow tshirt.png",
  ];
  
  const variants:any = {
    initial:(direction: number)=>{
      return{
        x: direction>0 ? 800:-800
      }
    },
    animate:{
      x:0,
      opacity:1
    },
    exit:(direction: number)=>{
      return{
        x: direction>0 ? -800:800
      }
    },
  }

  const handleScrollLeft = () => {
    setDirection(-1)
    setActiveItem((MerchBg.length + activeItem - 1) % MerchBg.length);
  };
  const handleScrollRight = () => {
    setDirection(1)
    setActiveItem((activeItem + 1) % MerchBg.length);
  };


  return (
    <div className="w-full h-[130vh] flex flex-col justify-center items-center relative overflow-hidden bg-white">
      
      <div className="absolute w-[150%] h-[40%] -bottom-40 -left-24  transform -rotate-[8deg]">
        <div className="w-full h-full bg-yellow-400"></div>
      </div>
      
      <div className="w-full h-1/3">
        <p className="Cheeseburga text-[#FFA800] text-[150px] text-center">Merchandise</p>
      </div>
      <div className="w-[75%]  h-full relative flex  justify-center ">
        <FaArrowLeft
          onClick={() => handleScrollLeft()}
          className="absolute z-10  top-1/2 left-0 transform -translate-x-0 -translate-y-1/2 bg-black rounded-3xl p-4 h-16 w-12 my-auto hover:cursor-pointer"
          size={25}
          color="white"
        />
        <div
          ref={slider}
          className="w-[80%] h-[90%] rounded-3xl flex flex-nowrap transition-transform ease-in-out duration-500"
        >
          {MerchBg.map((bg, id: any) => (
            <AnimatePresence key={id}>
            <div
              key={id}
              className={
                activeItem == id
                  ? `w-full h-full relative overflow-hidden rounded-3xl transition-all duration-500 ease-in-out`
                  : `hidden`
              }
            >
                <motion.div
                  
                  className="w-full h-full absolute"
                  initial={{ opacity: activeItem == id ? 0.8 : 1 }}
                  animate={{ opacity: activeItem == id ? 1 : 0.5 }}
                  exit={{ opacity: activeItem == id ? -0.5 : 1 }}
                  transition={{ duration: 1, ease: "backInOut" }}
                >
                  <Image
                    src={bg}
                    alt=""
                    fill
                    loading="eager"
                    className="object-cover rounded-3xl"
                  />
                </motion.div>

                {Merch.map((img, idx) => (
                <AnimatePresence key={id} initial={false} custom={direction}>

                 {activeItem==idx && <motion.img
                  
                  key={idx}
                  variants={variants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  custom={direction}
                  transition={{ duration: 1, ease: "backInOut" }}
                  src={img}
                  className="h-full z-10 absolute object-cover "
                  />}
                  </AnimatePresence>
                  )
                  )
                  }
            </div>
              </AnimatePresence>
          ))}
        </div>
        <FaArrowRight
          onClick={() => handleScrollRight()}
          className="absolute z-10  top-1/2 right-0 transform -translate-x-0 -translate-y-1/2 bg-black rounded-3xl p-4 h-16 w-12 my-auto hover:cursor-pointer"
          size={25}
          color="white"
        />
      </div>
      <div className="absolute w-[120%] h-[35%] -bottom-32 -left-24 -z-10  transform -rotate-[8deg]">
        <div className="w-full h-full bg-yellow-400"></div>
      </div>
    </div>
  );
};

export default Merchandise;
