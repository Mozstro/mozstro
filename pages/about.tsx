import React from 'react';
import Layout from '../components/layout';
import { Header } from '../components/header';
import ContactForm from '../components/contactForm';

export default function About() {
  return (
    <Layout>
      <Header>
        <h1 className="text-7xl text-center text-ebonyclay">
          <span>About </span>
          <a className="font-bold italic text-sundance hover:text-ebonyclay cursor-pointer"
            href="/"
            rel="noopener noreferrer">Mozstro.
          </a>
        </h1>
        <h2 className="text-center text-sundance text-2xl">
          How can your business be
          <span className="text-ebonyclay"> supercharged?</span>
        </h2>   
      </Header>
      <section className="grid grid-cols-1 mt-8 lg:mt-0 lg:grid-cols-2">
        <article>
          <h4
            className="text-ebonyclay shadow-md text-3xl bg-geebung inline-block p-6
                     text-ebonyclay my-1 transform -rotate-2">Who
            is
            <a className="font-bold italic text-palesky hover:text-ebonyclay"
              href="/"> Mozstro
            </a> ?
          </h4>
          <div className="bg-sundance p-2 m-4 shadow-md">
            <p className="text-rolling-stone px-4 my-4 text-xl">
              Mozstro is a security focused cloud consultancy based in the UK. We are remote first
              and happy to work with clients globally.
            </p>
            <p className="text-rolling-stone px-4 my-4 text-xl">
              We coined the term Mozstro from a combination of the CEO's nickname
              <span className="italic font-bold"> Moz </span> combined with
              <span className="italic font-bold"> maestro </span>
              as this how we aim to be perceived in the industry.
            </p>
          </div>
        </article>
        <article>
          <h4
            className="text-ebonyclay shadow-md text-3xl bg-geebung
                     inline-block p-6 text-ebonyclay my-1 transform -rotate-2">Why
            <a className="font-bold italic text-palesky hover:text-ebonyclay"
              href="/"> Mozstro
            </a> ?
          </h4>
          <div className="bg-sundance p-2 m-4 shadow-md">
            <p className="text-rolling-stone px-4 my-4 text-xl">
              We have several years in the industry of delivering:
            </p>
            <ul className="list-decimal text-rolling-stone text-lg pl-12">
              <li>Highly secured.</li>
              <li>Highly scalable.</li>
              <li>Cost efficient.</li>
              <li>Lighting performant.</li>
            </ul>
            <p className="text-rolling-stone px-4 my-4 text-xl">
              cloud solutions to complex business problems.
            </p>
          </div>
        </article>
        <article>
          <h4
            className="text-ebonyclay text-3xl bg-geebung inline-block p-6 shadow-md
                     text-ebonyclay my-1 transform -rotate-2">How
            to get started?
          </h4>
          <div className="bg-sundance p-2 m-4 shadow-md">
            <p className="text-rolling-stone px-4 my-4 text-xl">If you would like to work with us
              send an email to:
              <a className="text-palesky hover:text-ebonyclay"
                href="mailto:sales@mozstro.com"> sales@mozstro.com</a> or pick up the phone on:
              <a className="text-ebony-clay hover:text-ebonyclay"
                href="tel:07949155434"> 07949155434</a>.
            </p>
            <ContactForm/>
          </div>
        </article>
      </section>
    </Layout >
  );
}
