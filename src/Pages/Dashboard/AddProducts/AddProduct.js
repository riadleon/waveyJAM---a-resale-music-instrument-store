import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { user } = useContext(AuthContext);


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
                        id: data.category,
                        image: imgData.data.url,
                        location: data.location,
                        resalePrice: data.resalePrice,
                        originalPrice: data.originalPrice,
                        email: data.email,
                        // email: ,
                        number: data.number,
                        uses: data.uses,
                        time: data.time,
                        sname: data.sname,
                        condition: data.condition,



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
                            navigate('/dashboard/myProduct')
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
            <form className='grid grid-cols-2 gap-5' onSubmit={handleSubmit(handleAddProduct)}>
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
                                    value={category._id}
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
                        <label className="label"> <span className="label-text">Seller Email</span></label>
                        <input defaultValue={user.email} type="email" {...register("email", {
                            required: "email is Required"
                        })} className="flex-1 py-2 border-b-2 border-gray-400 focus:border-primary placeholder-gray-400 outline-none" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Seller Name</span></label>
                        <input type="text" {...register("sname", {
                            required: "Name is Required"
                        })} className="flex-1 py-2 border-b-2 border-gray-400 focus:border-primary placeholder-gray-400 outline-none" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                </div>
                <div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Number</span></label>
                        <input type="number" {...register("number", {
                            required: "Number is Required"
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
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Original Price</span></label>
                        <input type="text" {...register("originalPrice", {
                            required: "Original Price"
                        })} className="flex-1 py-2 border-b-2 border-gray-400 focus:border-primary placeholder-gray-400 outline-none" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Years of uses</span></label>
                        <input type="number" {...register("uses", {
                            required: "Years of uses"
                        })} className="flex-1 py-2 border-b-2 border-gray-400 focus:border-primary placeholder-gray-400 outline-none" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Posted Time</span></label>
                        <input type="time" {...register("time", {
                            required: "Years of uses"
                        })} className="flex-1 py-2 border-b-2 border-gray-400 focus:border-primary placeholder-gray-400 outline-none" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Condition</span></label>
                        <input type="text" {...register("condition", {
                            required: "condition must"
                        })} className="flex-1 py-2 border-b-2 border-gray-400 focus:border-primary placeholder-gray-400 outline-none" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                </div>
                <div>
                    <input className='btn btn-accent w-full mt-4 items-center' value="Add Product" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
