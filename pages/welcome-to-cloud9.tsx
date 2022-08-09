import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import { Header } from '../components/header';
import mozstro from '../public/mozstro_logo.png';
import Image from 'next/image';
import { CallToAction } from '../components/callToAction';
export default function Careers() {
  return (
    <Layout>
      <NextSeo
        title="Mozstro Cloud Consulting - Welcome to Cloud9"
        description="Your number one hub for all things Cloud computing!"
      />
  <header>
     <div className="flex justify-center">
        <Image
            className="rounded-full"
          src={mozstro}
          alt="Mozstro logo"
          width={96}
          height={96}
          
        />
      </div> 
    <h1 className="text-4xl font-bold lg:text-7xl text-center text-sundance">
          {"Welcome to Cloud{9}"}
        </h1>
        <h2 className='text-3xl mt-8 mb-2 text-center text-sundance'> Your number one hub for all things Cloud computing!</h2>
  </header>
      <section className="mt-8 xl:mt-10">
       
       <div className='flex mt-10 justify-center'>
          <Image
                  src={"/mozstro-board.jpg"}
                  alt="Cloud 9 bill board"
                  width={800}
                  height={400}
                  priority
                />
                </div>
                 <p className='text-2xl mt-20 mb-6 text-left text-sundance'>Our newsletter has been designed with our audience in mind. 
 </p>
 <p className='text-2xl my-0 text-left text-sundance'>Whether you are looking to dip your toes into the Cloud, 
          or you’re looking to refine your knowledge our content fits all skill groups. </p>
           <div className='text-center my-4'>
 <CallToAction text={`Enter Cloud{9} here!`} link={`https://www.linkedin.com/newsletters/6959985769700540416/`} />
           </div>
           

      </section>
    </Layout>
  );
}

