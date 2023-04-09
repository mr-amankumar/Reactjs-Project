import React from "react";
import p1 from "../images/p1.jpg";
function Content(){
    return(
        
       <div className='max-w-[1240px] mx-auto p-2 my-[20px]   md:grid grid-cols-2'>
        <div className=' h-[200px] grid col-span-1 col-span-1 w-[80%] text-center'>
            <img src={p1} className='img h-[200px] w-[100%]'/>
        </div>
        <div className=' col-span-1 flex flex-col justify-center'> 
        <h1 className='text-[#000f9a] font-bold  text-justyfy'>LEARN FROM EXPERTS</h1>
        <p> Hi Everyone This is  Web Development Services Page There Are here Our Technical Team . The right quote about learning can fuel an insatiable hunger for knowledge.</p>
        <button className="w-[30%] bg-black text-white  rounded mt-2">Get started</button>
        </div>
       </div>
    
    )
}
export default Content;