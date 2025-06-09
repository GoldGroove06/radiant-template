import React from 'react';
import Seperator from '@radui/ui/Separator';

function ImageCard({content}) {
    return (
        <div className='lg:h-[500px] h-96 w-96 snap-center bg-gray-600 rounded-3xl border border-slate-600'>

            <div className='h-[75%] bg-[url("/images/tina-yards.jpg")] bg-cover flex items-end rounded-t-3xl text-slate-100 font-medium '>
              <div className="bg-gradient-to-t from-black via-transparent to-transparent bg-black/25 h-full flex rounded-t-3xl flex-col justify-end"> 
                   <div className='p-8 lg:text-lg text-sm'>{content}</div> 
                   </div>
            </div>
            
            <div className='flex flex-col justify-center items-start h-[25%] p-8 bg-gray-1000 text-slate-100 rounded-b-3xl text-xs lg:text-md space-y-2 font-medium'> 
                
                <div>Tina Yards</div>
                <div>VP of Sales, Protocol</div>
            </div>
        </div>
    );
}

export default ImageCard;