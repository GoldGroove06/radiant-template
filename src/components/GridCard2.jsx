"use client"
import React from 'react';
import Text from '@radui/ui/Text';

function GridCard2({ClassName, supTitle, title, description, image, rounded}) {

    return image && (
        <div className={` rounded-xl h-[500px] ${ClassName} bg-cover flex justify-bottom items-end border border-slate-300`}
         style={{ backgroundImage: `url(${image})` }}
         >
            <div className={`bg-indigo-1000 h-[30%]  space-y-1 w-full rounded-b-xl flex flex-col justify-center pt-24 pb-24 p-8 ${rounded}`}>
            <Text className="!text-sm !text-gray-700 ">{supTitle}</Text>
            <Text className="!text-2xl font-semibold !text-slate-100">{title}</Text>
            <Text className="!text-sm !text-slate-700 max-w-2xl">{description}</Text>
            </div>
        </div>

    );
}

export default GridCard2