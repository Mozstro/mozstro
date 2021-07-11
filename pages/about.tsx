import Meta from '../components/meta';
import Footer from '../components/footer';
import Nav from '../components/nav';
import React from 'react';

export default function About() {
  return (
    <div>
      <Meta/>
      <main className="container mx-auto px-6 mt-6">
        <div className="bg-palesky p-6">
          <div className="flex justify-center">
            <img className="h-16 sm:h-24 rounded-full"
                 src="/mozstro_logo.png"
                 alt="Mozstro Logo"/>
          </div>
          <h1 className="text-7xl text-center text-ebonyclay">
            <span>About</span>
            <a className="font-bold italic text-sundance cursor-pointer"
               href="/"
               rel="noopener noreferrer">Mozstro.
            </a>
          </h1>

          <h2 className="text-center text-sundance text-2xl">
            How can your business be
            <span className="font-bold italic text-ebonyclay"> supercharged?</span>
          </h2>
        </div>
        <Nav/>
        <section className="flex flex-col flex-shrink flex-1 w-1/2 md:w-1/3 lg:w-1/5">
          <h3
            className="text-ebonyclay text-3xl bg-geebung inline-block p-6 text-ebonyclay my-1 transform -rotate-2">Who
            is
            <a className="font-bold italic text-palesky hover:text-ebonyclay"
               href="/"> Mozstro
            </a> ?
          </h3>
          <h4
            className="text-ebonyclay text-3xl bg-geebung inline-block p-6 text-ebonyclay my-1 transform -rotate-2">Why
            <a className="font-bold italic text-palesky hover:text-ebonyclay"
               href="/"> Mozstro
            </a> ?
          </h4>
          <p></p>

          <h4
            className="text-ebonyclay text-3xl bg-geebung inline-block p-6 text-ebonyclay my-1 transform -rotate-2">Do
            i need Cloud?</h4>

          <h4
            className="text-ebonyclay text-3xl bg-geebung inline-block p-6 text-ebonyclay my-1 transform -rotate-2">How
            to get started ?</h4>
          <p></p>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
