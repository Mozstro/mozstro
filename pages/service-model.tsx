import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import { Header } from '../components/header';
import { ServiceModelCard } from '../components/serviceModelCard';
import { SectionText } from '../components/sectionText';
import { CallToAction } from '../components/callToAction';

export default function Careers() {
  return (
    <Layout>
      <NextSeo
        title="Mozstro Cloud Consulting - Service model"
        description="Learn more about how we accelerate your delivery."
      />
      <Header>
        <h1 className="text-4xl font-bold lg:text-7xl text-center text-sundance">
          Service model.
        </h1>
        <h2 className="text-center text-sundance text-3xl">
          Exclusive Mozstro delivery.
        </h2>
      </Header>
      <section className="mt-8 xl:mt-20">
        <ServiceModelCard image="pathfinders" title="Pathfinders" subtitle="Collaboration at its peak">
          <p className="font-serif text-ebonyclay py-2 text-md lg:text-xl">
            Having a clear plan for your project allows for
            maximum performance for both now and also for in the future.
            Landscapes are ever changing,
            therefore it is important to have complete control over them.
          </p>
          <p className="font-serif text-ebonyclay  py-y text-md lg:text-xl">
            Our highly collaborative team of engineers
            will aid you throughout your journey, bringing in crisp new ideas for your brand.
          </p>
          <p className="font-serif text-ebonyclay py-2 text-md lg:text-xl">
            Guide us through your processes and goals
            and we will bring forth our knowledge and expertise to ensure prosperity.
          </p>
        </ServiceModelCard>
         <ServiceModelCard image="upskill" title="Upskill" subtitle="Collaboration at its peak">
          <p className="font-serif text-ebonyclay py-2   text-md lg:text-xl">
           Digital is an ever changing industry so it is important to have current knowledge to remain up to date with the technicalities that are put in place. 
          </p>
          <p className="font-serif text-ebonyclay  py-y  text-md lg:text-xl">
            We will provide you with engaging knowledge that will remain timeless for your businesses lifespan and future performances. We are highly welcoming to new, fresh ideas brought forward. 
          </p>
          <p className="font-serif text-ebonyclay py-2 text-md lg:text-xl">
            Our team is highly effective at communicating with you at every stage of our journey. Information and updates are provided swiftly with all queries receiving  fast responses for your benefit.
            
          </p>
        </ServiceModelCard>
        <ServiceModelCard image="builders" title="Builders" subtitle="Bringing forward the foundations.">
          <p className="font-serif text-ebonyclay py-2 text-md lg:text-xl">
            At Mozstro we utilise cutting edge technologies,
            with those guiding them having a history of consistent results in previous projects.
          </p>
          <p className="font-serif text-ebonyclay  py-y  text-md lg:text-xl">
            Through this we will ensure your product or
            service can meet its maximum potential. Your growth is our main priority.
          </p>
          <p className="font-serif text-ebonyclay py-2 text-md lg:text-xl">
            With our tried and tested security first approach, it allows for high levels of protection, for your peace of mind right from the start.
          </p>
         
        </ServiceModelCard>
       
      </section>
      <section className="mt-12">
        <SectionText text="Why Mozstro?" />
        <div className="bg-hippiegreen p-4">
          <p className="font-serif text-sundance bg-ebonyclay shadow p-4 text-md lg:text-xl">
            Our values are highly reflected in our attitudes
            and work and we feel this is important to ensure this is resonated in our services.
          </p>
          <details>
            <summary className=" text-sundance font-bold shadow p-4  text-2xl lg:text-3xl">
              Respect
            </summary>
            <p className="font-serif text-sundance bg-ebonyclay shadow p-4  text-md lg:text-xl">
              Outcomes achieved are honest and well
              thought out ensuring the future is catered for.
            </p>
          </details>
          <details>
            <summary className=" text-sundance font-bold shadow p-4  text-2xl lg:text-3xl">
              Adversity
            </summary>
            <p className="font-serif text-sundance bg-ebonyclay shadow p-4  text-md lg:text-xl">
              Any issue given to us is taken on with
              full effort from a highly flexible team of keen problem solvers.
            </p>
          </details>
          <details>
            <summary className=" text-sundance font-bold shadow p-4  text-2xl lg:text-3xl">

              Competence
            </summary>
            <p className="font-serif text-sundance bg-ebonyclay shadow p-4  text-md lg:text-xl">
              Efficiency is at the heart of our work
              ethic as we are able to work effectively & concisely.
            </p>
          </details>
          <details>
            <summary className=" text-sundance font-bold shadow p-4  text-2xl lg:text-3xl">

              Excellence
            </summary>
            <p className="font-serif text-sundance bg-ebonyclay shadow p-4  text-md lg:text-xl">
              We will ensure only the finest of standards from start to finish.
              Our thought out internal processes have proven this since our conception.
            </p>
          </details>
          <p className="font-serif  mt-6 text-sundance bg-ebonyclay shadow p-4  text-md lg:text-xl">
            If you feel like our services would be beneficial to
            any of your upcoming projects going forward,
            then we would love to hear from you down below!
          </p>
          <div className="bg-equator text-center">
            <CallToAction text="Get in touch" link="/contact-us" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
