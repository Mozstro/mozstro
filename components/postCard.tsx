import React, { FunctionComponent } from 'react';
import { CallToAction } from './callToAction';

type PostCardProps = {
  title: string,
  subtext: string,
  author: string,
  image: string
}

export const PostCard: FunctionComponent<PostCardProps> = (
  {
    title,
    subtext,
    author,
    image
  }) =>
  <div
    className="md:pr-12 mt-8 md:py-8 lg:border-r lg:border-b-0 mb-10 md:mb-0 pb-10 border-b border-palesky">
    <div
      className="bg-white cursor-pointer rounded shadow border-ebonyclay p-6 w-220 z-10">
      <h3
        className="sm:text-3xl text-2xl font-medium title-font mb-2 text-ebonyclay bg-sundance p-2 inline-block">
        Why you need attestation in your next project.
      </h3>
      <div className="flex pt-2 flex-wrap justify-between items-end">
        <h4
          className="sm:text-3xl text-2xl font-medium mb-2
          text-ebonyclay transform -rotate-2 pl-2 bg-equator p-2">
          AWS Nitro Enclaves
        </h4>
        <h5 className="font-mono font-bold bg-geebung p-0.5">March 18th</h5>
      </div>
      <div className="border-ebonyclay p-4">
        <p className="leading-relaxed font-serif pl-4 pr-4 pb-4 text-palesky">
          Attestation is a feature available to nitro enclaves. Here's why you should be using it
          in
          your secure computing implementation.
          <span
            className="block font-bold my-2">Introduction to Nitro Enclaves & Secure Computing</span>
          First of all, If you would like to know more about nitro enclaves please read my blog
          post
          about them here. Nitro enclaves are classed as trusted execution environment (TEEs).
        </p>
        <CallToAction link="/blog" text="Learn More"/>
      </div>
    </div>
  </div>
;
