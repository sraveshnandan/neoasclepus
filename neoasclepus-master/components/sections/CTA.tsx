import { AppMenu } from '@/constants'
import { Phone, SignalMediumIcon, Tablets } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const GetInTouch = (props: Props) => {
    return (
      <div className='w-full my-8'>
        <div className='text-white mb-4 text-xl p-2 bg-primary'>
            <span>Get In Touch With Us</span>
        </div>


        <div className='flex flex-col'> 
            <span className='text-xl text-black font-semibold mb-2'>Our Company</span>

            {
                AppMenu.map((item)=>(
                    <Link className='my-1 text-gray-400' href={item.url}>{item.name}</Link>
                ))
            }

        </div>

      </div>
    )
}

export default GetInTouch