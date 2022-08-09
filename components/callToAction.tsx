import React, { FunctionComponent } from 'react';
import Link from 'next/link';

type CallToActionProps = {
  text: string,
  link: string,
}

export const CallToAction: FunctionComponent<CallToActionProps> = ({
  text,
  link,
}) => (
  <Link href={`${link}`}> 
  <a
    href={`${link}`}
    className="m-4 bg-hippiegreen p-2 md:p-4 text-center text-equator text-xl lg:text-3xl hover:bg-sundance
                hover:text-ebonyclay hover:shadow rounded-xl inline-flex items-center
                transform hover:scale-105 cursor-pointer transform -rotate-1"
  >
    {text}
  </a>
  </Link>
);
