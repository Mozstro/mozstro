import React from 'react';

import Layout from '../components/layout';
import { ClientCard } from '../components/clientCard';
import { Header } from '../components/header';

export default function Work() {
  return (
    <Layout>
      <Header>
        <h1 className="text-7xl text-center text-ebonyclay">
          <span>Work with </span>
          <a className="font-bold italic text-sundance cursor-pointer inline-block"
             href="/"
             rel="noopener noreferrer">Mozstro.
          </a>
        </h1>
        <h2 className="text-center text-sundance text-2xl">
          How we've
          <span className="font-bold italic text-ebonyclay"> supercharged?</span>
        </h2>
      </Header>
      <h3
        className="text-ebonyclay text-4xl bg-geebung inline-block p-6 mt-6 lg:mt-0 mb-4 text-ebonyclay my-1 transform -rotate-2">World
        class clients
        <span aria-label="love" className="text-sundance"> ♡</span>
        <a className="font-bold italic text-palesky hover:text-ebonyclay"
           href="/"
           rel="noopener noreferrer"> Mozstro!
        </a>
      </h3>
      <div className="flex flex-wrap">
        <ClientCard title="Next"
                    subtitle="Leading retailer"
                    paragraph="lorem ipsum"
                    image="/"
        />
        <ClientCard title="NHS"
                    subtitle="Largest Public sector organization in the UK"
                    paragraph="lorem ipsum"
                    image="/"
        />
        <ClientCard title="ASDA"
                    subtitle="Titan supermarket"
                    paragraph="lorem ipsum"
                    image="/"
        />
        <ClientCard
          title="Sainsbury"
          subtitle="Titan supermarket"
          paragraph="lorem ipsum"
          image="/"
        />
      </div>
    </Layout>
  );
}
