import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { faCloud, faPoll, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import home from '../public/home.png';
import { ServiceCard } from '../components/serviceCard';

import Layout from '../components/layout';
import { Header } from '../components/header';
import { getLatestPost } from './api/posts';
import { PostType } from '../types/post';
import { getLatestProject } from './api/projects';
import { ProjectCard } from '../components/projectCard';
import { ProjectType } from '../types/project';
import { ChooseCard } from '../components/chooseCard';
import ContactForm from '../components/contactForm';
import { SectionText } from '../components/sectionText';
import { CallToAction } from '../components/callToAction';
import Link from 'next/link';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type HomeProps = {
  post: PostType;
  project: ProjectType;
};

export default function Home({
  post,
  project,
}: HomeProps) {
  return (
    <Layout>
      <NextSeo
        title="Mozstro Cloud Consulting - Home"
        description="Reliable Cloud Consulting Services. Your Secure Cloud Journey Starts Here."
      />
      <Header>
        <h1 className="text-4xl lg:text-7xl text-center text-ebonyclay">
          <Link  href="/">
          <a
            className="font-bold  text-sundance cursor-pointer"
            rel="noopener noreferrer"
          >
            Mozstro.
          </a>
          </Link>
        </h1>
        <h2 className="text-center text-sundance text-3xl">
          Reliable cloud consulting services.
        </h2>
      </Header>
       <section>
         
        <div className="mt-10 flex bg-rollingstone xl:p-6 rounded inline-flex flex-wrap xl:flex-nowrap justify-center">
          <div className="bg-hippiegreen rounded shadow border-ebonyclay
                  p-2 m-4 z-10"
          >
            <h3 className="text-2xl lg:text-4xl bg-sundance mt-4 mx-2 p-4 text-ebonyclay font-bold mt-0">
              Exclusive Mozstro service model.
            </h3>
            <div className="flex flex-wrap justify-center xl:flex-nowrap m-4">
              <div className="object-cover md:max-w-xl lg:mr-4 rounded-3xl">
                <Image
                  src={home}
                  alt="Home Mozstro image"
                  width={1400}
                  height={1000}
                  priority
                />
              </div>
              <div className="mt-4 xl:mt-20">
                <p className="font-serif text-sundance bg-ebonyclay shadow px-4 pt-6 py-2 lg:px-6 text-md lg:text-xl">
                  Our team of cloud experts will work as an extension of your enterprise,
                  solving your toughest challenges placing you on the path to digital success.
                </p>
                <p className="font-serif text-sundance bg-ebonyclay shadow px-4 py-2 lg:px-6 text-md lg:text-xl">
                  Providing business value is at the core of our service model.
                </p>
                <div className="bg-equator text-center">
                  <CallToAction text="Discover our model" link="/service-model" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section>
         <div className="mb-6 mt-6 text-center justify-center">
          <SectionText text="How we do it." />
          <div className='flex text-left flex-col'>
            <details className='details_home lg:p-8' open>
            <summary className="text-sundance font-bold shadow p-4 text-4xl lg:text-8xl">
              P<span className='hidden'>athfinding</span>
            </summary>
           <ServiceCard
          title="Discovery."
        >
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 pt-4 pb-2 lg:px-6 text-md lg:text-xl">
           We work with your business and take your problems and ideas through our discovery process. 
This consists of creating demonstrable deliverables which are estimable. Then action is taken to bring your vision into a reality. 
It is important we understand your business and how we can add value. This is achieved by performing effective discovery in the early stages of a project coming into fruition. 
          </p>
        </ServiceCard>
          <ServiceCard
          title="Agile delivery."
        >
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 pt-4 pb-2 lg:px-6 text-md lg:text-xl">
          We understand Agile and have experience working with this across a wide variety of project types. 

The implementation will always be tailed to suit the needs of the project at hand. 

We take pride in building highly performant teams and ensuring collaboration is at the forefront of all work produced.
          </p>

        </ServiceCard>
          <ServiceCard
          title="Cloud native solutions."
        >
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 pt-4 pb-2 lg:px-6 text-md lg:text-xl">
            Our solutions take a cloud-native approach by default. This means we can achieve a faster time to market and ensure reliability, scalability, and high performance. 

We opt for serverless, containers and manage services where sensible but are also capable to create custom solutions where required.


          </p>

        </ServiceCard>
          </details>
           <details className='details_home lg:p-8' open>
            <summary className=" text-sundance font-bold shadow p-4  text-4xl lg:text-8xl">
              U<span className='hidden'>pskill</span>
            </summary>
            <ServiceCard
          title="Architecture and technical strategy consulting."
        >
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 pt-4 pb-2 lg:px-6 text-md lg:text-xl">
            Getting architecture right can be difficult. We can help with this by advising and working closely with your team to ensure the right solution is architected. 
            It's important for us to really understand your pain points and how we can enable solving the big problems.
           </p>
        </ServiceCard>
          </details>
           <details className='details_home lg:p-8' open>
            <summary className=" text-sundance font-bold shadow p-4 text-4xl  lg:text-8xl ">
              B<span className='hidden'>uilders</span>
            </summary>
            <ServiceCard
          title="Cloud Migration."
        >
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 pt-4 pb-2 lg:px-6 text-md lg:text-xl">
           Allow Mozstro to guide you through the cloud, maintaining your business's cloud infrastructure.

Our Cloud solutions are consistent and highly scalable brought to you by Cloud native specialists.

Better yet our migration facilities create a hassle-free switch to the cloud for your business's systems.
           </p>
        </ServiceCard>
         <ServiceCard
          title="Cloud Security."
        >
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 pt-4 pb-2 lg:px-6 text-md lg:text-xl">
External threats are more prevalent than ever within the Cloud. We feel it is necessary to make sure you are in the safe hands of certified consults who will secure your place in the cloud by adhering to best practices. Protecting your data, infrastructure and the integrity of your code will give you peace of mind you and your business need.
           </p>
        </ServiceCard>
         <ServiceCard
          title="Full-stack Development."
        >
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 pt-4 pb-2 lg:px-6 text-md lg:text-xl">
          Having a strong team of Full stack engineers is vital within the Cloud which is why you are in safe hands with Mozstro.

We can become embedded in your existing project creating a high-class, diverse workforce. Something that we replicate in our company values. Or take full ownership of a new project and deliver from the ground up.
           </p>
        </ServiceCard>
          </details>
          </div>
        </div>
      </section>  
      <section>
        <div className="flex mt-4 mb-8 justify-center">
          <SectionText text="What we bring." />
        </div>
        <div className="grid bg-hippiegreen justify-items-center py-10 text-center rounded p-6 grid-cols-1 md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <ChooseCard
              title="Experience"
              text="Mozstro professional cloud consultants have the experience to help you scale and secure your cloud technologies."
              icon={faCloud as IconProp}
            />
          </div>
          <div className="lg:w-3/4">
            <ChooseCard
              title="Result-driven"
              text="We have a track record of success implementing cloud strategies and driving cloud adoption ROI."
              icon={faPoll as IconProp}
            />
          </div>
          <div className="lg:w-2/4 md:col-span-2">
            <ChooseCard
              title="Cost-effective"
              text="We deliver cost-effective cloud consulting solutions for businesses and organisations around the world."
              icon={faMoneyBillAlt as IconProp}
            />
          </div>
        </div>
      </section>
      <section>
         <div className="flex mt-16 mb-8 justify-center">
          <SectionText text="Want to see how we can add value first hand?" />
        </div>
        <div className="mt-10  flex justify-center rounded p-2">
          <div className="rounded p-4 bg-hippiegreen sm:p-6">
           
            <p className="font-serif py-1 text-lg lg:text-xl text-equator">
              Fill out and submit the form below and we will be in touch!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const post = getLatestPost(['date', 'description', 'slug', 'title', 'topic']);
  const project = getLatestProject(['date', 'description', 'slug', 'title', 'sector']);

  return {
    props: {
      post,
      project,
    },
  };
};
