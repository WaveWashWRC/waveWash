import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ desc, category, images, location, expectedPrice }) => {
    return (
        <div className='bg-gray-100 relative w-[800px]  h-[340px] overflow-hidden cursor-pointer  rounded-md border  shadow-lg m-6 p-4 '>

            <Link to={'/'}>
                <div className=''>
                    <div>
                        <span class="bg-blue-100 inline-block text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                            {category}
                        </span>
                        <span class="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                           ₹{expectedPrice}
                        </span>
                    </div>
                    <img className='block mr-auto mt-2 ml-auto max-h-60 max-w-full rounded responsive:w-full' src={images[0]} />
                    <h1 className='font-bold p-1 text-center  text-lg'>
                        {desc}
                    </h1>
                </div>
                
            </Link>

        </div>
    )
}

export default Card