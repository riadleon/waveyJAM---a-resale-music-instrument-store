// import { HandThumbDownIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../assets/img/error.jpg'
import Particle from '../Particle/Particle'


const ErrorPage = () => {
    return (
        <section className='flex items-center h-screen p-16 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                {/* <HandThumbDownIcon className='w-40 h-40 text-green-400' /> */}
                <div className=' text-center'>
                    <img className='w-fit h-96 ' src={img} alt="" />
                    <Link to='/'>
                        <button className='px-8 py-3 font-semibold rounded btn-secondary'>
                            Back to homepage
                        </button>
                    </Link>
                </div>
            </div>
            <Particle></Particle>
        </section>
    )
}

export default ErrorPage
// className='w-24 h-24 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400'