import Meta from '../components/meta';
import Footer from '../components/footer';
import Nav from '../components/nav';
import { ServiceCard } from '../components/serviceCard';
import React from 'react';
import { PostCard } from '../components/postCard';
import { CallToAction } from '../components/callToAction';
import { Header } from '../components/header'

export default function Home() {
  return (
    <div>
      <Meta/>
      <main className="container mx-auto px-6 mt-6">
        <div className="bg-palesky p-6 ">
          <div className="flex justify-center">
            <img className="h-16 sm:h-24 rounded-full"
                 src="/mozstro_logo.png"
                 alt="Mozstro Logo"/>
          </div>
          <h1 className="text-7xl text-center text-ebonyclay">
            <span>Welcome to</span>
            <a className="font-bold italic text-sundance hover:text-ebonyclay cursor-pointer"
               href="/"
               rel="noopener noreferrer"> Mozstro.
            </a>
          </h1>
          <h2 className="text-center text-ebonyclay text-2xl">

            <span className="font-bold italic text-sundance">Securely supercharged </span>
             cloud native solutions to complex business problems.
          </h2>
        </div>

        <Nav/>
        <div className="flex justify-center">
        <h3
          className="text-ebonyclay text-4xl bg-geebung inline-block p-6 mt-6 lg:mt-10 mb-4 text-ebonyclay  transform -rotate-2">What
          we offer at
          <a className="font-bold italic text-palesky hover:text-ebonyclay"
             href="/"
             rel="noopener noreferrer"> Mozstro.
          </a>
        </h3>
        </div>
        <section>
          <div>
            <div className="flex inline-flex flex-wrap justify-center justify-around my-9">
              <ServiceCard
                title="Security first cloud native solutions."
                subtitle="Want a faster time to market? Need to be more reactive to customer demands?"
                paragraph="We provide high quality cloud native solutions
            for complex business problems."
              />
              <ServiceCard
                title="Embedded engineering consulting."
                subtitle="Already have internal talent? Does your talent just need some guidance?"
                paragraph="We can embed our high quality consultants to get that project over the line."
              />
            </div>
          </div>
          <div className="bg-equator p-6">
            <h6 className="mb-2 text-2xl text-ebonyclay">
              Lets advance technology together, through the power
              of <span className="text-palesky italic"> cloud</span>.
            </h6>
            <CallToAction link="mailto:sales@mozstro.com" text="Find out how we help"/>
          </div>
        </section>
        <section className="mt-16 mb-8">
          <div className="flex flex-wrap px-5 mx-auto">
            <div className="w-full lg:w-1/2">
              <h3
                className="text-ebonyclay order-1 text-4xl bg-geebung inline-block my-6 lg:my-1
                p-6 text-ebonyclay transform -rotate-2">
                What we are talking about right now.
              </h3>
              <PostCard title="Enclave" author="Elliot Morris" image="test" subtext="Nitro"/>
            </div>
            <div className="flex flex-col justify-evenly w-full lg:w-1/2">
              <div className="flex justify-end ">
                <h3
                  className="text-right text-ebonyclay order-3 lg:order-2 text-4xl bg-geebung
                   inline-block my-6 lg:my-1 p-6 text-ebonyclay transform rotate-2">
                  Who have we worked with?
                </h3>
              </div>
              <div className="flex flex-col md:pl-12 justify-between">
                <h3
                  className="sm:text-3xl text-2xl font-medium  mb-2 text-ebonyclay inline-block p-2">
                  Previous
                  clients include:
                </h3>
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
                <p className="text-center mt-4 text-lg">Project accomplishments can be found
                  <a className="text-sundance hover:text-ebonyclay cursor-pointer"
                     href="/work"> here</a>.</p>
                <h3 className="text-center text-ebonyclay mb-3 mt-16 lg:mt-24 text-5xl">
                  Get in touch!
                </h3>
                <p className="text-center text-lg">By email:
                  <a className="text-sundance hover:text-ebonyclay"
                     href="mailto:sales@mozstro.com"> sales@mozstro.com</a> or pick up the phone on:
                  <a className="text-sundance hover:text-ebonyclay"
                     href="tel:07949155434"> 07949155434</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
