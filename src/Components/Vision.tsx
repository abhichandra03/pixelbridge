import Image from "next/image";
import { FC } from "react";

interface VisionProps {}

const Vision: FC<VisionProps> = ({}) => {
  return (
    <div className="w-full h-[120vh] relative overflow-hidden  flex flex-col justify-center items-center bg-white">
      <div className="absolute w-[200%] h-[80%] -bottom-32 -left-24   transform -rotate-[8deg] transition duration-300 ">
        <div className="w-full h-full bg-radial-gradient from-[#FFF280] to-[#FFC700]"/>
      </div>
      <div className="absolute  w-5/6 h-3/4 -translate-x-2/4 -translate-y-2/4 left-2/4 top-[55%] ">
        <div className="relative w-full h-3/4 ">
          <Image
            src="/alabayAssets/DALL·E 2024-07-14 20.01.25 - A wide 3D cartoon illustration of a group of furry Central Asian Shepherd dog friends. The dogs should have joyful expressions with wide smiles, ears_ 2.png"
            alt=""
            fill
            className="w-full h-full  z-10 drop-shadow-[0px_60px_20px_rgba(0,0,0,0.5)]"
          />
        </div>
        <div className="relative w-full h-1/4 mask-linear mask-from-0 mask-via-40">
          <Image
            src="/alabayAssets/DALL·E 2024-07-14 20.01.25 - A wide 3D cartoon illustration of a group of furry Central Asian Shepherd dog friends. The dogs should have joyful expressions with wide smiles, ears_ 2.png"
            alt=""
            fill
            className="w-full h-full rotate-180 scale-x-[-1] object-cover object-bottom z-10 opacity-100 drop-shadow-[20px_80px_20px_rgba(0,0,0,1)] mask-linear  mask-dir-to-t"
          />

        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-between items-center z-10 ">

      <div className="w-full h-[220px]  text-center relative whitespace-normal">
        <p className="text-[150px] h-full w-full Cheeseburga font-bold text-[#FFA800]">Project Vision</p>
      </div>
      <div className="flex justify-center w-5/6 h-1/4 p-8 text whitespace-break-spaces">
        <p className="h-full font-bold text-[#353535] text-[30px] text-center Kumbhsans">
          Our mission is to honor the heritage of the Alabay by creating a
          vibrant, loyal, and powerful community. Just as the Alabay protects
          its flock, we aim to build a pack that stands strong together.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Vision;
