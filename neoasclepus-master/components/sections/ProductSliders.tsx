import { fetchProducts } from '@/service/product.services'
import { IProduct } from '@/types';
import React from 'react'

const ProductSliders = async() => {
    const data:IProduct[] = await fetchProducts();
    console.log(data?.length)
  return (
    <div>
        
    </div>
  )
}

export default ProductSliders