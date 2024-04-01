import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Header = ({count}) => {
    const [sidenav, setsidenav] = useState(false);
    console.log(sidenav)
  return (
    <div className='fixed z-50 top-0 left-0 w-full bg-white'>
    <div className='flex justify-between py-[20px] px-[25px] text-[18px] font-semibold border-b relative'>
    <div>
    <Link to="/">
        <p className=' cursor-pointer'>Yummmy <span className='text-[#f1c40f]'>Food</span></p>
        </Link>
    </div>
    <div>
    

        <ul className='sm:flex gap-4 hidden cursor-pointer'>
        <Link to='/'>
            <li className='hover:text-[#f1c40f]'>Home</li>
            </Link>
            <Link to='/aboutus'>
            <li className='hover:text-[#f1c40f]'>About us</li>
            </Link>
            <Link to='/ourfood'>
            <li className='hover:text-[#f1c40f]'>OurFood</li>
            </Link>
            <Link to='/signup'>
            <li className='hover:text-[#f1c40f]'>Sign up</li>
            </Link>
           
        </ul>
    </div>
    {
        sidenav?<div className='bg-[#f5f6fa] w-[200px] absolute top-0 right-0 text-center h-[100vh] flex items-center justify-center z-10'>
<RxCross2 size={25} className='absolute top-5 right-5 cursor-pointer' onClick={()=>setsidenav(!sidenav)}/>

    <ul className='sm:flex gap-12 cursor-pointer flex-col'>
    <Link to='/'>
            <li className='hover:text-[#f1c40f]' onClick={()=>setsidenav(!sidenav)}>Home</li>
            </Link>
            <Link to='/aboutus'>
            <li className='hover:text-[#f1c40f]' onClick={()=>setsidenav(!sidenav)}>About us</li>
            </Link>
            <Link to='/ourfood'>
            <li className='hover:text-[#f1c40f]' onClick={()=>setsidenav(!sidenav)}>OurFood</li>
            </Link>
            <Link to='/signup'>
            <li className='hover:text-[#f1c40f]' onClick={()=>setsidenav(!sidenav)}>Sign up</li>
            </Link>
    </ul>
</div>:""
    }
    <div className='flex gap-3' >
    <p><GiHamburgerMenu size={30} className=' cursor-pointer block sm:hidden' onClick={()=>setsidenav(!sidenav)}/></p>
      
        <p>
        {count}
        <FaCartShopping size={30}/>
        </p>
    </div>
    </div>
    </div>
  )
}

export default Header
