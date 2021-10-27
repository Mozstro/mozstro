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
    className="text-4xl lg:text-3xl rotate-0 cursor-pointer font-bold text-ebonyclay hover:shadow
                text-center hover:bg-geebung hover:text-palesky
                transform hover:scale-110 border-opacity-50 border-2 border-palesky px-2"
    href={`${link}`}
    rel="noopener noreferrer"
  >
    {text}
  </a>
);
