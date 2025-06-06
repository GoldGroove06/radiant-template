"use client";
import React from 'react';
import Text from '@radui/ui/Text';
import Button from '@radui/ui/Button';

function Footer(props) {
    return (
        <div className='bg-gradient-to-r from-yellow-300 from-28% via-pink-700 via-70% to-purple-800 sm:bg-gradient-to-r flex flex-col items-center justify-center p-2'>
            <div className='bg-white/80 backdrop-blur-md border border-white/50 shadow-lgbg-slate-800 opacity-90 h-full w-full rounded-3xl flex flex-col justify-between pt-24 pb-16 justify-center'>
                <div className='flex flex-col items-center justify-center mb-16 space-y-8'>
                    <Text className="!text-sm ">Get started</Text>
                    <div className='flex flex-col items-center'>
                        <p className="text-5xl font-bold text-slate-1000">Ready to dive in?
                        </p>
                        <p className="text-5xl font-bold text-slate-1000">Start your free trial today.
                        </p>
                    </div>
                    <div className='flex flex-col items-center '>
                        <Text className="!text-sm ">Get the cheat codes for selling and unlock your </Text>
                        <Text className="!text-sm ">team's revenue potential.</Text>
                    </div>
                    <Button className="!bg-gray-1000 !text-slate-100 !rounded-3xl !p-4 !pt-5 !pb-5">
                        Get Started
                    </Button>

                </div>
                <section className='border border-slate-100 justify-center items-center flex flex-col h-72 pl-16 pr-16'>
                    <div className=' flex justify-between items-start lg:items-center lg:flex-row flex-col flex-wrap  max-w-[1240px] w-full'>
                        <div className='flex'>Radiant</div>
                        
                           <div className='grid grid-cols-4 gap-x-8 gap-y-12'>
                                <div className='flex flex-col space-y-6 lg:col-span-1 col-span-2'>
                                    <div>Product</div>
                                    <div>Pricing</div>
                                    <div>Analysis</div>
                                    <div>API</div>
                                </div>
                                <div className='flex flex-col space-y-6 lg:col-span-1 col-span-2'>
                                    <div>Product</div>
                                    <div>Pricing</div>
                                    <div>Analysis</div>
                                    <div>API</div>
                                </div>
                          
                                <div className='flex flex-col space-y-6 lg:col-span-1 col-span-2'>
                                    <div>Product</div>
                                    <div>Pricing</div>
                                    <div>Analysis</div>
                                    <div>API</div>
                                </div>
                                <div className='flex flex-col space-y-6 lg:col-span-1 col-span-2'>
                                    <div>Product</div>
                                    <div>Pricing</div>
                                    <div>Analysis</div>
                                    <div>API</div>
                                </div>
                            </div>
                        

                    </div>
                    <div className=' flex flex-row justify-between'>
                        <div> 2025 Radiant</div>
                        <div className='flex flex-row'>
                            <div>f</div>
                            <div>f</div>
                            <div>f</div>
                        </div>

                    </div>

                </section>
            </div>

        </div>
    );
}

export default Footer; Footer