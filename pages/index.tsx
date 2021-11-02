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
import { SectionText } from '../components/sectionText';

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
        <h2 className="text-center text-ebonyclay text-2xl">
          Reliable cloud consulting services.       
        </h2>
      </Header>
      <section>
        <div className="flex my-4 justify-center">
          <SectionText text="Robust cloud solutions by Mozstro." />
        </div>
        <div className="flex bg-rollingstone p-2 xl:p-6 rounded inline-flex flex-wrap xl:flex-nowrap justify-center">
          <ServiceCard
            title="Migration. Security. Infrastructure Management"
          >
            <p className="font-serif text-sundance bg-ebonyclay shadow px-4 py-2 lg:px-6 text-md lg:text-xl">
              As leading cloud consultants operating from the UK, we start by understanding your technology, goals,
              and challenges before providing solutions to help you on your cloud journey.
            </p>
            <p className="font-serif text-sundance bg-ebonyclay shadow px-4 py-2 lg:px-6 text-md lg:text-xl">
              Whether you need cloud migration, security, or cloud infrastructure management consulting,
              we’ll guide you through from start to finish.
            </p>
          </ServiceCard>
          <ServiceCard
            title="Cloud Consulting & Training."
          >
            <p className="font-serif text-sundance bg-ebonyclay shadow px-4 py-2 lg:px-6 text-md lg:text-xl">
              Our team of cloud experts will work as an extension of your enterprise, providing best-in-class cloud strategies to bring your projects to completion.
            </p>
            <p className="font-serif text-sundance bg-ebonyclay shadow px-4 py-2 lg:px-6 text-md lg:text-xl">
              With our cloud solutions, you can increase your team’s productivity through onboarding and training.
            </p>
            <p className="font-serif text-sundance bg-ebonyclay shadow px-4 py-2 lg:px-6 text-md lg:text-xl">
              We’re here to help you unlock your IT cloud potentials.
            </p>
          </ServiceCard>
        </div>
      </section>
      <section>
        <div className="flex my-4 justify-center">
          <SectionText text="Why choose us?" />
        </div>
        <div className="grid bg-hippiegreen rounded p-6 grid-cols-1 xl:grid-cols-3 gap-12">
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
      </section>
      <section>
        <div className="flex my-4 justify-center">
          <SectionText text="Contact us." />
        </div>
        <div className="bg-rollingstone rounded p-6">
          <div className="bg-ebonyclay p-4 sm:p-6">
            <p className="font-serif py-1 text-md lg:text-xl text-sundance">
              Have a cloud-related project in mind?
            </p>
            <p className="font-serif py-1 text-md lg:text-xl text-sundance">
              Mozstro cloud consulting team can help.
            </p>
            <p className="font-serif py-1 text-md lg:text-xl text-sundance">
              We’ll assist you in optimizing your cloud security so that you can take advantage of the immense potentials of your cloud infrastructure.
            </p>
            <p className="font-serif py-1 text-md lg:text-xl text-sundance">
              Fill out and submit the form below or contact us today via phone or email and we’ll be happy to help.
            </p>
          </div>
          <CallToAction link="mailto:elliot@mozstro.com" text="Find out more" />
        </div>
      </section>
      <section>
        <div className="flex my-4 justify-center">
          <SectionText text="Out latest work." />
        </div>
        <div className="grid grid-cols-1">
          <ProjectCard key={project.slug} project={project} />
        </div>
      </section>
      <section className="mt-10 mb-8">
        <div className="flex flex-wrap px-5 mx-auto">
          <div className="w-full xl:w-1/2">
            <SectionText text="What we are talking about right now." />
            <PostCard post={post} />
          </div>
          <div className="flex xl:pl-8 flex-col justify-evenly w-full xl:mt-2 xl:w-1/2">
            <div className="flex mb-4 justify-end ">
              <SectionText text=" Get in touch!" />
            </div>
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
