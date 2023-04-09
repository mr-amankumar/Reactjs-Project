import React, { useState } from "react";
import{AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
export default function Header(){
    const[toggle,SetToggle]=useState(false)
    return(
       <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] py-[12px] item-center  flex justify-between  max-auto'>
            <div className="text-3xl font-bold">
                Web Tech
            </div>
{
    toggle ?
    <AiOutlineClose  onClick={()=> SetToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
    :
    <AiOutlineMenu onClick={()=> SetToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
}

            
            <ul className=' hidden md:flex text-white gap-10'>

                <li>
                    <a href="#" className="">Home</a>
                </li>

                <li>
                <a href="#">Company</a>
                </li>

                <li>
                <a href="#">resources</a>
                </li>

                <li>
                <a href="#">About</a>
                </li>
             
                <li>
                <a href="#">Contact</a>
                </li>

            </ul>
            {/*Responsive menu */}
            <ul className={`md:hidden w-full h-screen text-white fixed bg-black 
             top-[92px] 
             
            ${toggle ?'left-[0]': 'left-[-100%]'}`}>

<li className="p-5">
<a href="#" className="">Home</a>
</li>

<li className="p-5">
<a href="#" className="">Company</a>
</li>

<li className="p-5">
<a href="#" className="">Resources</a>
</li>

<li className="p-5">
<a href="#" className="">Resources</a>
</li>

<li className="p-5">
<a href="#" className="">Resources</a>
</li>

</ul>

        </div>
       </div> 
    )
}