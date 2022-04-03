import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { faCloud, faPoll, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import home from '../public/home.png';
import { PostCard } from '../components/postCard';

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
        <div className="flex mt-8 mb-0 justify-center">
          <SectionText text="What we offer." />
        </div>
        <div className="flex bg-rollingstone p-2 xl:p-6 rounded inline-flex flex-wrap xl:flex-nowrap justify-center">
          <div className="bg-hippiegreen  rounded shadow border-ebonyclay
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
        <div className="flex my-4 justify-center">
          <SectionText text="What we bring." />
        </div>
        <div className="grid bg-hippiegreen justify-items-center py-10 text-center rounded p-6 grid-cols-1 md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <ChooseCard
              title="Experience"
              text="Mozstro professional cloud consultants have the experience to help you scale and secure your cloud technologies."
              icon={faCloud}
            />
          </div>
          <div className="lg:w-3/4">
            <ChooseCard
              title="Result-driven"
              text="We have a track record of success implementing cloud strategies and driving cloud adoption ROI."
              icon={faPoll}
            />
          </div>
          <div className="lg:w-2/4 md:col-span-2">
            <ChooseCard
              title="Cost-effective"
              text="We deliver cost-effective cloud consulting solutions for businesses and organisations around the world."
              icon={faMoneyBillAlt}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="grid lg:mb-8 mt-12 grid-cols-1 lg:grid-cols-2">
          <div>
            <SectionText text="Hot topic." />
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
