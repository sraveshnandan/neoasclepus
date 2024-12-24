import { fetchProducts } from '@/service/product.services'
import { IProduct } from '@/types'
import React from 'react'
import ProductCard from '../globle/ProductCard';
import Link from 'next/link';


const ProductSection = async() => {
    const data:IProduct[] = await fetchProducts();
  return (
    <div className='w-full max-w-[1024px] mx-auto text-center p-4 md:p-2 my-8'>
        <span className='text-2xl  font-semibold text-primary'>Our Product Range</span>
       <div className='my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-content-center'>
        {
            data?.reverse().slice(0,8).map((item)=>(
                <ProductCard product={item} key={item.id}/>
            ))
        }
       </div>

       <div>
        <Link className='bg-primary text-white font-semibold rounded-full px-4 py-2 hover:shadow-md hover:shadow-black/40 duration-300' href={`/products`}>View Complete Range</Link>
       </div>
    </div>
  )
}

export default ProductSection