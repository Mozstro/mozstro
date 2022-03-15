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
        description="Reliable Cloud Consulting Services. Your Secure Cloud Journey Starts Here."
      />
      <Header>
        <h1 className="text-4xl lg:text-7xl text-center text-ebonyclay">
          <a
            className="font-bold  text-sundance cursor-pointer"
            href="/"
            rel="noopener noreferrer"
          >
            Mozstro.
          </a>
        </h1>
        <h2 className="text-center text-sundance text-3xl">
          Reliable cloud consulting services.
        </h2>
      </Header>
      <section>
        <div className="flex my-4 justify-center">
          <SectionText text="What we offer." />
        </div>
        <div className="flex bg-rollingstone p-2 xl:p-6 rounded inline-flex flex-wrap xl:flex-nowrap justify-center">
          <ServiceCard
            title="Digital transformation."
          >
            <p className="font-serif text-sundance bg-ebonyclay shadow px-4 py-2 lg:px-6 text-md lg:text-xl">
              As leading cloud consultants based in Leeds, Uk, we start by understanding your technology, goals,
              and challenges before providing solutions to help you on your cloud journey.
            </p>
            <p className="font-serif text-sundance bg-ebonyclay shadow px-4 py-2 lg:px-6 text-md lg:text-xl">
              Whether you need cloud migration, cloud security, or cloud application consulting,
              we’ll guide you through from start to finish.
            </p>
          </ServiceCard>
          <ServiceCard
            title="Exclusive Mozstro service model."
          >
            <p className="font-serif text-sundance bg-ebonyclay shadow px-4 py-2 lg:px-6 text-md lg:text-xl">
              Our team of cloud experts will work as an extension of your enterprise,
              solving your toughest challenges placing you on the path to digital success.
            </p>
            <p className="font-serif text-sundance bg-ebonyclay shadow px-4 py-2 lg:px-6 text-md lg:text-xl">
              Providing business value is at the core of our service model.
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
        <div className="grid my-12 grid-cols-1 lg:grid-cols-2">
          <div>
            <SectionText text="What we are talking about right now." />
            <div className="mt-4">
              <PostCard post={post} />
            </div>
          </div>
          <div className="my-8 lg:my-0 lg:ml-8">
            <SectionText text="Our latest work." />
            <div className="my-4">
              <ProjectCard key={project.slug} project={project} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:mt-4 flex justify-center rounded p-2">
          <div className="p-4 bg-hippiegreen sm:p-6">
            <h3 className="font-bold py-1 text-xl lg:text-2xl text-equator">
              Find out what we bring to the table.
            </h3>
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
