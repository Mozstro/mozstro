import React from 'react';

import Meta from '../components/meta';
import Footer from '../components/footer';
import Nav from '../components/nav';
import { Header } from '../components/header';
import Layout from '../components/layout';

export default function Videos() {
  return (
    <Layout>
      <Header>
        <h1 className="text-7xl text-center text-ebonyclay">
          <span>Watch</span>
          <a className="font-bold italic text-sundance hover:text-ebonyclay cursor-pointer"
             href="/"
             rel="noopener noreferrer"> Mozstro
          </a> in action.
        </h1>
        <h2 className="text-center text-ebonyclay text-2xl">
          Behind scenes of a tech consultancy. Come be a part of our journey.
        </h2>
      </Header>
      <h3
        className="sm:text-3xl text-2xl font-medium bg-equator
                             mb-2 text-ebonyclay inline-block p-2">
        Upcoming content list for channel below:
      </h3>
      <ul className="pl-8 flex flex-wrap list-none -mb-1 list-disc">
        <li className="mb-1 w-1/2">
          <a className="font-serif text-rollingstone font-bold">High quality software enginering
            tutorials.</a>
        </li>
        <li className="mb-1 w-1/2">
          <a className="font-serif text-rollingstone font-bold">How to be a good consultant.</a>
        </li>
        <li className="mb-1 w-1/2">
          <a className="font-serif text-rollingstone font-bold">How to get into software engineering
            industry.</a>
        </li>
        <li className="mb-1 w-1/2">
          <a className="font-serif text-rollingstone font-bold">How our CEO became a top 10% Uk
            earner at 22 from software engineering.</a>
        </li>
      </ul>
      <div className="flex flex-wrap justify-center mt-16 mb-6">
        <img
          className="w-2/4 flex "
          src="https://mozstro-website-static-files.s3.eu-west-2.amazonaws.com/img/youtube_thumbnail_mozstro.png"/>
      </div>
      <h4 className="text-center text-hippiegreen text-2xl mb-12">
        Click for exclusive content&nbsp;
        <a className="text-ebonyclay hover:text-hippiegreen" href="/">
          here!
        </a>
        [email sign up here plz]
      </h4>
    </Layout>
  );
}
