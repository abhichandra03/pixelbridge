import Image from "next/image";
import { FC } from "react";

interface RoadMapProps {}

const RoadMap: FC<RoadMapProps> = ({}) => {
  return (
    <div className="w-full h-[120vh] bg-white  relative flex flex-col justify-around items-start overflow-hidden">
      <div className="absolute w-[200%] h-[60%] -top-32 -left-24   transform rotate-[8deg]     ">
        <div className="w-full h-full bg-radial-gradient from-[#FFF280] to-[#FFC700]"/>
      </div>
      <div className="-z-4 absolute w-1/2 h-[90%] -translate-y-2/4 right-0 top-2/4 ">
        <div className="relative w-full h-3/4 ">
          <Image
            src="/alabayAssets/DALL·E 2024-07-14 21.37.17 - A 3D cartoon illustration of a very happy furry Central Asian Shepherd dog in explorer attire, standing at a crossroads and holding a map with a yello 2.png"
            alt=""
            fill
            className="w-full h-full  z-10 drop-shadow-[0px_60px_20px_rgba(0,0,0,0.5)]"
          />
        </div>
        <div className="relative w-full h-1/4 mask-linear mask-from-0 mask-via-40">
          <Image
            src="/alabayAssets/DALL·E 2024-07-14 21.37.17 - A 3D cartoon illustration of a very happy furry Central Asian Shepherd dog in explorer attire, standing at a crossroads and holding a map with a yello 2.png"
            alt=""
            fill
            className="w-full h-full rotate-180 scale-x-[-1] object-cover object-bottom z-10 opacity-100 drop-shadow-[20px_80px_20px_rgba(0,0,0,1)] mask-linear  mask-dir-to-t"
          />

        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-around ">

      <div className="w-1/2 h-1/3 flex justify-center z-10">
        <p className="text-white h-full w-full text-center Cheeseburga text-[150px]">Road Map</p>
      </div>
      <div className="w-1/2 h-1/2 flex justify-center items-center">
        <p className="text-black text-3xl font-bold w-[80%] h-full">
          Our journey is just beginning. Explore our roadmap to see the exciting
          milestones and future plans we have in store.{" "}
          <br/>
          <br/>
          <br/>
          <span className="text-yellow-600">
            Join us as we grow and achieve new heights.
          </span>
        </p>
      </div>
      </div>
    </div>
  );
};

export default RoadMap;
