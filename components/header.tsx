import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import mozstro from '../public/mozstro_logo.png';
import Nav from './nav';

type HeaderProps = {
  children: React.ReactNode;
}

export const Header: FunctionComponent<HeaderProps> = (
  {
    children,
  },
) => (
  <header>
    <div className=" rounded pb-8 p-4">
      <div className="flex justify-center">
        <Image
            className="rounded-full"
          src={mozstro}
          alt="Mozstro logo"
          width={96}
          height={96}
          
        />
      </div>
      {children}
    </div>
    <Nav />
  </header>
);
