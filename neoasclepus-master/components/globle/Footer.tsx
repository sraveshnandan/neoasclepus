import { footerMenu } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-transparent/10  w-full flex flex-col'>
      <div className='flex font-sm px-4 text-gray-400 border-t-2 bg-white my-2 border-b-2 flex-col md:flex-row items-center justify-between'>
        <span>Copyright © 2024-2025 Neoasclepus Life Science Pvt. Ltd. All rights reserved.</span>
          <div className='flex gap-2 flex-row items-center'>
            {footerMenu.map((item)=>(
              <Link className='hover:text-primary' key={item.name} href={item.link}>{item.name}</Link>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Footer