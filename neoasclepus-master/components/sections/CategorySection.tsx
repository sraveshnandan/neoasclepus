import { FetchAllCategory } from '@/service/category.services'
import { Category } from '@/types';
import React from 'react'
import TitleHeader from '../globle/TitleHeader';
import CategoryCard from '../globle/CategoryCard';

type Props = {}

const CategorySection = async (props: Props) => {
    const data: Category[] = await FetchAllCategory();
    return (
        <div className='bg-white w-full my-4'>
            <TitleHeader title='Our Popular Categories' subtitle='explore our popular and latest categories.' />

            <div className='grid w-full p-4 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {data.slice(0, 4).map((item) => (
                    <CategoryCard c={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}


export default CategorySection