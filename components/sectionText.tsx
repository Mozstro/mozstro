import React, { FunctionComponent } from 'react';

type SectionTextProps = {
  text: string,
}

export const SectionText: FunctionComponent<SectionTextProps> = ({
  text,
}) => (
    <h3
    className="text-ebonyclay text-4xl bg-geebung inline-block p-6 mt-6 lg:mt-2 mb-4
               text-ebonyclay transform -rotate-2 shadow-lg"
   >
    {text}
  </h3>
);
