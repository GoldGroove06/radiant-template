import React from 'react';
import Heading from '@radui/ui/Heading';
import Text from '@radui/ui/Text';
import Button from '@radui/ui/Button';  
import Image from 'next/image';

function page(props) {
  return (
    <div>
      <div className='w-full h-screen bg-slate-900 rounded-3xl flex flex-row justify-center items-start space-y-4 pl-8'>
        <div className='max-w-[1240px] flex flex-col items-start justify-center h-screen w-full'>
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

        <div className='grid lg:grid-cols-6 grid-rows-2 gap-4 mt-10 '>
            <div className='bg-gray-100 col-span-3 rounded-3xl h-[400px]'>1</div>
            <div className='bg-gray-100 col-span-3 rounded-3xl'>2</div>
            <div className='bg-gray-100  col-span-2 rounded-3xl h-[400px]'>3</div>
            <div className='bg-gray-100 col-span-2 rounded-3xl h-[400px]'>4</div>
            <div className='bg-gray-100  col-span-2 rounded-3xl h-[400px]'>5</div>
        </div>
      </section>


      <section className='h-full w-full bg-slate-900 rounded-3xl p-8'>
        <Text className="!text-sm ">Outreach</Text>
        <p className="text-5xl font-semibold text-slate-100 max-w-2xl">Customer outreach has never been easier.</p>
        <div className='grid lg:grid-cols-6 grid-rows-2 gap-4'>
          <div className='bg-gray-100 col-span-4 rounded-3xl h-[300px]'>1</div>
          <div className='bg-gray-100 col-span-2 rounded-3xl h-[300px]'>2</div>
          <div className='bg-gray-100 col-span-2 rounded-3xl h-[300px]'>3</div>
          <div className='bg-gray-100 col-span-4 rounded-3xl h-[300px]'>4</div>

        </div>

      </section>

      <section className='h-full w-full p-8'>
        <Text className="!text-sm ">What everyone is saying</Text>
        <p className="text-5xl font-semibold max-w-2xl">Trusted by professionals.</p>
        <div className='flex flex-row space-x-12 overlow-x-scroll w-full'>
            <div className='h-[400px] w-[300px] bg-gray-100 rounded-3xl'>1</div>
            <div className='h-[400px] w-[300px] bg-gray-100 rounded-3xl'>1</div>
            <div className='h-[400px] w-[300px] bg-gray-100 rounded-3xl'>1</div>
            <div className='h-[400px] w-[300px] bg-gray-100 rounded-3xl'>1</div>
            <div className='h-[400px] w-[300px] bg-gray-100 rounded-3xl'>1</div>
            <div className='h-[400px] w-[300px] bg-gray-100 rounded-3xl'>1</div>

        </div>
        <Text className="!text-sm max-w-sm">Join the best sellers in the business and start using Radiant to hit your targets today.</Text>
        <Button>Get started</Button>
      </section>
    </div>
  );
}

export default page;