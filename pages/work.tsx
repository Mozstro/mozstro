import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import Layout from '../components/layout';
import { ProjectCard } from '../components/projectCard';
import { Header } from '../components/header';
import { ProjectType } from '../types/project';
import { getAllProjects } from './api/projects';

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
        <span>Work with </span>
        <a
          className="font-bold italic text-sundance hover:text-ebonyclay cursor-pointer"
          href="/"
          rel="noopener noreferrer"
        >
          Mozstro.
        </a>
      </h1>
      <h2 className="text-center text-sundance text-2xl">
        How we've
        <span className="text-ebonyclay"> supercharged?</span>
      </h2>
    </Header>
    <h3
      className="text-ebonyclay text-4xl bg-geebung inline-block p-6 mt-6 lg:mt-0 mb-4
                   my-1 transform -rotate-2 shadow-md"
    >
      Previous work before
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
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 mt-12">
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
