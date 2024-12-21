import { WhyChooseData } from '@/constants'
import { InfoIcon, ServerIcon } from 'lucide-react'
import React from 'react'

const AboutUsSection = () => {
  return (
    <div className='flex justify-center flex-col text-center w-full '>
        <span className='text-center text-xl font-semibold mb-4'>About Us</span>

        <span className='text-sm opacity-90 font-medium text-gray-500 max-w-[90%] mx-auto'>NeoAsclepius Life Science Pvt. Ltd. is your trusted partner in delivering high-quality, innovative, and affordable healthcare solutions. Based on a strong foundation of research and precision manufacturing, we cater to the needs of individuals, distributors, and healthcare providers across the nation.
            Our mission is to bridge the gap in healthcare accessibility by offering premium medicines at competitive prices. Whether you&apos;re a distributor seeking bulk orders or a consumer looking for reliable products, NeoAsclepius is here to serve your needs.
            As we expand, our platform also integrates a D2C (Direct-to-Consumer) model to ensure that healthcare is just a click away. Experience the future of healthcare with us—where quality, innovation, and affordability meet.
            </span>


            <div className='w-[80%] mx-auto mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {WhyChooseData.map((item)=>(
                    <div className='flex bg-gray-200 rounded-md p-2 items-center  flex-row gap-2'>
                        <ServerIcon/>
                        <span className='text-primary text-lg font-semibold'>{item.title}</span>
                        </div>
                ))}
            </div>
    </div>
  )
}

export default AboutUsSection