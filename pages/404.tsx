import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import { Header } from '../components/header';
import { SectionText } from '../components/sectionText';

export default function Custom404() {
  return (
    <Layout>
      <NextSeo
        title="Mozstro - Not found"
        description="Page not found. Please return home."
      />
      <Header>
        <h1 className="text-4xl font-bold lg:text-7xl  text-center text-ebonyclay">
          Page not found.
        </h1>
        <h2 className="text-center text-ebonyclay text-3xl">
          Lets get you home.
        </h2>
      </Header>
      <section>
        <div className="flex my-4 justify-center">
          <SectionText text="404." />
        </div>
      </section>
    </Layout>
  );
}
