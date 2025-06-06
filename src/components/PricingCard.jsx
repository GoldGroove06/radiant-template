"use client"
import React from 'react';
import Text from '@radui/ui/Text';
import Button from '@radui/ui/Button';



function PricingCard({children, subTitle, Title, price}) {
    return (
        <div className='p-2 bg-white/80 backdrop-blur-md border border-slate-300 shadow-lgbg-slate-800  h-[500px] w-[400px] rounded-3xl'>
            <div className='bg-white h-full w-full rounded-3xl border border-slate-300 space-y-4 p-4'>
                <div>{subTitle}</div>
                <div>{Title}</div>
                <div className='flex flex-row items-center space-x-4 pt-8'>
                    <h2 className='text-4xl font-semibold '>{price}</h2>
                    <p>USD<br/> per month</p>
                </div>
                <Button className="!bg-gray-1000 !text-slate-100 !rounded-3xl !p-2 !pt-4 !pb-4 !w-[130px] md:w-28">
                              Start Free Trail
                            </Button>
                <div className='space-y-2 pt-4'>
                    <p>Start selling with:</p>
                    <ul className='space-y-2'>
                        {children}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PricingCard;