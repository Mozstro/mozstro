import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import { Header } from '../components/header';
import ContactForm from '../components/contactForm';

export default function Careers() {
  return (
    <Layout>
      <NextSeo
        title="Mozstro Cloud Consulting - Contact us"
        description="Get in touch with us."
      />
      <Header>
        <h1 className="text-4xl font-bold lg:text-7xl text-center text-sundance">
          Contact us.
        </h1>
        <h2 className="text-center text-sundance text-3xl">
          Get in touch.
        </h2>
      </Header>
      <section className="mt-8 xl:mt-20">
        <div className="lg:mt-4 flex justify-center rounded p-2">
          <div className="p-4 bg-hippiegreen sm:p-6">
            <h3 className="font-bold py-1 text-xl lg:text-2xl text-equator">
              Find out what we bring to the table.
            </h3>
            <p className="font-serif py-1 text-lg lg:text-xl text-equator">
              Fill out and submit the form below and we will be in touch!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

    </Layout>
  );
}
