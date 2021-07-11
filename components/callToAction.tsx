import React, { FunctionComponent } from 'react';

type CallToActionProps = {
  text: string,
  link: string,
}

export const CallToAction: FunctionComponent<CallToActionProps> = ({
  text,
  link,
}) =>
  <a href={`${link}`}
     className="m-4 text-indigo-500 bg-ebonyclay p-2 text-sundance text-3xl hover:bg-sundance
                hover:text-ebonyclay hover:shadow rounded-xl inline-flex items-center
                transform hover:scale-105 cursor-pointer mt-4 transform -rotate-1">
    {text}
    <svg fill="none" stroke="currentColor"
         className="w-4 h-4 ml-2"
         viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </a>;




