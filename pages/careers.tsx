import React from 'react';
import { NextSeo } from 'next-seo';
import { TeamMember } from '../components/teamMember';
import Layout from '../components/layout';
import { Header } from '../components/header';
import { SectionText } from '../components/sectionText';

export default function Careers() {
  return (
    <Layout>
      <NextSeo
        title="Mozstro - Careers"
        description="See who is involved and learn more about opportunities at Mozstro."
      />
      <Header>
        <h1 className="text-4xl font-bold lg:text-7xl  text-center text-sundance">
          Careers.
        </h1>
        <h2 className="text-center text-sundance text-3xl">
          Reimagine Your Career With Mozstro.
        </h2>
      </Header>
      <div className="flex justify-center my-4">
        <SectionText text="Our team." />
      </div>
      <div className="flex flex-wrap justify-center justify-around">
        <TeamMember
          name="Elliot Morris"
          role="CEO / Managing consultant"
          email="elliot@mozstro.com"
          image="profile.png"
        />
      </div>
      <div className="bg-hippiegreen -rotate-2 transform hover:scale-105 rounded shadow border-ebonyclay
                      p-6 md:w-11/12 xl:w-1/2 my-10 z-10"
      >
        <h3 className="text-2xl lg:text-4xl bg-sundance p-4 text-ebonyclay font-bold mt-0">
          We are always on the lookout for talent.
        </h3>
        <p className="font-serif text-sundance bg-ebonyclay shadow p-2 lg:p-6 text-md lg:text-xl">
          Join a team of cloud consulting professionals harnessing
          the power of cloud to deliver game-changing value to businesses and leading organisations.
        </p>
        <p className="font-serif text-sundance bg-ebonyclay shadow p-2 lg:p-6 text-md lg:text-xl">
          You’ll be a part of a family that appreciates
          your contributions and is ready to help take your career to the next level.
        </p>
      </div>
    </Layout>
  );
}
