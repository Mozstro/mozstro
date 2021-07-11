import Meta from '../components/meta';
import Footer from '../components/footer';
import Nav from '../components/nav';
import React from 'react';
import Image from 'next/image';

export default function Videos() {
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
          <span>Watch</span>
          <a className="font-bold italic text-sundance cursor-pointer"
             href="/"
             rel="noopener noreferrer"> Mozstro
          </a> in action
        </h1>
        <h2 className="text-center text-sundance text-2xl">
          Behind scenes of a tech consultancy. Come be a part of our journey.
        </h2>
        <Nav/>
        <h3 className="text-2xl text-ebonyclay mb-2">
          Upcoming content list for channel below:
        </h3>
        <ul className="pl-12 text-ebonyclay font-bold text-1xl list-decimal">
          <li>High quality software enginering tutorials.</li>
          <li>Tips on how to be a good consultant.</li>
          <li>How to get into software engineering idustry.</li>
          <li>How i became in the top 10% Uk earners at 22 from software engineering.</li>
        </ul>
        <div className="flex flex-wrap justify-center mt-6 mb-6">
          <img
            className="w-2/4 flex "
            src="https://mozstro-website-static-files.s3.eu-west-2.amazonaws.com/img/youtube_thumbnail_mozstro.png"/>
        </div>
        <h4 className="text-center text-hippiegreen text-2xl mb-12">
           Click for exclusive content&nbsp;
           <a className="text-ebonyclay hover:text-hippiegreen" href="/">
             here!
          </a>
          [email sign up here plz]
        </h4>
      </main>
      <Footer/>
    </div>
  );
}
