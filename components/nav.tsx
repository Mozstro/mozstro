import React, { useState } from 'react';
import { NavButton } from './navButton';

export const Nav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <section className="bg-equator hidden md:block rounded drop-shadow-lg py-5 sm:py-10 z-50 container transform -mt-2 sm:-mt-0 lg:-rotate-2 mx-auto my-0 lg:my-0">
        <nav
          className="flex items-center flex-col justify-center transform rotate-2 md:flex-row md:space-x-3 lg:space-x-6
                   font-semibold w-full lg:w-auto md:my-4 space-y-3 md:space-y-0
                    p-6 md:p-0 "
        >
          <NavButton text="Home" link="/" />
          <NavButton text="About" link="/about" />
          <NavButton text="Services" link="/services" />
          <NavButton text="Work" link="/work" />
          <NavButton text="Posts" link="/posts" />
          <NavButton text="Careers" link="/careers" />
        </nav>
      </section>
      <section className="bg-equator text-center block md:hidden rounded drop-shadow-lg pt-5 pb-0 sm:py-10 z-50 container transform -mt-2 sm:-mt-0 mx-auto my-0 lg:my-0">
        <button
          className="inline-flex p-2 text-ebonyclay hover:bg-green-600 rounded md:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-16 h-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full items-center items-start flex flex-col lg:h-auto">
            <NavButton text="Home" link="/" />
            <NavButton text="About" link="/about" />
            <NavButton text="Services" link="/services" />
            <NavButton text="Work" link="/work" />
            <NavButton text="Posts" link="/posts" />
            <NavButton text="Careers" link="/careers" />
          </div>
        </div>

      </section>
      <div className="bg-transparent sm:bg-hippiegreen rounded drop-shadow-xl w-100 h-96 -mt-96 sm:mb-12 md:h-44 md:-mt-48" />
    </div>
  );
};

export default Nav;
