import React, { FunctionComponent } from 'react';
import Link from 'next/link';

type NavButtonProps = {
  text: string,
  link: string,
}

export const NavButton: FunctionComponent<NavButtonProps> = ({
  text,
  link,
}) => (
  <Link href={`${link}`}>
  <a
    className="bg-equator my-2 lg:my-0 sm:w-auto px-4 py-2 text-sundance justify-center text-3xl sm:text-2xl hover:bg-sundance
              hover:text-ebonyclay hover:shadow rounded-xl inline-flex
               lg:rotate-2 hover:scale-105 cursor-pointer"
  
    rel="noopener noreferrer"
  >
    {text}
  </a>
  </Link>
);
