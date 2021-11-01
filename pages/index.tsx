import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { faCloud, faPoll, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { ServiceCard } from '../components/serviceCard';
import { PostCard } from '../components/postCard';
import { CallToAction } from '../components/callToAction';
import Layout from '../components/layout';
import { Header } from '../components/header';
import { getLatestPost } from './api/posts';
import { PostType } from '../types/post';
import { getLatestProject } from './api/projects';
import { ProjectCard } from '../components/projectCard';
import { ProjectType } from '../types/project';
import { ChooseCard } from '../components/chooseCard';
import ContactForm from '../components/contactForm';
import Certification from '../components/certification';

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
        title="Mozstro - Home"
      />
      <Header>
        <h1 className="text-4xl lg:text-7xl text-center text-ebonyclay">
          
          <a
            className="font-bold italic text-sundance hover:text-ebonyclay cursor-pointer"
            href="/"
            rel="noopener noreferrer"
          >
            &nbsp;Mozstro&nbsp;
          </a>
        </h1>
        <h2 className="text-center text-ebonyclay text-xl lg:text-2xl">
          <span className="text-sundance">Reliable Cloud Consulting Services.
          </span>
          {' '}
          Your Secure Cloud Journey Starts Here.
        </h2>
      </Header>
      <section>
        <div className="flex justify-center">
          <h3
            className="text-ebonyclay text-4xl bg-geebung inline-block p-6 mt-6 lg:mt-2 mb-4
                       text-ebonyclay transform -rotate-2 shadow-lg"
          >           
            Robust Cloud Solutions By
            <a
              className="font-bold italic text-palesky hover:text-ebonyclay"
              href="/"
              rel="noopener noreferrer"
            >
              {' '}
              Mozstro
            </a>
            .
          </h3>
        </div>
        <div className="flex bg-rollingstone py-6 p-2 xl:p-6 rounded inline-flex flex-wrap xl:flex-nowrap justify-center my-9">
          <ServiceCard
            title="Migration. Security. Infrastructure Management"
            paragraph="As leading cloud consultants operating from the UK, we start by understanding your technology, goals, 
            and challenges before providing solutions to help you on your cloud journey. 
            Whether you need cloud migration, security, or cloud infrastructure management consulting, 
            we’ll guide you through from start to finish."
          />
          <ServiceCard
            title="Cloud Consulting & Training."
            paragraph="Our team of cloud experts will work as an extension of your enterprise, providing best-in-class cloud strategies to bring your projects to completion. With our cloud solutions, you can increase your team’s productivity through onboarding and training. We’re here to help you unlock your IT cloud potentials."
          />
        </div>
        <div className="flex justify-center">
          <h3
            className="text-ebonyclay text-4xl bg-geebung inline-block p-6 mb-4
                     text-ebonyclay transform -rotate-2 shadow-lg"
          >
           Why choose us?
          </h3>
        </div>
        <div className="grid bg-hippiegreen rounded p-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-9 gap-12">
          <ChooseCard
            title="Experience"
            text="Mozstro professional cloud consultants have the experience to help you scale and secure your cloud technologies."
            icon={faCloud}
          />
          <ChooseCard
            title="Result-driven"
            text="We have a track record of success implementing cloud strategies and driving cloud adoption ROI."
            icon={faPoll}
          />
          <ChooseCard
            title="Cost-effective"
            text="We deliver cost-effective cloud consulting solutions for businesses and organisations around the world."
            icon={faMoneyBillAlt}
          />
        </div>
        <div className="bg-equator rounded p-6">
          <h6 className="mb-2 text-3xl text-ebonyclay">
            Want to take advantage of cloud? Your business needs
            <span className="text-hippiegreen"> supercharged </span>
            {' '}
            cloud
            <span className="text-hippiegreen"> security.</span>
          </h6>
          <CallToAction link="mailto:elliot@mozstro.com" text="Find out more" />
        </div>
      </section>
      <section className="mt-10">
        <h3
          className="text-ebonyclay order-1 text-2xl text-4xl bg-geebung inline-block
                p-6 text-ebonyclay shadowd transform -rotate-2"
        >
          Our latest work.
        </h3>
        <div className="grid grid-cols-1 mt-6">
          <ProjectCard key={project.slug} project={project} />
        </div>
      </section>
      <section className="mt-10 mb-8">
        <div className="flex flex-wrap px-5 mx-auto">
          <div className="w-full xl:w-1/2">
            <h3
              className="text-ebonyclay order-1 text-4xl bg-geebung inline-block mb-6
                p-6 text-ebonyclay transform shadowd -rotate-2"
            >
              What we are talking about right now.
            </h3>
            <PostCard post={post} />
          </div>
          <div className="flex flex-col justify-evenly w-full xl:w-1/2">
            <div className="flex justify-end ">
              <h3
                className="lg:text-right text-ebonyclay order-3 lg:order-2 text-4xl bg-geebung
                   inline-block mt-1 p-6 shadowd text-ebonyclay transform rotate-2"
              >
                Who have we worked with?
              </h3>
            </div>
            <div className="flex flex-col md:pl-12 mt-8 lg:mt-12 justify-between">
              <h3
                className="sm:text-3xl text-2xl fontedium bg-equator
                           text-ebonyclay inline-block p-2"
              >
                Experience working with:
              </h3>
              <ul className="pl-12 border-2 border-bg-ebonyclay p-6 flex flex-wrap list-disc">
                <li className="font-serif text-rollingstone font-bold mb-1 w-full md:w-1/2">
                  Industry leading retailers.
                </li>
                <li className="font-serif text-rollingstone font-bold mb-1 w-full md:w-1/2">
                  Uk's Largest public sector organization.
                </li>
                <li className="font-serif text-rollingstone font-bold mb-1 w-full md:w-1/2">
                  Titan supermarkets.
                </li>
                <li className="font-serif text-rollingstone font-bold mb-1 w-full md:w-1/2">
                  Powerhouse sports teams.
                </li>
              </ul>
              <p className="text-center mt-4 text-lg">
                Further details on some of these projects can be found
                <a
                  className="text-sundance hover:text-ebonyclay cursor-pointer"
                  href="/work"
                >
                 &nbsp;here
                </a>
                !
              </p>
              <h3 className="text-center text-ebonyclay mb-3 mt-16 lg:mt-24 text-5xl">
                Get in touch!
              </h3>
              <ContactForm />
            </div>
            <Certification />
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
