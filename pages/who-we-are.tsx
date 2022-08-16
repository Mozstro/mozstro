import React from 'react';
import { NextSeo } from 'next-seo';

import Layout from '../components/layout';
import { Header } from '../components/header';
import ContactForm from '../components/contactForm';
import { SectionText } from '../components/sectionText';

export default function WhoWeAre() {
  return (
    <Layout>
      <NextSeo
        title="Mozstro Cloud Consulting - Who We Are"
        description="Find out more about who we are and how to get started on your cloud journey."
      />
      <Header>
        <h1 className="text-4xl font-bold lg:text-7xl text-center text-sundance">
          Who we are?
        </h1>
        <h2 className="text-center text-sundance text-3xl">
          We make cloud work for you.
        </h2>
      </Header>
      <section className="grid grid-cols-1 mt-8 lg:mt-16 lg:grid-cols-2">
        <div>

<SectionText text="What sets us apart?" />
 <div className='flex items-center'>
          <div className="bg-hippiegreen items-center rounded p-4 grid m-4 shadow-md">
            <p className="text-rolling-stone px-4 my-4 text-xl">
              Mozstro is a global cloud consulting company operating from the UK.
            </p>
            <p className="text-rolling-stone px-4 my-4 text-xl">
              We are a cloud security, cloud application, and cloud infrastructure-focused company that delivers high-value consultancy services to clients through reliable and cost-effective solutions.
            </p>
          </div>
          </div>     
        </div>
          <div className='flex items-center'>
          <div className="bg-hippiegreen items-center rounded p-4 grid lg:mt-32 m-4 shadow-md">

            <p className="text-rolling-stone px-4  my-4 text-xl">
              With our cutting-edge service approach, we can become a seamless extension of your team, providing dynamic, resilient, and scalable solutions that make a difference in your business.
            </p>
            <p className="text-rolling-stone px-4 my-4 text-xl">
              We gauge our success with results delivered while ensuring our clients are satisfied and derive value from using our services.
            </p>
          </div>
          </div>     
        <div className='mt:10 lg:mt-20'>
          <SectionText text="How to get started?" />
          <div className="bg-hippiegreen rounded p-4  m-4 shadow-md">
            <h5 className="text-rolling-stone px-4 my-4 text-2xl">
              We would love to work with you!
            </h5>
            <ul className="text-rolling-stone px-4 text-md lg:text-xl">
              <li>
                Email us on:
                <a
                  className="text-sundance hover:text-ebonyclay"
                  href="mailto:sales@mozstro.com"
                >
                  {' '}
                  sales@mozstro.com
                </a>
              </li>
              <li>
                {' '}
                Phone us on:
                <a
                  className="text-sundance text-md lg:text-xl hover:text-ebonyclay"
                  href="tel:07949155434"
                >
                  {' '}
                  07949155434
                </a>
              </li>
            </ul>
            <p className="text-rolling-stone px-4 mt-4 text-md lg:text-xl">
              Submit the form below and we will be in touch.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
