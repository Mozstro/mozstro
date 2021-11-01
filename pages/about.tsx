import React from 'react';
import { NextSeo } from 'next-seo';

import Layout from '../components/layout';
import { Header } from '../components/header';
import ContactForm from '../components/contactForm';

export default function About() {
  return (
    <Layout>
      <NextSeo
        title="Mozstro - About Us"
      />
      <Header>
        <h1 className="text-4xl lg:text-7xl text-center text-ebonyclay">
          <span>About </span>
          <a
            className="font-bold italic text-sundance hover:text-ebonyclay cursor-pointer"
            href="/"
            rel="noopener noreferrer"
          >
            Mozstro.
          </a>
        </h1>
        <h2 className="text-center text-sundance text-2xl">
          How can your business be
          <span className="text-ebonyclay"> supercharged?</span>
        </h2>
      </Header>
      <section className="grid grid-cols-1 mt-8 lg:mt-0 lg:grid-cols-2">
        <article>
          <h3
            className="text-ebonyclay shadow-md text-3xl bg-geebung inline-block p-6
                     text-ebonyclay my-1 transform -rotate-2"
          >
            Who are we?
          </h3>
          <div className="bg-sundance rounded p-2 m-4 shadow-md">
            <p className="text-rolling-stone px-4 my-4 text-xl">
            Mozstro is a global cloud consulting company operating from the UK. 
            </p>
            <p className="text-rolling-stone px-4 my-4 text-xl">
            We are a cloud security and infrastructure-focused company that delivers high-value consultancy services to clients through reliable and cost-effective solutions.  
            </p>
            <p className="text-rolling-stone px-4 my-4 text-xl">
            As one of the best cloud consulting agencies, we are trusted by dozens of small businesses and large corporations whom we enable to overcome critical cloud challenges.
            </p>
            <p className="text-rolling-stone px-4 my-4 text-xl">
            With our cutting-edge service approach, we can become a seamless extension of your team, providing dynamic, resilient, and scalable solutions that make a difference in your business.
            </p>
            <p className="text-rolling-stone px-4 my-4 text-xl">
            We gauge our success with results delivered while ensuring our clients are satisfied and derive value from using our services.
            </p>
          </div>
        </article>
        <article>
          <h3
            className="text-ebonyclay shadow-md text-3xl bg-geebung
                     inline-block p-6 text-ebonyclay my-1 transform -rotate-2"
          >
            Our mission 
          </h3>
          <div className="bg-sundance rounded p-2 m-4 shadow-md">
            <p className="text-rolling-stone px-4 my-4 text-xl">
            We aim to deliver powerful, secure cloud consulting solutions to our clients.
            </p>
            <p className="text-rolling-stone px-4 my-4 text-xl">
             We’re here to support you in every step of your cloud journey, making sure you understand the complexities of cloud technology.
             </p>
             <p className="text-rolling-stone px-4 my-4 text-xl"> 
            With Mozstro cloud consulting team, you're in capable hands. 
            </p>
            <p className="text-rolling-stone px-4 my-4 text-xl">
            You’ll have access to the expertise, knowledge, and professionalism of a technical team with the experience you need to innovate, secure your cloud systems, improve performance and overcome complex business challenges. Get in touch with us today.
            </p>
          </div>
        </article>
        <article>
          <h4
            className="text-ebonyclay text-3xl bg-geebung inline-block p-6 shadow-md
                     text-ebonyclay my-1 transform -rotate-2"
          >
            How
            to get started?
          </h4>
          <div className="bg-sundance rounded p-2 m-4 shadow-md">
            <p className="text-rolling-stone px-4 my-4 text-xl">
              If you would like to work with us
              email:
              <a
                className="text-palesky hover:text-ebonyclay"
                href="mailto:sales@mozstro.com"
              >
                {' '}
                sales@mozstro.com
              </a>
              {' '}
              or pick up the phone on:
              <a
                className="text-ebony-clay hover:text-ebonyclay"
                href="tel:07949155434"
              >
                {' '}
                07949155434
              </a>
              .
            </p>
            <ContactForm />
          </div>
        </article>
      </section>
    </Layout>
  );
}
