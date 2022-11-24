import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = '7d7fa16a5c1e6c7aa50443a390e2178e';

    const navigate = useNavigate();

    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/categories');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        name: data.name,
                        category: data.category,
                        categoryID: data.category.id,
                        image: imgData.data.url,
                        location: data.location,
                        resalePrice: data.resalePrice,
                    }

                    // save product information to the database
                    fetch('http://localhost:8000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/myProducts')
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Product</h2>
            <form className='flex flex-row gap-5' onSubmit={handleSubmit(handleAddProduct)}>
                <div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="flex-1 py-2 border-b-2 border-gray-400 focus:border-primary placeholder-gray-400 outline-none" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Category</span></label>
                        <select
                            {...register('category')}
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-primary placeholder-gray-400 outline-none">
                            {
                                categories.map(category => <option
                                    key={category._id}
                                    value={category.category_name}
                                >{category.category_name}</option>)
                            }


                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" {...register("image", {
                            required: "Photo is Required"
                        })} className="flex-1 py-2 border-b-2 border-gray-400 focus:border-primary placeholder-gray-400 outline-none" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "location is Required"
                        })} className="flex-1 py-2 border-b-2 border-gray-400 focus:border-primary placeholder-gray-400 outline-none" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="flex-1 py-2 border-b-2 border-gray-400 focus:border-primary placeholder-gray-400 outline-none" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                </div>
                <div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "location is Required"
                        })} className="flex-1 py-2 border-b-2 border-gray-400 focus:border-primary placeholder-gray-400 outline-none" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Resale Price</span></label>
                        <input type="text" {...register("resalePrice", {
                            required: "Resale Price"
                        })} className="flex-1 py-2 border-b-2 border-gray-400 focus:border-primary placeholder-gray-400 outline-none" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                </div>
                <div>
                    <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
