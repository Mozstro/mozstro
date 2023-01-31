import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import Layout from '../components/layout';
import { ProjectCard } from '../components/projectCard';
import { Header } from '../components/header';
import { ProjectType } from '../types/project';
import { getAllProjects } from './api/projects';
import { SectionText } from '../components/sectionText';

type WorkProps = {
  projects: ProjectType[];
};

export const Work = ({ projects }: WorkProps): JSX.Element => (
  <Layout>
    <NextSeo
      title="Mozstro Cloud Consulting - Work"
      description="View our work and see what projects we have delivered."
    />
    <Header>
      <h1 className="text-4xl font-bold lg:text-7xl text-center text-sundance">
        Work.
      </h1>
      <h2 className="text-center text-sundance text-3xl">
        Helping You Take Advantage Of Cloud.
      </h2>
    </Header>
    <div>
       <article className='mb-10 md:mt-16'>
        <div className='text-center md:text-left'>   
          <SectionText text="Our mission." />
          </div>
          <div className="bg-hippiegreen rounded p-4 m-4 shadow-md">
            <p className="text-rolling-stone px-4 my-4 text-xl">
             To provide clients with unparalleled cloud security solutions through expert consultation and cutting-edge technology, while maintaining the highest standards of ethics and privacy.
            </p>

          </div>
        </article>
    </div>
    <div className="flex my-8 justify-center">
      <SectionText text="Previous work." />
    </div>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjects(['date', 'description', 'slug', 'title', 'sector']);

  return {
    props: { projects },
  };
};

export default Work;
