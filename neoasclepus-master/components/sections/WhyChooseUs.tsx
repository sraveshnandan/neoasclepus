import React from 'react'
import TitleHeader from '../globle/TitleHeader'
import Link from 'next/link'
import { WhyChooseData } from '@/constants'
import Image from 'next/image'

const WhyChooseUs = () => {
    return (
        <div className='mt-8 mb-16'>
            <TitleHeader title='Why Choose NeoAsclepius?' subtitle=' We focus on innovative medicine manufacturing. Our mission is to make healthcare accessible, affordable, and effective for everyone.' />


            <div className='flex flex-col h-fit py-4 gap-4 lg:flex-row'>
                <div className='lg:w-[45%] w-[80%] mb-12 flex flex-col gap-2'>
                    <span className='text-primary text-3xl font-semibold'>Why Choose Our Online Pharmacy?</span>
                    <p className='text-md text-neutral-500  font-semibold'>we aim to meet the diverse needs of individuals and distributors.</p>

                    <Link className='text-white w-fit px-7 py-3 text-lg font-semibold bg-primary rounded-full ' href={"/about"}>
                        About Us
                    </Link>
                </div>
                <div className='flex'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        {WhyChooseData.map((item) => (
                            <div key={item.title} className='flex my-4 lg:my-0 items-center gap-4'>
                                <Image src={item?.image} className='w-12 h-12' alt='demo' width={70} height={70} />
                                <div className='flex flex-col'>
                                    <span className='text-xl font-semibold'>{item.title}</span>
                                    <p className='text-md line-clamp-2 text-neutral-500'>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyChooseUs