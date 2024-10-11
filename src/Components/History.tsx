import Image from "next/image";
import { FC } from "react";

// eslint-disable-next-line
interface HistoryProps {}

const History: FC<HistoryProps> = ({}) => {
  return (
    <div className=" relative w-full h-[100vh] rounded-t-[30px] flex justify-end overflow-hidden bg-white">
        <div className=" absolute w-[200%] h-[110%] -top-32 -left-24   transform rotate-[8deg] transition duration-300">
            <div className="w-full h-full bg-radial-gradient from-[#FFF280] to-[#FFC700]"/>
        </div>
      <div className="absolute left-0 w-1/2 h-full ">
        <div className=" w-full h-3/4 flex justify-end items-end">
          <Image
            src={
              "/alabayAssets/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png"
            }
            fill
            alt="picture"
            className="object-contain drop-shadow-[0px_60px_20px_rgba(0,0,0,0.5)]"
          />
        </div>
        <div className="relative w-full z-10  h-1/4 mask-linear mask-from-0 mask-via-20">
          <Image
            src="/alabayAssets/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png"
            alt=""
            fill
            className="w-full h-full rotate-180 scale-x-[-1] object-cover object-bottom z-10 opacity-100 drop-shadow-[0px_40px_20px_rgba(0,0,0,1)] mask-linear  mask-dir-to-b"
          />

        </div>
      </div>
      <div className="w-1/2 z-10 h-full flex flex-col justify-center items-end pt-20">
        <div className="w-full h-1/2  flex justify-center items-center">
          <p className="w-full font-black   text-[#F76902D1]/[0.82] text-[100px] Mont  p-20 text-right">
            History of<br/><span className="Cheeseburga text-[220px] text-white font-semibold">Alabay</span>
          </p>
        </div>
        <div className="w-full h-1/2 ">
            <p className="w-full text-[#353535] text-4xl font-bold kumbh p-20 text-right">The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
        </div>
      </div>
    </div>
  );
};

export default History;
