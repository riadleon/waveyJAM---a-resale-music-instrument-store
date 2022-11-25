import React from 'react';
import { Link } from 'react-router-dom';




const Banner = () => {

    return (
        <div className='h-[800]'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1495651779359-881fde1808a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Used <span className='text-primary'>Music</span> Instruments</h1>
                        <p className="mb-5"> <strong className=' font-bold'>Here You will find huge range of used Musical Instruments from worlds famous brands and also in reasonable price</strong> </p>
                        <div>
                            <button className="btn btn-primary mx-3">Shop Now</button>
                            <button className="btn btn-secondary">View Items</button>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default Banner;