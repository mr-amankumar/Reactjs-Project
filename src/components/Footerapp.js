import React from "react";
function Footerapp(){
    return(
        <div className='bg-[#2699fb] max-w-[100%] mx-auto p-2   md:grid grid-cols-4'>
            <div className=' h-[200px] grid col-span-1 col-span-1 w-[100%] text-center'>
            <h1 className="font-bold text-[30px] text-center">Web Tech</h1>
            <p className=" font-bold text-center font-sans hover:font-serif text-[white]">Web Tech is a new company for learn and taught by industry expert
            There are join only tech background student <br/>
            </p>
        </div>
        <div className=' h-[200px] grid col-span-1 col-span-1 w-[100%] text-center'> 
        <span className="font-bold md:text-[20px] text-center mt-10">Solution<br/>
        <p className=" text-[15px] mt-2 font-bold text-center font-sans hover:font-serif text-[white]"><a href="">Analytics</a></p>
        <p className=" text-[15px] mt-2 font-bold text-center font-sans hover:font-serif text-[white]"><a href="">Marketing</a></p>
        <p className=" text-[15px] mt-2 font-bold text-center font-sans hover:font-serif text-[white]"><a href="">Development</a></p>
        </span>

        </div>
        <div className=' h-[200px] grid col-span-1 col-span-1 w-[100%] text-center'> 
        <span className="font-bold md:text-[20px] text-center mt-10">Support<br/>
        <p className=" text-[15px] mt-2 font-bold text-center font-sans hover:font-serif text-[white]"><a href="">Pricing</a></p>
        <p className=" text-[15px] mt-2 font-bold text-center font-sans hover:font-serif text-[white]"><a href="">Documentation</a></p>
        <p className=" text-[15px] mt-2 font-bold text-center font-sans hover:font-serif text-[white]"><a href="">Guide</a></p>
        </span>

        </div>
        <div className=' h-[200px] grid col-span-1 col-span-1 w-[100%] text-center'> 
        <span className="font-bold md:text-[20px] text-center mt-10">company<br/>
        <p className=" text-[15px] mt-2 font-bold text-center font-sans hover:font-serif text-[white]"><a href="">About</a></p>
        <p className=" text-[15px] mt-2 font-bold text-center font-sans hover:font-serif text-[white]"><a href="">Career</a></p>
        <p className=" text-[15px] mt-2 font-bold text-center font-sans hover:font-serif text-[white]"><a href="">job</a></p>
        </span>

        </div>
        </div>
    )
}
export default Footerapp;