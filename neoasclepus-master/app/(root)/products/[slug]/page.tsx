import ProductImages from '@/components/globle/ProductImages';
import SimilarProducts from '@/components/sections/SimilarProducts';
import { FetchProductsBySlug } from '@/service/product.services';
import { IProduct } from '@/types';
import React from 'react'

const ProductDetailsPage =async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params; 
    const details:IProduct = await FetchProductsBySlug(slug)
    return (
        <section className='max-w-[1024px] py-8 bg-white min-h-screen mx-auto'>

                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <div className='md:w-1/2 w-full'>
                        <ProductImages images={details.images}/>
                    </div>
                </div>

            <SimilarProducts id={details.category.id}/>
        </section>
    )
}

export default ProductDetailsPage