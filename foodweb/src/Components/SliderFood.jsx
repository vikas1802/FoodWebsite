import React from 'react'
import { Data } from '../Data/Data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderFood = ({handleAdd}) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
        <div className='w-[90%] mx-auto'>
        <h1 className='font-bold text-3xl pl-10'>What's on your mind ?</h1>
        <div className='py-20'>
        
        <Slider {...settings}>
            {
                Data.map((item)=>(
                    <div className=' rounded-md' key={item.id}>
                    <div className=' flex justify-center items-center rounded-t-xl'>
                        <img src={item.img} alt="" className='w-[200px] rounded-full h-[200px] object-cover'/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 p-4'>
                    <p className='text-xl font-semibold uppercase'>{item.title}</p>
                    <p className='text-xl font-semibold uppercase'>{item.price}</p>
                    <button className='bg-[black] w-[150px] text-[white] rounded-md my-6 py-[15px] text-[20px] hover:text-[#fbc531] font-semibold' onClick={handleAdd}>Add to Cart</button>
                    </div>
                        </div>
                ))
            }
          </Slider>
            </div>
          </div>     
    </>
  )
}

export default SliderFood
