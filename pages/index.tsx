import Meta from '../components/meta';
import Footer from '../components/footer';
import Nav from '../components/nav';
import { Service } from '../components/service';
import React from 'react';
import { PostCard } from '../components/postCard';

export default function Home() {
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
          <span>Welcome to</span>
          <a className="font-bold italic text-sundance cursor-pointer"
             href="/"
             rel="noopener noreferrer">Mozstro
          </a>
        </h1>

        <h2 className="text-center text-sundance text-2xl">
          <span className="text-ebonyclay">Supercharged </span>
          cloud native solutions to complex business problems.
        </h2>
        <Nav/>

        <h3
          className="text-3xl bg-sundance inline-block p-6 text-ebonyclay transform -rotate-2">What
          we offer at
          <a className="font-bold italic text-hippiegreen"
             href="/"
             rel="noopener noreferrer"> Mozstro
          </a>
        </h3>
        <section>
          <div>
            <div className="flex inline-flex flex-wrap justify-center justify-around my-9">
              <Service
                title="Cloud native solutions"
                paragraph="Want a faster time to market? Need to be more reactive to customer demands?
            We provide high quality cloud native solutions
            for complex business problems."
              />
              <Service
                title="Embedded engineering consulting"
                paragraph="Already have internal talent? Does your talent just need some guidance?
            We can embed our high quality consultants into your existing teams so we can excel together."
              />
            </div>
          </div>
        </section>
        <section>
          <div className="container flex flex-wrap justify-around  px-5 mx-auto items-center">
          <h3
            className="text-ebonyclay text-4xl bg-sundance inline-block p-6 text-ebonyclay transform -rotate-2">
            What we are talking about right now.
          </h3>
          <h3
            className="text-ebonyclay text-4xl bg-sundance inline-block p-6 text-ebonyclay transform rotate-2">
            Who have we worked with?
          </h3>
          </div>
          <div className="flex flex-wrap px-5  mx-auto items-center">
            <PostCard title="Enclave" author="Elliot Morris" image="test" subtext="Nitro"/>
            <div className="flex flex-col md:w-1/2 md:pl-12 align-text-top">
              <h3
                className="sm:text-3xl text-2xl font-medium  mb-2 text-ebonyclay inline-block p-2 transform -rotate-2">Previous clients include:</h3>
              <nav className="flex flex-wrap list-none -mb-1 list-disc">
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">NHS</a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">NEXT</a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">ASDA</a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">Sainsburys</a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">Leeds Rhinos</a>
                </li>
              </nav>
              <p  className="text-center mt-4 text-lg" >Project acompplishments can be found
                <a className="text-sundance hover:text-ebonyclay cursor-pointer" href="/work"> here</a>.</p>
              <h3 className="text-center text-ebonyclay mb-3 mt-24 text-5xl">
                Get in touch!
              </h3>
              <p className="text-center text-lg">By email:
                <a className="text-sundance hover:text-ebonyclay" href="mailto:sales@mozstro.com"> sales@mozstro.com</a> or pick up the phone on:
                <a className="text-sundance hover:text-ebonyclay" href="tel:07949155434"> 07949155434</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
