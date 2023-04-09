import React from "react";
function Footers(){
    return(
        
            <div className="py-[80px] px-2">
                <div className=" max-w[1240px] mx-auto md:grid grid-cols-3 gap-4">
                    <div className="shadow-xl my-2 h-[300px] hover:scale-105 duration-500">
                        <h1 className="font-bold text-center text-[30px]">Web Development</h1><br/>
                        <p className="font-bold text-center text-[25px]">$190</p><br/>
                        <p className="text-center font-sans hover:font-serif  ">This is course Price For Fullstack Web development</p><hr/><br/> 
                        <p className="font-sans hover:font-serif text-center">This course is design by technical team</p><hr/><br/>
                        <p className="font-sans hover:font-serif text-center">Support to Large Community</p><hr/>
                    </div>
                    <div className="shadow-xl my-2 h-[300px] bg-gray-100 hover:scale-105 duration-500 ">
                    <h1 className="font-bold text-center text-[30px]">Digital Marketing</h1><br/>
                        <p className="font-bold text-center text-[25px]">$120</p><br/>
                        <p className="text-center font-sans hover:font-serif  ">This is course Price For Digital Marketing EasLearn</p><hr/><br/> 
                        <p className="font-sans hover:font-serif text-center"> course is design by Digital Marketing team</p><hr/><br/>
                        <p className="font-sans hover:font-serif text-center"> course is Doubt solve one by one</p><hr/>
                    </div>
                    <div className="shadow-xl my-2 h-[300px] hover:scale-105 duration-500">
                    <h1 className="font-bold text-center text-[30px]">App Development</h1><br/>
                        <p className="font-bold text-center text-[25px]">$190</p><br/>
                        <p className="text-center font-sans hover:font-serif  ">This is course Price For App Development for Android</p><hr/><br/> 
                        <p className="font-sans hover:font-serif text-center"> course is design by App Development team</p><hr/><br/>
                        <p className="font-sans hover:font-serif text-center"> course basic to advance</p><hr/>

                    </div>
                </div>
            </div>
        
    )
}
export default Footers;