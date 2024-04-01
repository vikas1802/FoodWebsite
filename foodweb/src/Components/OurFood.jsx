import React from 'react'
import { meal } from '../Data/Data'
const OurFood = () => {
  return (
    <>
    <div className='w-[90%] mx-auto mt-[100px]'>
    <div>
        <h2 className='text-center text-[#fbc531] text-3xl font-bold py-5'>Our Food</h2>
    </div>
    <div className='bg-[green] grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 py-6 gap-3'>
        {
            meal.map((props)=>(
              <div className='flex justify-center flex-col items-center'>
              <div>
                <img src={props.img} alt="" className='w-[250px] h-[250px] rounded-lg object-cover'/>
                </div>
                <div className='flex justify-center py-2 px-4 flex-col items-center'>
                <p>{props.id}</p>
              <p className='text-xl font-semibold uppercase'>{props.price}</p>
              <p className='text-xl font-semibold uppercase'>{props.category}</p>
              <p className='text-xl font-semibold uppercase'>{props.name}</p>
              <button className='bg-[black] w-[100px] text-[white] rounded-md-my-6 py-[10px] text-[15px hover:text-[#fbc531] font-semibold'>Add to Cart</button>
              </div>
              </div>
              
             
             
            ))
        }

    </div>
    </div>
    </>
  )
}

export default OurFood