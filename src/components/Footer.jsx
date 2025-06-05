import React from 'react';
import Text from '@radui/ui/Text';
import Button from '@radui/ui/Button';

function Footer(props) {
    return (
        <div className='h-screen bg-gray-300 flex flex-col items-center justify-center p-2'>
            <div className='bg-slate-800 h-full w-full rounded-3xl flex flex-col justify-between pt-16 pb-16 justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <Text className="!text-sm ">Get started</Text>

                    <p className="text-5xl font-semibold text-slate-100">Ready to dive in?
                    </p>
                    <p className="text-5xl font-semibold text-slate-100">Start your free trial today.
                    </p>
                    <Text className="!text-sm">Get the cheat codes for selling and unlock your </Text>
                    <Text className="!text-sm ">team's revenue potential.</Text>

                    <Button className="!bg-gray-1000 !text-slate-100 !rounded-3xl !p-4 !pt-5 !pb-5">
                        Get Started
                    </Button>

                </div>
                <section className='border border-slate-100 justify-center items-center flex flex-col'>
                <div className=' flex lg:flex-row  flex-col  max-w-[1240px] w-full'>
                    <div className='flex-1'>Radiant</div>
                    <div className='flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <div>Product</div>
                        <div>Pricing</div>
                        <div>Analysis</div>
                        <div>API</div>
                    </div>
                    <div className='flex flex-col'>
                        <div>Product</div>
                        <div>Pricing</div>
                        <div>Analysis</div>
                        <div>API</div>
                    </div>
                    </div>
                    <div className='flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <div>Product</div>
                        <div>Pricing</div>
                        <div>Analysis</div>
                        <div>API</div>
                    </div>
                    <div className='flex flex-col'>
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