import React, { useEffect, useState } from 'react';
import Particle from '../../Shared/Particle/Particle';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://wavey-jam-a12-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className=''>
            <div className='grid grid-cols-1 gap-x-4 gap-y-16 md:grid-cols-2 lg:grid-cols-3  items-center mx-10'>
                {
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>
            <Particle></Particle>
        </div>
    );
};

export default Category;