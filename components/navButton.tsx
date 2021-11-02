import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

type NavButtonProps = {
  text: string,
  link: string,
}

export const NavButton: FunctionComponent<NavButtonProps> = ({
  text,
  link,
}) => (
  <a
    className="bg-ebonyclay p-4 text-sundance justify-center text-2xl hover:bg-sundance
              hover:text-ebonyclay hover:shadow rounded-xl inline-flex
              transform hover:scale-105 cursor-pointer"
    href={`${link}`}
    rel="noopener noreferrer"
  >
    {text}
  </a>
);
