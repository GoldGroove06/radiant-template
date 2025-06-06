"use client";
import React, { useState } from 'react';
import Heading from '@radui/ui/Heading';
import Text from '@radui/ui/Text';
import Button from '@radui/ui/Button';
import Image from 'next/image';
import GridCard from '@/components/GridCard';
import GridCard2 from '@/components/GridCard2';
import ImageCard from '@/components/ImageCard';
import Link from 'next/link';

const Radui = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="60" viewBox="0 0 211 109" fill="none"><path d="M15.0469 77H4.17188C3.92188 77 3.79688 76.8438 3.79688 76.5312L3.98438 10.5781C3.98438 10.3281 4.10938 10.2031 4.35938 10.2031H23.7656C27.2344 10.2031 30.4219 11.0469 33.3281 12.7344C36.2344 14.4219 38.5469 16.6875 40.2656 19.5312C42.0156 22.375 42.8906 25.5937 42.8906 29.1875C42.8906 31.5312 42.5312 33.6562 41.8125 35.5625C41.0938 37.4688 40.25 39.0781 39.2812 40.3906C38.3438 41.7031 37.4844 42.6719 36.7031 43.2969C40.1719 47.1406 41.9062 51.6562 41.9062 56.8438L42 76.5312C42 76.8438 41.8438 77 41.5312 77H30.6562C30.4062 77 30.2812 76.9062 30.2812 76.7188V56.8438C30.2812 54.5312 29.4688 52.5312 27.8438 50.8438C26.2188 49.1562 24.2188 48.3125 21.8438 48.3125H15.5156L15.4219 76.5312C15.4219 76.8438 15.2969 77 15.0469 77ZM23.7656 21.6875H15.5156V36.7812H23.7656C25.7344 36.7812 27.4844 36.0469 29.0156 34.5781C30.5781 33.1094 31.3594 31.3125 31.3594 29.1875C31.3594 27.1563 30.6094 25.4062 29.1094 23.9375C27.6094 22.4375 25.8281 21.6875 23.7656 21.6875ZM46.875 76.5312L58.7812 10.5781C58.8438 10.3281 59 10.2031 59.25 10.2031H73.1719C73.4219 10.2031 73.5781 10.3281 73.6406 10.5781L85.0781 76.5312C85.1094 76.8438 84.9844 77 84.7031 77H74.0625C73.75 77 73.5781 76.8438 73.5469 76.5312L72.5156 69.5H59.4375L58.4062 76.5312C58.375 76.8438 58.2188 77 57.9375 77H47.25C47 77 46.875 76.8438 46.875 76.5312ZM65.6719 32.2812L61.3594 59.2344H70.5938L66.6562 32.2812L66.0938 28.7188L65.6719 32.2812ZM108.75 76.9062L91.5469 77C91.2344 77 91.0781 76.8438 91.0781 76.5312L91.2656 10.5781C91.2656 10.3281 91.3906 10.2031 91.6406 10.2031L109.594 10.1094C113.156 10.0156 116.375 10.8281 119.25 12.5469C122.156 14.2656 124.469 16.5937 126.188 19.5312C127.938 22.4375 128.812 25.6563 128.812 29.1875V56.75C128.812 60.4375 127.922 63.8125 126.141 66.875C124.328 69.9062 121.922 72.3281 118.922 74.1406C115.922 75.9219 112.531 76.8438 108.75 76.9062ZM109.594 21.5938L102.891 21.6875L102.797 65.1875H108.75C111.125 65.1875 113.125 64.3594 114.75 62.7031C116.375 61.0469 117.188 59.0625 117.188 56.75V29.0938C117.188 27.0625 116.438 25.2969 114.938 23.7969C113.438 22.2656 111.656 21.5313 109.594 21.5938Z" fill="currentColor"></path><rect x="5" y="84" width="128" height="19" fill="currentColor"></rect><path d="M167.469 100.938C164.094 100.938 160.969 100.062 158.094 98.3125C155.219 96.5625 152.922 94.2188 151.203 91.2812C149.516 88.3125 148.672 85.0781 148.672 81.5781L148.859 33.5781C148.859 33.3281 148.984 33.2031 149.234 33.2031H160.016C160.266 33.2031 160.391 33.3281 160.391 33.5781V81.5781C160.391 83.7344 161.078 85.5781 162.453 87.1094C163.828 88.6094 165.5 89.3594 167.469 89.3594C169.531 89.3594 171.25 88.6094 172.625 87.1094C174 85.5781 174.688 83.7344 174.688 81.5781V33.5781C174.688 33.3281 174.812 33.2031 175.062 33.2031H185.844C186.094 33.2031 186.219 33.3281 186.219 33.5781L186.406 81.5781C186.406 85.1094 185.562 88.3594 183.875 91.3281C182.156 94.2656 179.875 96.6094 177.031 98.3594C174.188 100.078 171 100.938 167.469 100.938ZM205.297 100H194.422C194.109 100 193.953 99.8438 193.953 99.5312L194.047 33.5781C194.047 33.3281 194.172 33.2031 194.422 33.2031H205.203C205.453 33.2031 205.578 33.3281 205.578 33.5781L205.672 99.5312C205.672 99.8438 205.547 100 205.297 100Z" fill="currentColor"></path><path d="M148 10H209V23H148V10Z" fill="currentColor"></path></svg>
)
function page(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className='w-full bg-gradient-to-r from-yellow-300 from-28% via-pink-700 via-70% to-purple-800 sm:bg-gradient-to-r rounded-3xl flex flex-row justify-center lg:items-start items-center space-y-4 lg:pl-8 p-4 lg:p-0'>
        <div className='max-w-[1240px] flex flex-col items-start justify-center pt-16 lg:pb-48 pb-28 space-y-8  w-full'>
          <>
            <nav className=' flex flex-row justify-center  lg:items-center items-start w-full mb-48'>
              <div className='flex lg:flex-row flex-col lg:items-center justify-between max-w-[1240px] w-full pl-8 pr-8   '>
                <div className='flex flex-row justify-between max-w-[1240px] w-full lg:items-center'>
                  <div className='text-3xl font-bold'>
                    Radiant
                  </div>

                  <div className={` flex hidden lg:block lg:flex-row flex-col space-x-6  text-slate-1000 bg-tranparent  `}>
                    <Link href="/pricing" className={`hover:text-teal-900 pb-3 `}>Pricing</Link>
                    <Link href="/company" className={`hover:text-teal-900 pb-3 `}>Company</Link>
                    <Link href="/blog" className={`hover:text-teal-900 pb-3 `}>Blog</Link>
                    <Link href="/login" className={` pb-3 `}>Login</Link>
                  </div>
                  <div className='lg:hidden block'>
                    <button className={``}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      open
                    </button>
                  </div>
                </div>
                <div className={`lg:hidden ${isOpen ? "block" : "hidden"} z-0 mt-8`}>

                  <div className={`flex flex-col space-y-1  text-slate-1000 bg-tranparent  `}>
                    <Link href="/pricing" className={`hover:text-teal-900 pb-3 `}>Pricing</Link>
                    <Link href="/company" className={`hover:text-teal-900 pb-3 `}>Company</Link>
                    <Link href="/blog" className={`hover:text-teal-900 pb-3 `}>Blog</Link>
                    <Link href="/login" className={` pb-3 `}>Login</Link>
                  </div>


                </div>




              </div>

            </nav>
          </>
          <p className="lg:text-9xl text-6xl font-semibold">Close every deal.</p>
          <Text className="!text-2xl max-w-lg">
            Radiant helps you sell more by revealing sensitive information about your customers.
          </Text>
          <div className=' w-full md:space-x-4 space-y-4 md:space-y-0'>
            <Button className="!bg-gray-1000 !text-slate-100 !rounded-3xl !p-4 !pt-5 !pb-5 w-full md:w-28">
              Get Started
            </Button>
            <Button className="!bg-white/20 backdrop-blur-md border border-white/50 shadow-lgbg-slate-800 opacity-90 !text-gray-1000 !rounded-3xl !p-4 !pt-5 !pb-5 w-full md:w-32">
              See pricing
            </Button>
            {/* <Button customRootClass="landing-button" className="bg-white/20 backdrop-blur-md border border-white/50 shadow-lgbg-slate-800 opacity-90 text-gray-1000 rounded-3xl p-4 !pt-5 pb-5 w-full lg:w-28">
              See pricing 
            </Button> */}
          </div>
        </div>
      </div>


      <section className='flex flex-row p-8 lg:text-5xl space-x-4 text-4xl justify-between flex-wrap max-w-[1240px] mx-auto'>
        <Radui />
        <Radui />
        <Radui />
        <Radui />
        <Radui />
      </section>


      <section className='lg:max-w-[1240px] lg:mx-auto flex flex-col mt-16 p-6 overflow-hidden'>
        <p className='lg:text-6xl text-4xl font-semibold max-w-3xl'>A snapshot of your entire sales pipeline.</p>
        <div className='p-2 bg-slate-100 border border-gray-300 rounded-2xl mt-12 lg:w-full w-[200%] '>
          <Image src="/images/app.png" alt="" height={500} width={1240} className='rounded-2xl border border-gray-400' />
        </div>
      </section>

      <section className='max-w-7xl mx-auto mt-32 p-6'>
        <Text className="!text-sm ">Sales</Text>
        <p className='text-6xl font-semibold max-w-3xl'>Know more about your customers than they do.</p>

        <div className='grid lg:grid-cols-6 grid-rows-2 gap-4 mt-10 '>
          <GridCard ClassName='col-span-3 lg:rounded-tl-3xl ' supTitle="Insight" title="Get perfect clarity" description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more." image={"/images/app.png"} />
          <GridCard ClassName='col-span-3 lg:rounded-tr-3xl' supTitle="Sales" title="Sales" description="Sales" image={"/images/app.png"} />
          <GridCard ClassName='lg:col-span-2 col-span-3 lg:rounded-bl-3xl' rounded='lg:rounded-bl-3xl' supTitle="Sales" title="Sales" description="Sales" image={"/images/app.png"} />
          <GridCard ClassName='lg:col-span-2 col-span-3' supTitle="Sales" title="Sales" description="Sales" image={"/images/app.png"} />
          <GridCard ClassName='lg:col-span-2 col-span-3 lg:rounded-br-3xl' rounded='lg:rounded-br-3xl' supTitle="Sales" title="Sales" description="Sales" image={"/images/app.png"} />

        </div>
      </section>


      <section className='h-full w-full bg-violet-1000 rounded-3xl mt-32  flex flex-row justify-center p-6'>
        <div className='max-w-[1240px] h-full w-full pt-32 pb-32'>


          <Text className="!text-sm text-gray-700">Outreach</Text>
          <p className="text-6xl font-semibold text-slate-100 max-w-4xl mb-16">Customer outreach has never been easier.</p>
          <div className='grid lg:grid-cols-6 grid-rows-2 gap-4 mt-8'>
            <GridCard2 ClassName='col-span-4 lg:rounded-tl-3xl' supTitle="Networking" title="Sell at the speed of light" description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead." image={"/images/app.png"} />
            <GridCard2 ClassName='lg:col-span-2 col-span-4 lg:rounded-tr-3xl' supTitle="Integrations" title="Meet leads where they are" description="With thousands of integrations, no one will be able to escape your cold outreach." image={"/images/app.png"} />
            <GridCard2 ClassName='lg:col-span-2 col-span-4 lg:rounded-bl-3xl' rounded='lg:rounded-bl-3xl' supTitle="Meetings" title="Smart call scheduling" description="Automatically insert intro calls into your leads' calendars without their consent." image={"/images/app.png"} />
            <GridCard2 ClassName='col-span-4 lg:rounded-br-3xl' rounded='lg:rounded-br-3xl' supTitle="Engagement" title="Become a thought leader" description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader." image={"/images/app.png"} />

          </div>
        </div>
      </section>

      <section className='h-full w-full flex flex-col items-center justify-center mt-32 p-6 mb-32'>
        <div className='max-w-[1240px] h-full w-full '>
          <Text className="!text-sm !text-gray-900">What everyone is saying</Text>
          <p className="text-6xl font-semibold max-w-2xl">Trusted by professionals.</p>
        </div>
        <div className='flex flex-row items-start justify-start   snap-x w-full overflow-x-scroll mt-8'>
          <div className='flex flex-row space-x-12 p-8 min-w-[200%] snap-center'>
            <ImageCard content="Thanks to Radiant, we’re finding new leads that we never would have found with legal methods." />
            <ImageCard content="Thanks to Radiant, we’re finding new leads that we never would have found with legal methods." />
            <ImageCard content="Thanks to Radiant, we’re finding new leads that we never would have found with legal methods." />
            <ImageCard content="Thanks to Radiant, we’re finding new leads that we never would have found with legal methods." />
            <ImageCard content="Thanks to Radiant, we’re finding new leads that we never would have found with legal methods." />
            <ImageCard content="Thanks to Radiant, we’re finding new leads that we never would have found with legal methods." />

          </div>
        </div>
        <div className='flex flex-col max-w-[1240px] items-start h-full w-full space-y-4 mt-8'>
          <Text className="!text-md max-w-md">Join the best sellers in the business and start using Radiant to hit your targets today.</Text>
          <Button className="!p-0 !text-md">Get started</Button>
        </div>
      </section>
    </div>
  );
}

export default page;