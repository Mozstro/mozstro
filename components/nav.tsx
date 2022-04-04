import React, { useState } from 'react';
import { NavButton } from './navButton';

export const Nav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <section className="bg-sundance hidden lg:block rounded drop-shadow-lg py-5 sm:py-10 z-50 container transform -mt-2 sm:-mt-0 lg:-rotate-2 mx-auto my-0 lg:my-0">
        <nav
          className="flex items-center flex-col justify-center transform rotate-2 md:flex-row md:space-x-3 lg:space-x-6
                   font-semibold w-full lg:w-auto md:my-4 space-y-3 md:space-y-0
                    p-6 md:p-0 "
        >
          <NavButton text="Home" link="/" />
          <NavButton text="Services" link="/services" />
          <NavButton text="About" link="/about" />
          <NavButton text="Work" link="/work" />
          <NavButton text="Posts" link="/posts" />
          <NavButton text="Careers" link="/careers" />
        </nav>
      </section>
      <section className="bg-sundance text-center lg:hidden rounded drop-shadow-lg pt-5 pb-6 sm:py-10 z-50 container transform -mt-2 sm:-mt-0 mx-auto my-0 lg:my-0">
        <button
          className=" text-ebonyclay hover:bg-hippiegreen rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <div className="flex mb-2 justify-center">
            <span aria-hidden="true" className={`${!active ? '-translate-y-1.5' : 'rotate-45'} bg-equator block absolute h-1 w-14 transform transition duration-500 ease-in-out`} />
            <span aria-hidden="true" className={`${active ? 'opacity-0' : ''} bg-equator block absolute  h-1 w-14 bg-current  transform transition duration-500 ease-in-out`} />
            <span aria-hidden="true" className={`${active ? '-rotate-45' : 'translate-y-1.5'} bg-equator block absolute  h-1 w-14  transform  transition duration-500 ease-in-out`} />
          </div>
        </button>
        <nav
          className={`${
            active ? '' : 'hidden'
          }   w-full mt-4 lg:inline-flex lg:flex-grow lg:w-auto`}
        >

          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full items-center items-start flex flex-col lg:h-auto">
            <NavButton text="Home" link="/" />
            <NavButton text="Services" link="/services" />
            <NavButton text="About" link="/about" />
            <NavButton text="Work" link="/work" />
            <NavButton text="Posts" link="/posts" />
            <NavButton text="Careers" link="/careers" />
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Nav;
