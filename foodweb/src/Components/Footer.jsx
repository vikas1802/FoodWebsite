import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='w-full bg-[black] text-white'>
            <div className='grid grid-cols-2 md:grid-cols-4 py-10 pl-5'>
                <div>
                    <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Yummy <span className='text-[#f1c40f]'>Food</span>    </h2>
                    <p className='text-[15px] md:text-[20px] text-[grey]'>@2023 Bundi Technologies pvt. Ltd</p>
                </div>
                <div>
                <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Company</h2>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>About</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Careers</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Team</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Swiggy One</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Swiggy Instamart</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Swiggy Genie</p>
                </div>
            
                <div>
                <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'> Contact us</h2>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Help & Support</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Partner with us</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Ride with us</p>
                

             
                <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Legal</h2>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Terms & Conditions</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Cookie Policy</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Privacy Policy</p>
                
</div>
                <div>
                <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>We deliver to:</h2>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Bangalore</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Gurgaon</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Hyderabad</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Delhi</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Mumbai</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[grey]'>Pune</p>
                </div>

            </div>
        </div>
    </>
  )
}

export default Footer
