import Meta from '../components/meta';
import Footer from '../components/footer';
import Nav from '../components/nav';
import React from 'react';

export default function Work() {
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
          <a className="font-bold italic text-sundance cursor-pointer"
             href="/"
             rel="noopener noreferrer">Mozstro
          </a>
        </h1>
        <h2 className="text-center text-sundance text-2xl">
          How can your business be
          <span className="font-bold italic text-ebonyclay"> supercharged </span>?
        </h2>
        <Nav/>
        <h3 className="text-3xl text-ebonyclay">Who have we worked with at
          <a className="font-bold italic text-sundance"
             href="/"> Mozstro
          </a> ?
        </h3>

        <h4>Leading retailer - Next</h4>
        <h4>Largest Public sector organization - NHS</h4>
        <h4>Titan supermarkets - Asda & Sainsburys </h4>

      </main>
      <Footer/>
    </div>
  );
}
