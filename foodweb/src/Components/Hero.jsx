import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const   Hero = () => {
    const imgData = [
        {
            url:"https://thumbs.dreamstime.com/b/bacon-cheese-burger-beef-patty-tomato-onion-pizza-mozzarella-ham-tomatoes-salami-pepper-pepperoni-spices-fresh-basil-123768697.jpg",
        },
        {
            url:"https://b.zmtcdn.com/data/pictures/3/20742053/7f3ba4a06d9610cee5cebba376468a77.jpg?fit=around|960:500&crop=960:500;*,*",
        },
        {
            url:"https://static.vecteezy.com/system/resources/thumbnails/004/668/781/small/two-pizzas-and-french-fries-on-a-plate-photo.jpeg",
        },
    ];
    const [slider, setslider] = useState(0);
    const handleplus = () =>{
      setslider(slider===imgData.length-1?0:slider+1)
    };
    const handleminus = () => {
        setslider(slider===0?imgData.length-1:slider-1)
    };
    useEffect(()=>{
     const slideclear = setInterval(()=>{
        handleplus();
      },3000)
      return()=>clearInterval(slideclear)
    },[slider])

  return (
    <>
    <div className='mt-[100px]'>
    <div className='w-[90%] mx-auto h-[80vh] my-5 relative'>
    {
        imgData.map((item, i)=>(
            <div key={i} className={`${slider===i?"block":"hidden"}`}>
            <img src={item.url} alt="" className='w-full h-[80vh] rounded-2xl object-cover'/>
            </div>
        ))
    }
   {/* <div className='w-[100%]  mx-5 h-[80vh] bg-[black] opacity-50 rounded-2xl absolute top-[10%] left-0'></div> */}
   <div className=' flex justify-center absolute top-[50%] text-[30px] text-center w-full text-white font-semibold'>
   <p >welcome to the rahul dhaba </p>
   </div>
    <div className='flex justify-between w-[80%] px-5 absolute top-[50%] text-white'>
    <FaChevronLeft size={30} className=' cursor-pointer' onClick={handleminus}/>
    <FaChevronRight  size={30} className=' cursor-pointer' onClick={handleplus}/>
    </div>
    </div>
    </div>
    </>
  );
};

export default Hero
