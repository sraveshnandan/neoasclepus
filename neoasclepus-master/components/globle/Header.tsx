import { AppMenu } from '@/constants'
import { MenuIcon, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {

    return (
        <header className="flex py-2 bg-transparent/20 border-b-[1px] border-b-gray-200  lg:px-16 md:px-4 px-4 sticky top-0 z-10 backdrop-blur-md w-full items-center justify-between">
            <Link href={"/"} className='flex items-center space-x-1'>
                <Image priority={true} src={"/logo.png"} className='w-auto h-auto drop-shadow-sm aspect-auto' alt='logo' width={40} height={35} />
                <span className='md:text-2xl text-lg  font-semibold text-primary '>Neoasclepus</span>
            </Link>


            <button className='md:px-7 px-4 md:py-2 py-1 text-md bg-primary rounded-full text-white  hover:shadow-md hover:shadow-black/40 duration-300'>Explore</button>

          


        </header>

    )
}

export default Header