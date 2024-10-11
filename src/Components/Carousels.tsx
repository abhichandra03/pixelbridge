import Image from "next/image";
import { FC } from "react";

interface CarouselsProps {}

const Carousels: FC<CarouselsProps> = ({}) => {
  return (
    <div className="w-full h-[90vh] flex relative overflow-hidden bg-white items-start justify-center">

<div className="absolute w-[200%] h-[50%] -bottom-40 -left-24  transform -rotate-[8deg]">
        <div className="w-full h-full bg-radial-gradient from-[#FFC700] to-[#FFC700]"></div>
      </div>

      <div className="flex w-[90%] h-3/4 justify-between">
        <div className="w-[24%] bg-[#DBC70C] rounded-tl-3xl flex flex-col p-2 mask-linear mask-from-100 mask-to-0 mask-via-100">
          <div className="w-full h-1/5 flex justify-center items-center">
            <p className="text-white font-extrabold text-4xl text-center">
              Community <br/> Buildind <br/> and Initial Launch
            </p>
          </div>
          <div className="relative w-full h-4/5">
            <Image
              src='/alabayAssets/DALL·E 2024-07-15 01.28.43 - A full body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed as a construction worker. The dog should have a big_ 3.png'
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-[24%] bg-[#00D4D4]  flex flex-col p-2 mask-linear mask-from-100 mask-to-0 mask-via-100">
          <div className="w-full h-1/5 flex justify-center items-center">
            <p className="text-white font-extrabold text-4xl text-center">
              Community <br/> Buildind <br/> and Initial Launch
            </p>
          </div>
          <div className="relative w-full h-4/5">
            <Image
              src='/alabayAssets/DALL·E 2024-07-15 01.31.03 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a t-shirt with an Alabay dog printed on it and we 2.png'
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-[24%] bg-[#D427FF]  flex flex-col p-2 mask-linear mask-from-100 mask-to-0 mask-via-100">
          <div className="w-full h-1/5 flex justify-center items-center">
            <p className="text-white font-extrabold text-4xl text-center">
              Community <br/> Buildind <br/> and Initial Launch
            </p>
          </div>
          <div className="relative w-full h-4/5">
            <Image
              src='/alabayAssets/DALL·E 2024-07-15 01.32.53 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog celebrating with a trophy. The dog should have a big smile a 1.png'
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-[24%] bg-[#8F3A3C] rounded-tr-3xl flex flex-col p-2 mask-linear mask-from-100 mask-to-0 mask-via-100">
          <div className="w-full h-1/5 flex justify-center items-center">
            <p className="text-white font-extrabold text-4xl text-center">
              Community <br/> Buildind <br/> and Initial Launch
            </p>
          </div>
          <div className="relative w-full h-4/5">
            <Image
              src='/alabayAssets/DALL·E 2024-07-15 01.33.29 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a Viking outfit. The dog should have a big smile_ 1.png'
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute w-[120%] h-[30%] -bottom-32 -right-24 -z-10  transform -rotate-[8deg]  ">
        <div className="w-full h-full bg-yellow-400"></div>
      </div>
    </div>
  );
};

export default Carousels;
