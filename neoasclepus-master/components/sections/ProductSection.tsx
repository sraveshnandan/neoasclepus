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


        <div className='w-full py-8 gap-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {
            data?.map((item)=>(
                <ProductCard product={item} key={item.id}/>
            ))
        }
        </div>


       
    </div>
  )
}

export default ProductSection