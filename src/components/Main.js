import React from "react";
function Main(){
    return(
        <div className='bg-[#2699fb] p-4'>
        <div className="max-w[1240px] mx-auto md:flex justify-between py-[50px]">
        <div  className='m-2'>
            <h1 className=" text-[20px] md:text-[35px] font-bold text-white">Want to Learn latest I.T skill</h1>
        <span className="text-white font-[40px]">
            Sign up to our latest update and stay to update
        </span>
        </div>
        <div className='m-2'>
       < input type="text" className=' rounded mb-2 p-3 mr-2 text-slate-600 ' placeholder='Email' />
       <button className='bg-black h= text-white  p-3 rounded'>Get Started</button>
       <br/>
       <p className="text-white font-[40px]">
We can provide to build a professsional website<br/>
<a href="">Read our privay</a>
       </p>
        </div>

        </div>
        </div>
    )
}
export default Main;