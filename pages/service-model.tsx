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
           Maximum performance for both the now and the future is made possible by having a clear plan for your project. Since landscapes are constantly changing, having total control over them is essential.

          </p>
          <p className="font-serif text-ebonyclay  py-y text-md lg:text-xl">
            Your journey will be aided by our highly interdisciplinary engineering staff, which will offer you fresh new concepts for your business.
          </p>
          <p className="font-serif text-ebonyclay py-2 text-md lg:text-xl">
            Describe your procedures and objectives to us, and we'll apply our knowledge and experience to achieve success.
          </p>
        </ServiceModelCard>
         <ServiceModelCard image="upskill" title="Upskill" subtitle="Scalable, trustworthy partnerships for the future.">
          <p className="font-serif text-ebonyclay py-2   text-md lg:text-xl">
           Since the digital sector is always evolving, it's critical to stay up to date with the latest technical developments.
          </p>
          <p className="font-serif text-ebonyclay  py-y  text-md lg:text-xl">
           We'll give you relevant knowledge that will help your firm grow and operate well in the future. We are quite receptive to new, original ideas.
          </p>
          <p className="font-serif text-ebonyclay py-2 text-md lg:text-xl">
           At every point of our journey, our staff communicates with you very effectively. For your benefit, all inquiries receive prompt responses, and information and updates are delivered quickly.
            
          </p>
        </ServiceModelCard>
        <ServiceModelCard image="builders" title="Builders" subtitle="Bringing forward the foundations.">
          <p className="font-serif text-ebonyclay py-2 text-md lg:text-xl">
            At Mozstro, we use cutting-edge technologies, guided by experts that have a track record of producing reliable results in past projects.
          </p>
          <p className="font-serif text-ebonyclay  py-y  text-md lg:text-xl">
This will guarantee that your product can reach its full potential. Our top priority is seeing you grow.
          </p>
          <p className="font-serif text-ebonyclay py-2 text-md lg:text-xl">
            With our tried-and-true security-first strategy, it is possible to provide high levels of protection from the outset, giving you peace of mind.
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
