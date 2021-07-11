import Meta from '../components/meta';
import Footer from '../components/footer';
import Nav from '../components/nav';
import React from 'react';

export default function About() {
  return (
    <div>
      <Meta/>
      <main className="container mx-auto px-6 mt-6">
        <div className="flex justify-center">
          <img className="h-16 sm:h-24 rounded-full"
               src="/mozstro_logo.png"
               alt="Mozstro Logo"/>
        </div>
        <h1 className="text-7xl text-center text-ebonyclay">
          <span>About</span>
          <a className="font-bold italic text-hippiegreen cursor-pointer"
             href="/"
             rel="noopener noreferrer">Mozstro
          </a>
        </h1>
        <h2 className="text-center text-hippiegreen text-2xl">
          How can your business be
          <span className="font-bold italic text-ebonyclay"> supercharged </span>?
        </h2>
        <Nav/>
        <section className="flex flex-col flex-shrink flex-1 w-1/2 md:w-1/3 lg:w-1/5">
        <h3 className="text-3xl bg-sundance inline-block p-6 text-ebonyclay transform mb-12 -rotate-2">Who is
          <a className="font-bold italic text-hippiegreen"
             href="/"> Mozstro
          </a> ?
        </h3>

        <p></p>

        <h4 className="text-3xl bg-sundance inline-block p-6 text-ebonyclay transform mb-12 -rotate-2">Why
          <a className="font-bold italic text-hippiegreen"
             href="/"> Mozstro
          </a> ?
        </h4>

        <p></p>

        <h4 className="text-3xl bg-sundance inline-block p-6 text-ebonyclay transform mb-12  -rotate-2">Do i need Cloud?</h4>

        <h4 className="text-3xl bg-sundance inline-block p-6 text-ebonyclay transform mb-12 -rotate-2">How to get started ?</h4>
        <p></p>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
