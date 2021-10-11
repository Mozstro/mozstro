import React from 'react';

import { Header } from '../components/header';
import Layout from '../components/layout';

export default function Videos() {
  return (
    <Layout>
      <Header>
        <h1 className="text-7xl text-center text-ebonyclay">
          <span>Watch</span>
          <a
            className="font-bold italic text-sundance hover:text-ebonyclay cursor-pointer"
            href="/"
            rel="noopener noreferrer"
          >
            {' '}
            Mozstro
          </a>
          {' '}
          in action.
        </h1>
        <h2 className="text-center text-ebonyclay text-2xl">
          Behind scenes of a tech consultancy. Come be a part of our journey.
        </h2>
      </Header>
      <div className="flex justify-center mb-12">
        <h3
          className="text-ebonyclay text-4xl bg-geebung inline-block
                     p-6 mt-6 lg:mt-2 mb-4 shadow-lg text-ebonyclay  transform -rotate-2"
        >
          <a
            className="font-bold italic text-palesky hover:text-ebonyclay"
            href="/"
            rel="noopener noreferrer"
          >
            {' '}
            Mozstro
          </a>
          {' '}
          on youtube.
        </h3>
      </div>

      <h4
        className="sm:text-3xl text-2xl font-medium bg-equator
                             mb-2 text-ebonyclay inline-block p-2"
      >
        Upcoming content list for channel below:
      </h4>
      <ul className="pl-8 flex flex-wrap list-none -mb-1 list-disc">
        <li className="mb-1 w-full md:w-1/2">
          <a className="font-serif text-rollingstone font-bold">
            High quality software enginering
            tutorials.
          </a>
        </li>
        <li className="mb-1 w-full md:w-1/2">
          <a className="font-serif text-rollingstone font-bold">How to be a good consultant.</a>
        </li>
        <li className="mb-1 w-full md:w-1/2">
          <a className="font-serif text-rollingstone font-bold">
            How to get into software engineering
            industry.
          </a>
        </li>
        <li className="mb-1 w-full md:w-1/2">
          <a className="font-serif text-rollingstone font-bold">
            How our CEO became a top 10% Uk
            earner at 22 from software engineering.
          </a>
        </li>
      </ul>
    </Layout>
  );
}
