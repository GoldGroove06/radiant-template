import React from 'react';

function ImageCard({content}) {
    return (
        <div className='lg:h-[500px] h-96 w-96 snap-center bg-gray-100 rounded-3xl border border-slate-600'>
            <div className='h-[70%] bg-[url("/images/tina-yards.jpg")] bg-cover flex items-end p-4 rounded-t-3xl text-slate-100 font-medium lg:text-lg text-sm'>
                    {content}
            </div>
            <div className='flex justify-start items-center h-[30%] p-8 bg-gray-1000 text-slate-100 rounded-b-3xl text-xs lg:text-md'> 
                
                Tina Yards<br></br>
                VP of Sales, Protocol
            </div>
        </div>
    );
}

export default ImageCard;