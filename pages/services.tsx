import React from 'react';
import { NextSeo } from 'next-seo';

import Layout from '../components/layout';
import { Header } from '../components/header';
import { CallToAction } from '../components/callToAction';

export default function About() {
  return (
    <Layout>
      <NextSeo
        title="Mozstro - Services"
        description="Find out more about who we are and what our cloud computing  mission is."
      />
      <Header>
        <h1 className="text-4xl font-bold lg:text-7xl text-center text-sundance">
          What we offer.
        </h1>
        <h2 className="text-center text-sundance text-3xl">
          To make cloud work for you.
        </h2>
      </Header>

      <section className="grid grid-cols-1 mt-8 lg:mt-12 lg:grid-cols-2">
        <div className="bg-hippiegreen m-2 p-4">
          <h3 className="text-2xl text-equator font-bold">
            Digital transformation
          </h3>
          <hr className="w-1/12 my-2 text-sundance" />
          <p className="text-xl text-equator"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nisi blanditiis commodi sequi aliquid minus ipsa, libero autem ratione, facilis repudiandae atque inventore? Mollitia optio est facere officia non voluptate. </p>
        </div>

      </section>
    </Layout>
  );
}
