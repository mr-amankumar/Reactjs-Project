import React from "react";
import Typed from 'react-typed';
 
export default function Banner(){
    return(
        <>
        <div className='bg-[#2699fb] h-[480px] py-[170px]'>
            <div className='max-width-[140px] my-[100px] mx-auto text-center  font-bold '>
<div className=" text-xl md:text-3xl mb-4 ">Learn with us</div>
<h2 className="text-white text-xl  md:text-[40px] mb-4 ">Grow with us </h2>
<div className=" md:text-4xl text-[20px] text-white mb-4 ">Learn

<Typed             className="pl-3"
                    strings={['Web Development','Android Development','Digital Marketing','Software Development']}
                    typeSpeed={80}
                    backSpeed={100}
                    loop={true}
                />
</div>
<button className='bg-black text-white p-3 rounded'>Get Started</button>
            </div>
        </div>
        </>
    )
}