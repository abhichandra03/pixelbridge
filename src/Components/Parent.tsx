"use client";
import { FC, useRef } from "react";
import BG from "./BG";
import MainPage from "./MainPage";

interface ParentProps {}

const Parent: FC<ParentProps> = ({}) => {


  return (
    <div  className="w-full h-screen overflow-x-scroll relative scrollbar-hide">
      <BG />
      <div className="w-full h-full  scrollbar-hide">
        <div className="w-full h-full flex flex-col items-center justify-between scroll-smooth ">
          <div  className="w-full min-h-[95vh] h-full" />
          <div  className="w-full h-full flex justify-center ">
            <MainPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parent;
