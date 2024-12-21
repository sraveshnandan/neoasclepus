
"use client"
import { AppMenu } from '@/constants'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const TopMenu = () => {
    const pathname = useSearchParams()
    const params = pathname.get("data")
  return (
    <div className='w-full bg-gray-200  lg:py-2 py-1  flex items-center'>
    {AppMenu.map((item)=>(
        <Link key={item?.name} className={`lg:px-3 px-2 text-sm ${params === item.data && "bg-primary text-white "} py-1`} href={item?.url}>{item.name}</Link>
    ))}
</div>
  )
}

export default TopMenu