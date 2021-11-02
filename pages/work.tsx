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
      title="Mozstro - Work"
    />
    <Header>
      <h1 className="text-4xl lg:text-7xl text-center text-ebonyclay">
        Work page.
      </h1>
      <h2 className="text-center text-sundance text-2xl">
        Helping You Take Advantage Of Cloud.
      </h2>
    </Header>
    <div className="flex my-4 justify-center">
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
