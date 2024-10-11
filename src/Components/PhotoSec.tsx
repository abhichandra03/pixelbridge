'use client'
import { FC, useRef, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

// eslint-disable-next-line
interface PhotoSecProps {
  
}

const PhotoSec: FC<PhotoSecProps> = ({}) => {
    const [selected, setSelected] = useState('All');
    const files = ["File1","File1","File1","File1","File1","File1"]
    const photos = ["Image1","Image1","Image1","Image1","Image1","Image1"]
    const videos = ["Video1","Video1","Video1","Video1","Video1","Video1"]
    const ref = useRef<any>(null)

    const handleSelect = (item:string) =>{
        setSelected(item)
    }

    const handleScroll =(scrollOffSet:number) =>{
      if (ref.current != null) {
        ref.current.scrollLeft += scrollOffSet;
      }
    }

  return <div className='flex flex-col justify-center items-center w-full h-[50vh] bg-white'>
    <div className='w-1/3 h-1/3 flex justify-around'>
        <button onClick={()=>handleSelect('All')} className={`font-black text-xl ${selected=="All" ? `text-yellow-400`:`text-[#353535]`}`} >ALL</button>
        <button onClick={()=>handleSelect('Photos')} className={`font-black text-xl ${selected=="Photos" ? `text-yellow-400`:`text-[#353535]`}`} >Photos</button>
        <button onClick={()=>handleSelect('Videos')} className={`font-extrabold text-xl ${selected=="Videos" ? `text-yellow-400`:`text-[#353535]`}`} >Videos</button>
    </div>
    <div className='relative w-[90%] min-h-[369px] h-full flex  justify-center items-center font-black Mont'>
        
      <FaArrowLeft onClick={()=> handleScroll(-500)} className='absolute left-4 top-0 bottom-0 bg-[#353535] rounded-3xl p-4 h-16 w-12 my-auto' size={25} color='white'/>
        {
          selected == "All" &&
          <div ref={ref} className='relative w-[90%] h-3/4 flex  whitespace-nowrap justify-start items-center overflow-x-scroll scrollbar-hide scroll-smooth'>
            {files.map((file, id) => (
              <div key={id} className='flex min-w-[445px] h-full p-2  rounded-3xl justify-center items-center'>
                <div className='w-full h-full bg-[#A6A6A6] rounded-3xl flex  whitespace-nowrap justify-center items-center'>{file}</div>
                </div>
            ))}
          </div>
          ||
          selected == "Photos" &&
          <div ref={ref} className='relative w-[90%]  h-3/4 flex whitespace-nowrap justify-start items-center overflow-x-scroll scrollbar-hide scroll-smooth'>
            {photos.map((photo, id) => (
              <div key={id} className='flex min-w-[445px] h-full p-2  rounded-3xl justify-center items-center'>
                <div className='w-full h-full bg-[#A6A6A6] rounded-3xl flex  whitespace-nowrap justify-center items-center'>{photo}</div>
                </div>
            ))}
          </div>
          ||
          selected == "Videos" &&
          <div ref={ref} className='relative w-[90%]  h-3/4 flex  whitespace-nowrap justify-start items-center overflow-x-scroll scrollbar-hide scroll-smooth'>
            {videos.map((video, id) => (
              <div key={id} className='flex min-w-[445px] h-full p-2  rounded-3xl justify-center items-center'>
                <div className='w-full h-full bg-[#A6A6A6] rounded-3xl flex  whitespace-nowrap justify-center items-center'>{video}</div>
                </div>
            ))}
          </div>
        }
        <FaArrowRight onClick={() => handleScroll(1500)} className='absolute right-4 top-0 bottom-0 bg-[#353535] rounded-3xl p-4 h-16 w-12 my-auto hover:cursor-pointer focus:scale-150' size={25} color='white'/>
    </div>
  </div>
}

export default PhotoSec