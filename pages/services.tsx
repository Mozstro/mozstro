import React from 'react';
import { NextSeo } from 'next-seo';

import Layout from '../components/layout';
import { Header } from '../components/header';

export default function About() {
  return (
    <Layout>
      <NextSeo
        title="Mozstro - Services"
        description="Find out more about who we are and what our cloud computing  mission is."
      />
      <Header>
        <h1 className="text-4xl lg:text-7xl text-center text-ebonyclay">
          About us.
        </h1>
        <h2 className="text-center text-sundance text-3xl">
          We we make cloud work for you.
        </h2>
      </Header>
      <section className="grid grid-cols-1 mt-8 lg:mt-0 lg:grid-cols-2" />
    </Layout>
  );
}
