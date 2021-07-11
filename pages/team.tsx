import Meta from '../components/meta';
import Footer from '../components/footer';
import Nav from '../components/nav';
import {TeamMember} from '../components/teamMember';
import React from 'react';

export default function Team() {
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
          <span>Our </span>
          <a className="font-bold italic text-sundance cursor-pointer"
             href="/"
             rel="noopener noreferrer">Mozstro
          </a>
          <span> Family</span>
        </h1>
        <h2 className="text-center text-sundance text-2xl">
          <span className="text-ebonyclay">Supercharged</span> teams
        </h2>
        <Nav/>

          <h3 className="text-ebonyclay text-center text-5xl">Join <span className="text-sundance"> our</span> journey</h3>
        <div className="flex mt-8  bg-sundance inline-block p-6 text-ebonyclay transform -rotate-2 w-1/2">
          <p className="text-ebonyclay text-1xl">
            Come and help us to help the world perform better, by empowering everybody with the supercharged cloud.
            The opportunities for technology with business is endless. Come help make a human advancement.
          </p>
        </div>

        <div className="flex flex-wrap justify-center justify-around my-9">
          <TeamMember
            name="Elliot Morris"
            role="CEO / Managing consultant"
            email="hello@elliotmorris.dev"
            image="elliot.png"
          />

          <TeamMember
            name="Freelance consultants"
            role="Utilizing talent in our network to help get you supercharged"
            email="hello@elliotmorris.dev"
            image="mozstro_logo_multi.png"
          />

          <TeamMember
            name="You"
            role="Want to find out more about roles?"
            email="hello@elliotmorris.dev"
            image="mozstro_logo.png"
          />
        </div>
      </main>
      <Footer/>
    </div>
  );
}
