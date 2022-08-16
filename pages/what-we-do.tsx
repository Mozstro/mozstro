import React from 'react';
import { NextSeo } from 'next-seo';

import Layout from '../components/layout';
import { Header } from '../components/header';
import { ServiceCard } from '../components/serviceCard';

export default function About() {
  return (
    <Layout>
      <NextSeo
        title="Mozstro Cloud Consulting - What We Do"
        description="Find out more about what we offer at Mozstro."
      />
      <Header>
        <h1 className="text-4xl font-bold lg:text-7xl text-center text-sundance">
          What We Do.
        </h1>
        <h2 className="text-center text-sundance text-3xl">
          To make cloud work for you.
        </h2>
      </Header>
      <section className="grid grid-cols-1 mt-8 lg:mt-12  lg:grid-cols-2">
        <ServiceCard
          title="Digital transformation."
        >
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 pt-4 pb-2 lg:px-6 text-md lg:text-xl">
            The digital age is here and it&apos;s here to change your business and industry,
            for the better.
          </p>
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 py-2 lg:px-6 text-md lg:text-xl">
            We can work with your organisation and deliver our expertise.
            In return you will receive maximum business value,
            more conversions ultimately leading to new routes within your market.
          </p>
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 py-2 lg:px-6 text-md lg:text-xl">
            Do not underestimate the digital transformation taking place.
            We have extensive experience across multiple industries
            and have seen first hand high yield gains for the organisations
            we’ve had the pleasure of working alongside.

          </p>
        </ServiceCard>
        <ServiceCard
          title="Cloud."
        >
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 pt-4 pb-2 lg:px-6 text-md lg:text-xl">
            The sky is the limit when utilising the functionality of the cloud.
          </p>
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 py-2 lg:px-6 text-md lg:text-xl">
            Our team of certified cloud consultants can take away the
            complexities of using the cloud so you can focus on your project
            whilst we take care of the platform.
          </p>
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 py-2 lg:px-6 text-md lg:text-xl">
            Do you require scalable, secure & simple to operate solutions?
            Our cloud native expertise and experience can bring this
            and more forward for your organisation.
          </p>
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 py-2 lg:px-6 text-md lg:text-xl">
            We work with the major cloud providers AWS, Azure  & GCP.
          </p>
        </ServiceCard>
        <ServiceCard
          title="Full-Stack Engineering."
        >
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 pt-4 pb-2 lg:px-6 text-md lg:text-xl">
            Feel at home with our full-stack engineers.
            Our team has some of the most highly adaptive engineers in the industry.

          </p>
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 py-2 lg:px-6 text-md lg:text-xl">
            We can deliver projects independently or if your team is needing
            assistance we can embed our engineers alongside your current workers.
            We have a badge at the door mentality.
            Respect, adversity & competence is at the heart of our work.
          </p>
          <p className="font-serif text-sundance bg-ebonyclay shadow px-4 py-2 lg:px-6 text-md lg:text-xl">
            Our results have been proven to be of high quality and this is on a consistent basis.
            Security, performance & resilience is at the top of our list of priorities.
          </p>
        </ServiceCard>
      </section>
    </Layout>
  );
}
