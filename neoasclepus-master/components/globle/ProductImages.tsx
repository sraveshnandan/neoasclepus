"use client"
import { ImageType } from '@/types'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {
    images:ImageType[]
}

const ProductImages = ({images}: Props) => {
    const [imgsrc, setimgsrc] = useState(images[0].url)

  return (
    <div className='w-full border p-2 flex flex-col md:flex-row'>
        <Image src={imgsrc} alt='product imgae' width={100} height={100} className=''/>

        <div></div>
    </div>
  )
}

export default ProductImages