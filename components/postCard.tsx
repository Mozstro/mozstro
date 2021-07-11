import React, { FunctionComponent } from 'react';

type PostCardProps = {
  title: string,
  subtext: string
  author: string
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
    className="md:w-1/2 md:pr-12 mt-8 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-palesky ">
    <div className="border-solid border-4 transform hover:bg-sundance pt-6 pb-2 pl-6 pr-6 -rotate-2 transform -rotate-2">
      <a href="/blog">

      <h3 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-ebonyclay bg-geebung p-2 inline-block  transform -rotate-2 ">
        Nitro Enclaves What is attestation all about?
      </h3>
      <div className="flex pt-2 flex-wrap justify-between ">
        <h4
          className="sm:text-3xl text-2xl font-medium mb-2 text-ebonyclay pt-2 transform -rotate-2 ">AWS</h4>
        <h5 className="transform -rotate-2">March 18th</h5>
      </div>
      <div className="border-ebonyclay transform -rotate-2 p-4">
        <p className="leading-relaxed pl-4 pr-4 pb-4 text-palesky">
          Attestation is a feature available to nitro enclaves. Here's why you should be using it in
          your secure computing implementation.
          <span
            className="block font-bold my-2">Introduction to Nitro Enclaves & Secure Computing</span>
          First of all, If you would like to know more about nitro enclaves please read my blog post
          about them here. Nitro enclaves are classed as trusted execution environment (TEEs).
        </p>
        <a href="/blog"
           className="m-4 text-indigo-500 bg-equator p-2 text-ebonyclay text-3xl hover:bg-geebung hover:text-hippiegreen inline-flex items-center cursor-pointer mt-4 transform rotate-1">Learn
          More
          <svg fill="none" stroke="currentColor"
               className="w-4 h-4 ml-2"
               viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      </a>
    </div>
  </div>
;
