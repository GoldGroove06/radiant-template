import React from 'react';

function ImageCard({content}) {
    return (
        <div className='h-[400px] lg:w-80 w-72 snap-center bg-gray-100 rounded-3xl'>
            <div className='h-[70%] bg-[url("/images/app.png")] bg-cover flex items-end p-4 rounded-t-3xl'>
                    {content}
            </div>
            <div className='flex justify-start items-center h-[30%] p-8'> 
                Tina Yards<br></br>
                VP of Sales, Protocol
            </div>
        </div>
    );
}

export default ImageCard;