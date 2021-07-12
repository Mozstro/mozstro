import React from 'react';

import Nav from '../components/nav';
import { TeamMember } from '../components/teamMember';
import Layout from '../components/layout';
import { Header } from '../components/header';

export default function Team() {
  return (
    <Layout>
      <Header>
        <h1 className="text-7xl text-center text-ebonyclay">
          <span>Our </span>
          <a className="font-bold italic text-sundance hover:text-ebonyclay cursor-pointer"
             href="/"
             rel="noopener noreferrer">Mozstro
          </a>
          <span> Family.</span>
        </h1>
        <h2 className="text-center text-ebonyclay text-2xl">
          <span className="text-sundance">Supercharged&nbsp;</span>teams.
        </h2>
      </Header>
      <div className="flex justify-center mb-12">
        <h3
          className="text-ebonyclay text-4xl bg-geebung inline-block
                     p-6 mt-6 lg:mt-2 mb-4 shadow-lg text-ebonyclay  transform -rotate-2">
          Join our journey.
        </h3>
      </div>
      <div
        className="flex flex-wrap mt-8 bg-sundance inline-block p-6 text-ebonyclay transform -rotate-2 w-full lg:w-1/2">
        <h5 className="text-ebonyclay text-3xl">Help human advancement with cloud.</h5>
        <p className="font-serif   text-palesky text-l">
          We want the world to perform better, by empowering everybody with the supercharged
          cloud.
          The opportunities for technology with business is endless.
        </p>
      </div>

      <div className="flex flex-wrap justify-center justify-around my-9">
        <TeamMember
          name="Elliot Morris"
          role="CEO / Managing consultant"
          email="hello@elliotmorris.dev"
          image="elliot.png"
        />

        <TeamMember
          name="Freelance consultants"
          role="Utilizing talent in our network to help get you supercharged"
          email="hello@elliotmorris.dev"
          image="mozstro_logo_multi.png"
        />

        <TeamMember
          name="You"
          role="Want to find out more about roles?"
          email="hello@elliotmorris.dev"
          image="mozstro_logo.png"
        />
      </div>
    </Layout>
  );
}
