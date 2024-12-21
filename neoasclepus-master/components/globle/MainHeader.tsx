import { AppMenu } from '@/constants'
import { CheckCircle2Icon, LocateFixedIcon, LocateIcon, MapIcon, MapPin, Pin, Verified } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TopMenu from './TopMenu'

const MainHeader = () => {
  return (
    <div className='flex flex-col md:flex-row  items-center'>
        <div className='flex gap-2 flex-col md:w-[80%] w-full'>
       <div  className='flex flex-row items-center gap-2'>
         {/* logo  */}
       <div className='p-2 rounded-md flex items-center justify-center border-[1px] border-gray-200'>
       <Image src={"/logo.png"} width={80} height={80} className='w-12 h-12' alt='logo'/>
       </div>

       {/* info  */}
       <div className='flex flex-col space-y-2'>
            <span className='lg:text-3xl md:text-2xl text-xl opacity-75 font-bold'>Neoasclepus Life Science</span>
            
            <div className='flex sm:text-xs text-[12px]  lg:text-md flex-row items-center'>
            <div className='flex text-gray-800 opacity-90 items-center gap-1'>
            <MapPin/> <span>Gujrat</span>
            </div>
            <hr className='rotate-90 w-4 h-[1px] bg-black/60 opacity-100' />

            <div className='flex text-gray-800 opacity-90 items-center gap-1'>
            <CheckCircle2Icon color='green'/> <span>GST <b>24AAJCN5189P1ZN</b></span>
            </div>
            <hr className='rotate-90 w-4 h-[1px] bg-black/60 opacity-100' />

            <div className='flex text-gray-800 opacity-90 items-center gap-1'>
            <Verified color='green'/> <span>Verified Supplier</span>
            </div>
            </div>
            
       </div>
       </div>

      <TopMenu/>

    </div>
    <div className='flex border w-full md:w-fit py-4 md:py-0 gap-2 ml-2 self-end flex-grow text-center flex-col'>
            <Link className='border-2 px-3 py-2 text-primary rounded-md' href={"tel:9126126126"}>Call Us</Link>
            <Link className='border-2 bg-primary text-white  px-3 py-2 rounded-md' href={"/"}>Send Email</Link>
    </div>
    </div>
  )
}

export default MainHeader