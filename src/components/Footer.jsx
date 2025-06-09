"use client";
import React from 'react';
import Text from '@radui/ui/Text';
import Button from '@radui/ui/Button';


function Footer(props) {
    return (
        <div className='bg-gradient-to-r from-yellow-300 from-28% via-pink-700 via-70% to-purple-800 sm:bg-gradient-to-r flex flex-col items-center justify-center p-2'>
            <div className='bg-white/80 backdrop-blur-md border border-white/50 shadow-lgbg-slate-800 opacity-90 h-full w-full rounded-3xl flex flex-col justify-between pt-24 pb-16 justify-center'>
                <div className='flex flex-col items-center justify-center mb-32 space-y-6'>
                    <Text className="!text-[0.65rem] !font-semibold !tracking-widest">GET  STARTED</Text>
                    <div className='flex flex-col items-center justify-center'>
                        <p className="lg:text-5xl text-3xl font-semibold text-gray-1000 tracking-tight">Ready to dive in?
                        </p>
                        <p className="lg:text-5xl text-3xl font-semibold  tracking-tight text-gray-1000">Start your free trial today.
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Text className="!text-sm ">Get the cheat codes for selling and unlock your </Text>
                        <Text className="!text-sm ">team's revenue potential.</Text>
                    </div>
                    <Button className="!bg-gray-1000 !text-slate-100 !rounded-3xl !p-4 !pt-5 !pb-5">
                        Get Started
                    </Button>

                </div>
                <section className='border border-black/5 justify-center items-center flex flex-col p-2 w-full border-r-0 border-l-0'>
                    <div className='border border-black/5 border-r-0 border-l-0 justify-center items-center flex flex-col lg:h-72 lg:pl-12 lg:pr-12 pt-10 p-4 w-full'>
                    <div className=' flex justify-between items-start lg:items-center lg:flex-row flex-col flex-wrap  max-w-[1240px] w-full space-y-8 lg:space-y-0 relative'>
                <svg viewBox="0 0 15 15" className='w-4 h-4 absolute -top-10 -left-2 fill-black/10' aria-hidden="true" ><path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path></svg>
               
                <svg viewBox="0 0 15 15" className='w-4 h-4 absolute -top-10 left-[7rem] fill-black/10' aria-hidden="true" ><path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path></svg>
                        <div className='h-full'>Radiant</div>

                        <div className='grid grid-cols-4 lg:grid-rows-1 grid-rows-2 w-full lg:max-w-[800px] text-sm font-medium'>
                            <div className='flex flex-col space-y-6 lg:col-span-1 col-span-2'>
                                <div className='text-gray-900 font-medium'>Product</div>
                                <div>Pricing</div>
                                <div>Analysis</div>
                                <div>API</div>
                            </div>
                            <div className='flex flex-col space-y-6 lg:col-span-1 col-span-2'>
                                <div className='text-gray-900'>Company</div>
                                <div>Careers</div>
                                <div>Blog</div>
                                <div>Company</div>
                            </div>

                            <div className='flex flex-col space-y-6 lg:col-span-1 col-span-2 mt-8 lg:mt-0'>
                                <div className='text-gray-900'>Support</div>
                                <div>Help Center</div>
                                <div>Community</div>
                            </div>
                            <div className='flex flex-col space-y-6 lg:col-span-1 col-span-2 mt-8 lg:mt-0'>
                                <div className='text-gray-900'>Company</div>
                                <div>Terms of service</div>
                                <div>Privacy policy</div>                            </div>
                        </div>


                    </div>
                    {/* <div className='border border-slate-100 w-full'> */}
                        <div className=' flex justify-between items-center flex-row flex-wrap  max-w-[1240px] w-full pt-8 pb-2 mt-8 relative'>
                             <svg viewBox="0 0 15 15" className='w-4 h-4 absolute top-4 -left-2 fill-black/10' aria-hidden="true" ><path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path></svg>
                <svg viewBox="0 0 15 15" className='w-4 h-4 absolute top-4 -right-4 fill-black/10' aria-hidden="true" ><path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path></svg>
                <svg viewBox="0 0 15 15" className='w-4 h-4   absolute top-[4rem] -left-2 fill-black/10' aria-hidden="true" ><path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path></svg>
                <svg viewBox="0 0 15 15" className='w-4 h-4 absolute top-[4rem] -right-4 fill-black/10' aria-hidden="true" ><path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path></svg>
                <svg viewBox="0 0 15 15" className='w-4 h-4 absolute top-[4rem] right-24 fill-black/10' aria-hidden="true" ><path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path></svg>
                <svg viewBox="0 0 15 15" className='w-4 h-4 absolute top-[4rem] left-[7rem] fill-black/10' aria-hidden="true" ><path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path></svg>
                <svg viewBox="0 0 15 15" className='w-4 h-4 absolute top-4 right-24 fill-black/10' aria-hidden="true" ><path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path></svg>
                <svg viewBox="0 0 15 15" className='w-4 h-4 absolute top-4 left-[7rem] fill-black/10' aria-hidden="true" ><path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path></svg>
                            {/* <div className='w-full w-max-[1240px] flex flex-row justify-between '> */}
                            <div className='text-sm'>2025 Radiant Inc.</div>
                            <div className='flex flex-row h-full w-[100px] justify-between'>
                                <div>X</div>
                                <div>X</div>
                                <div>X</div>
                            {/* </div> */}
                            </div>
                        </div>
                    {/* </div> */}
                    </div>
                </section>
            </div>

        </div>
    );
}

export default Footer; Footer