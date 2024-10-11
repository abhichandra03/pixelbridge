import { FC } from "react";
import Image from "next/image";

interface TokenomicsProps {}

const Tokenomics: FC<TokenomicsProps> = ({}) => {
  return (
    <div className="w=full h-[140vh] relative overflow-hidden bg-white">
      <div className="absolute w-[200%] h-[100%] -top-32 -left-24  transform rotate-[8deg]     ">
        <div className="w-full h-full bg-radial-gradient from-[#FFF280] to-[#FFC700]"/>
      </div>

      <div className="w-full h-[100vh] flex flex-col justify-center  items-start ">
        <div className="text-white w-1/2 h-1/3 font-extrabold flex justify-center z-10 items-center  ">
          <p className="text-center Cheeseburga text-[130px]">TOKENOMICS</p>
        </div>
          <div className="flex flex-col  justify-around w-1/2 h-full  text-white items-center z-10">
            <div className="w-3/4 h-1/4 bg-[#353535] rounded-3xl">
              <p className="p-8 text-left text-3xl font-bold">
                Liquidity <br />{" "}
                <span className="text-[#FFF280] font-extrabold text-4xl">
                  Locked
                </span>
              </p>
            </div>
            <div className="w-3/4 h-1/4 bg-[#353535] rounded-3xl">
              <p className="p-8 text-left text-3xl font-bold">
                Contract
                <br />{" "}
                <span className="text-[#FFF280] font-extrabold text-4xl">
                  Renounced
                </span>
              </p>
            </div>
            <div className="w-3/4 h-1/4 bg-[#353535] rounded-3xl">
              <p className="p-8 text-left text-3xl font-bold">
                Taxes
                <br />{" "}
                <span className="text-[#FFF280] font-extrabold text-4xl">
                  0%
                </span>
              </p>
            </div>
          </div>
      </div>
        <div className="z-4 absolute w-1/2 h-[100vh] -translate-y-2/4 right-0 top-2/4 flex flex-col justify-center items-start">
        <div className="relative w-full h-full ">
          <Image
          src='/alabayAssets/DALL·E 2024-07-23 00.50.44 - A 3D cartoon illustration of a furry Central Asian Shepherd Alabay dog with big eyes, wearing a cap with a dollar logo on its head and counting money_ 1.png'
            alt=""
            fill
            className="w-full h-full  z-10 ]"
          />
        </div>
        <div className="relative w-full h-1/4 ">
          <Image
          src='/alabayAssets/DALL·E 2024-07-23 00.50.44 - A 3D cartoon illustration of a furry Central Asian Shepherd Alabay dog with big eyes, wearing a cap with a dollar logo on its head and counting money_ 1.png'
            alt=""
            fill
            className="w-full h-full rotate-180 scale-x-[-1] object-cover object-[0px_-600px] z-10 opacity-20 mask-linear  mask-dir-to-t"
          />

        </div>
        </div>

    </div>
  );
};

export default Tokenomics;
