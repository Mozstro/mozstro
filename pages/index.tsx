import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { faCloud, faPoll, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import serviceModel from '../public/service-model.png';
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
          Secure your digital world with our cloud expertise.
        </h2>
      </Header>
       <section>
         
        <div className="mt-10 flex bg-rollingstone xl:p-6 rounded inline-flex flex-wrap xl:flex-nowrap justify-center">
          <div className="bg-hippiegreen rounded shadow border-ebonyclay
                  p-2 m-4 z-10"
          >
            <h3 className="text-2xl lg:text-4xl bg-sundance mt-4 mx-4 p-4 text-ebonyclay font-bold mt-0">
              Exclusive Mozstro service model.
            </h3>
            <div className="flex flex-wrap justify-center xl:flex-nowrap m-4">
              <div className="object-cover w-full relative md:max-w-xl lg:mr-4 rounded-3xl">
                <Image
                  src={serviceModel}
                  alt="Home Mozstro image"
                  width={1400}
                  height={800}
                  priority
                />
              </div>
              <div className="mt-4 xl:mt-10">
                <p className="font-serif text-sundance bg-ebonyclay shadow px-4 pt-6 py-2 lg:px-6 text-md lg:text-xl">
                Unlock digital success with our team of expert cloud specialists, acting as a seamless extension of your business to conquer even your toughest challenges. Driving business value is at the heart of our service approach.
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
           We work with your business, take your problems and ideas through our discovery process. 
          This consists of creating demonstrable deliverables which are estimated. Then action is taken to bring your vision into a reality. 
          It is important we understand your business and how we can add value. 
          Effective discovery is key for success in the early stages of a project coming into fruition. 
          </p>
        </ServiceCard>
          <ServiceCard
          title="Agile delivery."
        >
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 pt-4 pb-2 lg:px-6 text-md lg:text-xl">
          On a project-by-project basis, we employ the appropriate agile technique. Every implementation will be customised to meet the requirements of the current project. We take pleasure in forming highly effective teams and making sure that teamwork is at the heart of all work done.
          </p>
        </ServiceCard>
          <ServiceCard
          title="Cloud native solutions."
        >
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 pt-4 pb-2 lg:px-6 text-md lg:text-xl">
            By default, our products use a cloud-native strategy. As a result, we can provide dependability, scalability, and high performance while reducing the time to market. Where appropriate, we choose serverless functions, managed services, and containers. 
            Our licenced experts are capable of selecting the best services for the task.

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
            Getting architecture right can be tricky. By offering advice and collaborating closely with your team to ensure that the ideal solution is architected, we can assist with this. It's critical for us to fully comprehend your challenges and how we might help in their resolution.
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
Allow Mozstro to manage the cloud infrastructure for your company while guiding you through it. We deliver consistent, highly scalable cloud solutions from cloud native experts. Even better, our migration services make it simple for your company's systems to migrate to the cloud.
           </p>
        </ServiceCard>
         <ServiceCard
          title="Cloud Security."
        >
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 pt-4 pb-2 lg:px-6 text-md lg:text-xl">
            Within the Cloud, external risks are more common than ever. We believe it is essential to ensure that you are in the capable hands of professional consultants who will protect your position in the cloud by following best practises. You and your company will benefit from the piece of mind that comes with safeguarding your data, infrastructure, and code integrity.
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
              text="You can scale and safeguard your cloud technology with the help of Mozstro's qualified cloud experts."
              icon={faCloud as IconProp}
            />
          </div>
          <div className="lg:w-3/4">
            <ChooseCard
              title="Result-driven"
              text="We have a proven track record of putting cloud adoption tactics into practise and increasing ROI."
              icon={faPoll as IconProp}
            />
          </div>
          <div className="lg:w-2/4 md:col-span-2">
            <ChooseCard
              title="Cost-effective"
              text="For companies and organisations around the world, we provide cost-effective cloud consulting solutions."
              icon={faMoneyBillAlt as IconProp}
            />
          </div>
        </div>
      </section>
      <section>
         <div className="flex mt-16 mb-8 justify-center">
          <SectionText text="Want to experience first-hand how we can create value?" />
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
