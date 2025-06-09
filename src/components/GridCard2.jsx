"use client"
import React from 'react';
import Image from 'next/image';
import Text from '@radui/ui/Text';

function GridCard2({ClassName, supTitle, title, description, image, rounded}) {

    return image && (
        <div className={` rounded-xl h-[500px] ${ClassName} bg-cover flex flex-col border border-gray-1000`}>
        {/* <div className={` rounded-xl h-[500px] ${ClassName} bg-cover flex justify-bottom items-end border border-gray-800`}
         style={{ backgroundImage: `url(${image})` }}
         >
           
        </div> */}
        <div className='h-[60%] w-full'>
        <Image src={image} alt="" width={500} height={500} className='h-full w-full'/>
        </div>
         <div className={`bg-indigo-1000  ${rounded} h-[40%] space-y-1 w-full rounded-b-xl flex flex-col justify-center p-8 ${rounded}`}>
            <Text className="!text-sm !text-gray-700 ">{supTitle}</Text>
            <Text className="!text-2xl font-semibold !text-slate-100">{title}</Text>
            <Text className="!text-sm !text-slate-700 max-w-2xl">{description}</Text>
            </div> 
        </div>

    );
}

export default GridCard2