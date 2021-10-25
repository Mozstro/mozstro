import React from 'react';

const Nav = function Component() {
  return (
    <div>
      <section className="bg-equator  drop-shadow-lg py-10 z-50 container transform -rotate-2 mx-auto my-0 lg:my-0">
        <nav
          className="flex flex-col justify-center md:flex-row md:space-x-3 lg:space-x-6
                   font-semibold w-full lg:w-auto md:my-4 space-y-3 md:space-y-0
                   md:bg-transparent p-6 md:p-0 "
        >
          <a
            className="text-4xl lg:text-3xl rotate-2 cursor-pointer font-bold text-ebonyclay hover:shadow
                     text-center hover:bg-geebung hover:text-palesky
                     transform hover:scale-110 border-opacity-50 border-2 border-palesky px-2"
            href="/"
            rel="noopener noreferrer"
          >
            Home
          </a>
          <a
            className="text-4xl lg:text-3xl  rotate-2 font-bold text-ebonyclay hover:shadow text-center
                     hover:bg-palesky hover:text-sundance
                     transform hover:scale-110 border-opacity-50 border-2 border-geebung px-2"
            href="/about"
            rel="noopener noreferrer"
          >
            About
          </a>
          <a
            className="text-4xl lg:text-3xl rotate-2 cursor-pointer font-bold text-ebonyclay hover:shadow
                     text-center hover:bg-geebung hover:text-palesky
                     transform hover:scale-110 border-opacity-50 border-2 border-palesky px-2"
            href="/work"
            rel="noopener noreferrer"
          >
            Work
          </a>
          <a
            className="text-4xl lg:text-3xl rotate-2 hover:scale-105 cursor-pointer font-bold
                     text-ebonyclay hover:shadow text-center hover:bg-palesky hover:text-sundance
                     transform hover:scale-110 border-opacity-50 border-2 border-geebung px-2"
            href="/posts"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <a
            className="text-4xl lg:text-3xl rotate-2 cursor-pointer font-bold text-ebonyclay
                     hover:shadow hover:bg-palesky hover:text-sundance text-center
                     transform hover:scale-110 border-opacity-50 border-2 border-geebung px-2"
            href="/team"
            rel="noopener noreferrer"
          >
            Team
          </a>
        </nav>
      </section>
      <div className="bg-hippiegreen drop-shadow-xl w-100 lg:h-44 lg:-mt-40 lg:mb-12" />
    </div>
  );
};

export default Nav;
