import Image from "next/image";
import { FC } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

interface SocialsProps {}

const Socials: FC<SocialsProps> = ({}) => {
  return (
    <div className="w-full h-screen flex flex-col bg-white relative">
      <div className="w-[90%] h-[60vh] text-[#FFA800] text-4xl font-extrabold flex justify-start items-center relative">
        <p className=" Cheeseburga text-[150px]">SOCIAL MEDIA LINKS</p>
      </div>
      <div className="flex w-full h-full">
        <div className="w-1/2 h-full flex justify-end  items-center">
          <div className="w-1/2 h-1/2 bg-gradient-to-b from-[#80B3FF] to-[#417DF1] flex flex-col justify-around items-center rounded-3xl border-[10px] border-[#0553C8A8]">
            <div className="flex justify-around items-center w-full">
              <div className="bg-black rounded-full p-4 text-white">
                <BsTwitterX size={25} className="" />
              </div>
              <p>Twitter</p>
            </div>
            <div className="flex justify-around items-center w-full">
              <div className="bg-black rounded-full p-4 text-white">
                <FaTelegramPlane size={25} className="" />
              </div>
              <p>Telegram</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full relative bg-white">
          <Image
            src="/alabayAssets/DALL·E 2024-07-29 17.36.01 - A 3D cartoon illustration of a cute furry Central Asian Shepherd dog holding a mobile phone and looking at it. The dog has expressive eyes, a fluffy c 2.png"
            alt=""
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Socials;
