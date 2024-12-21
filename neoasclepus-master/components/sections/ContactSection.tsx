import { MapPin, PhoneCallIcon, UserCircle2Icon } from 'lucide-react'
import React from 'react'

type Props = {}

const ContactSection = (props: Props) => {
    return (
        <div className='flex items-start justify-start w-full flex-col'>
            <span className='text-black text-2xl font-semibold mb-4'>Reach Us</span>

            <div className='flex text-sm text-gray-500 flex-row mb-4 gap-2'>
                <MapPin/> <span>Gujrat</span>
            </div>

            <div className='flex text-sm text-gray-500 flex-row mb-4 gap-2'>
                <UserCircle2Icon/> <span>User Name</span>
            </div>

            <div className='flex text-sm text-gray-500 flex-row mb-4 gap-2'>
                <PhoneCallIcon/> <span>View Phone Number</span>
            </div>
        </div>
    )
}

export default ContactSection