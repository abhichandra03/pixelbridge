'use client'
import { FC } from 'react'
import {motion} from 'framer-motion'
import History from '@/Components/History'
import PhotoSec from './PhotoSec'
import Vision from './Vision'
import RoadMap from './RoadMap'
import Carousels from './Carousels'
import Tokenomics from './Tokenomics'
import Merchandise from './Merchandise'
import Games from './Games'
import Socials from './Socials'


interface MainPageProps {
  
}

const MainPage: FC<MainPageProps> = ({}) => {
  return <div className='w-[95%] h-[95vh] overflow-y-scroll  z-10  scrollbar-hide rounded-3xl'>
    {/* <motion.div
        initial={{ position:-100 }}
        whileInView={{ opacity: 1 }}
      > */}

    <History/>
    <PhotoSec/>
    <Vision/>
    <RoadMap/>
    <Carousels/>
    <Tokenomics/>
    <Merchandise/>
    <Games/>
    <Socials/>
    {/* </motion.div> */}
  </div>
}

export default MainPage