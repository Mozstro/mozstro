import React, { FunctionComponent } from 'react';

type HeaderProps = {
  title: string,
  subtext: string,
}

export const Header: FunctionComponent<HeaderProps> = (
  {
    title,
    subtext,
  }) =>
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
    <h2 className="text-center text-sundance text-2xl">
      <span className="font-bold italic text-ebonyclay">Supercharged</span>
      cloud native solutions to complex business problems.
    </h2>
  </div>
;

