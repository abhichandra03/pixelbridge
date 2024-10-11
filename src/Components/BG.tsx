import Image from 'next/image'
import { FC } from 'react'

interface BGProps {
  
}

const BG: FC<BGProps> = ({}) => {
  return <div className='w-full h-screen fixed -z-10'>
    <Image src='/alabayAssets/bg.png' alt='' fill objectFit='cover'/>
  </div>
}

export default BG