import React from 'react';

import Layout from '../components/layout';
import { ProjectCard } from '../components/projectCard';
import { Header } from '../components/header';
import { ProjectType } from '../types/project';
import { GetStaticProps } from 'next';
import { getAllProjects } from './api/projects';

type WorkProps = {
  projects: ProjectType[];
};

export const Work = ({ projects }: WorkProps): JSX.Element => {
  return (
    <Layout>
      <Header>
        <h1 className="text-7xl text-center text-ebonyclay">
          <span>Work with </span>
          <a className="font-bold italic text-sundance hover:text-ebonyclay cursor-pointer"
             href="/"
             rel="noopener noreferrer">Mozstro.
          </a>
        </h1>
        <h2 className="text-center text-sundance text-2xl">
          How we've
          <span className="font-bold italic text-ebonyclay"> supercharged?</span>
        </h2>
      </Header>
      <h3
        className="text-ebonyclay text-4xl bg-geebung inline-block p-6 mt-6 lg:mt-0 mb-4
                   my-1 transform -rotate-2 shadow-md">World
        class businesses
        <span aria-label="love" className="text-sundance"> ♡</span>
        <a className="font-bold italic text-palesky hover:text-ebonyclay"
           href="/"
           rel="noopener noreferrer"> Mozstro!
        </a>
      </h3>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 mt-12">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project}/>
        ))}
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjects(['date', 'description', 'slug', 'title', 'sector']);

  return {
    props: { projects },
  };
};

export default Work;

