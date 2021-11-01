import React from 'react';
import { NextSeo } from 'next-seo';
import { TeamMember } from '../components/teamMember';
import Layout from '../components/layout';
import { Header } from '../components/header';
import { SectionText } from '../components/sectionText';

export default function Team() {
  return (
    <Layout>
      <NextSeo
        title="Mozstro - Team"
      />
      <Header>
        <h1 className="text-4xl lg:text-7xl  text-center text-ebonyclay">
          <span>Our</span>
          <a
            className="font-bold italic text-sundance hover:text-ebonyclay cursor-pointer"
            href="/"
            rel="noopener noreferrer"
          >
            Mozstro
          </a>
          <span> Family.</span>
        </h1>
        <h2 className="text-center text-ebonyclay text-2xl">
          Cloud Solutions Experts.
        </h2>
      </Header>
      <div className="flex justify-center my-4">
        <SectionText text="Our team."/>
      </div>
      <div className="flex flex-wrap justify-center justify-around">
        <TeamMember
          name="Elliot Morris"
          role="CEO / Managing consultant"
          email="elliot@mozstro.com"
          image="elliot.png"
        />
      </div>
      <div className="bg-hippiegreen -rotate-2 transform hover:scale-105 rounded shadow border-ebonyclay
                      p-6 md:w-11/12 xl:w-1/2 m-4 my-8 z-10"
      >
        <h3 className="text-2xl lg:text-4xl bg-sundance p-4 text-ebonyclay font-bold mt-0">
          We are always on the lookout for talent.
        </h3>
        <p className="font-serif text-sundance bg-ebonyclay shadow p-2 lg:p-6 text-md lg:text-xl">
          Unleash the power of cloud with the support of the Mozstro team of certified experts.
        </p>
        <p className="font-serif text-sundance bg-ebonyclay shadow p-2 lg:p-6 text-md lg:text-xl">
        Together we provide a comprehensively powerful solution for your cloud infrastructure.
        </p>
      </div>
    </Layout>
  );
}
