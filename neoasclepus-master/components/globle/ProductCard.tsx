import { IProduct } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    product:IProduct
}

const ProductCard = ({product}: Props) => {
  const {images, name, category,id}= product
  return (
    <div className='border bg-white   p-2'>
      <Image src={images[0].url} alt='img' width={100} height={100} className='aspect-square w-full md:w-auto h-48'/>

      <div>
        <span className='line-clamp-1 text-primary font-semibold mt-2 text-xl'>{category.name}</span>

       
      </div>

      <div className='my-4'>
      <span className='text-md text-gray-500 hover:text-primary line-clamp-2 text-center'>{name}</span>
      </div>

      <Link className=' mt-4 text-primary line-clamp-3 bottom-2' href={`/products?id=${id}`}>View Details</Link>
    </div>
  )
}

export default ProductCard