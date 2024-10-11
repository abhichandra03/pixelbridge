"use client";
import { FC, useRef } from "react";
import { motion } from "framer-motion";
import BG from "./BG";
import MainPage from "./MainPage";

interface ParentProps {}

const Parent: FC<ParentProps> = ({}) => {
  const section1 = useRef(null);
  const section2 = useRef(null);


  return (
    <div  className="w-full h-screen overflow-x-scroll relative scrollbar-hide">
      <BG />
      <div className="w-full h-full  scrollbar-hide">
        <div className="w-full h-full flex flex-col items-center justify-between scroll-smooth ">
          <div ref={section1} className="w-full min-h-[95vh] h-full" />
          <div ref={section2} className="w-full h-full flex justify-center ">
            <MainPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parent;
