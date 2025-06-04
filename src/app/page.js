import React from 'react';
import Heading from '@radui/ui/Heading';
import Text from '@radui/ui/Text';
import Button from '@radui/ui/Button';  
import Image from 'next/image';

function page(props) {
  return (
    <div>
      <div className='w-full h-screen bg-slate-900 rounded-3xl flex flex-col justify-center items-start space-y-4 pl-8'>
          <p className="text-9xl font-semibold">Close every deal.</p>
          <Text className="!text-2xl max-w-lg">
            Radiant helps you sell more by revealing sensitive information about your customers.
          </Text>
          <div className='pt-8'>
            <Button className="!bg-gray-1000 !text-slate-100 !rounded-3xl !p-4 !pt-5 !pb-5">
              Get Started
            </Button>
            <Button className="!bg-gray-1000 !text-slate-100 !rounded-3xl !p-4 !pt-5 !pb-5">
              See pricing 
            </Button>
          </div>
      </div>


      <section className='flex flex-row p-8 lg:text-5xl text-3xl justify-between flex-wrap'>
        <div>logo</div>
        <div>logo</div>
        <div>logo</div>
        <div>logo</div>
        <div>logo</div>
      </section>


      <section className='max-w-[1240px] mx-auto p-8'>
        <p className='text-4xl max-w-md'>A snapshot of your entire sales pipeline.</p>
        <div className='p-2 bg-gray-100 rounded-3xl'>
        <Image src="/images/app.png" alt="" height={500} width={1240} className='rounded-3xl border border-gray-400'/>
        </div>
      </section>

      <section className='max-w-[1240px] mx-auto p-8'>
        <p className='text-4xl max-w-md'>Know more about your customers than they do.</p>
      </section>
    </div>
  );
}

export default page;