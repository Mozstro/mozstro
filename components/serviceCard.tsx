import React, { FunctionComponent } from 'react';

type ServiceCardProps = {
  title: string,
  questionOne: string,
  questionTwo: string,
  paragraph: string
}

export const ServiceCard: FunctionComponent<ServiceCardProps> = ({
  title,
  questionOne,
  questionTwo,
  paragraph,
}) => (
  <div className="bg-hippiegreen  transform hover:scale-105 rounded shadow border-ebonyclay
                  p-6 md:w-11/12 xl:w-1/3 m-4 z-10"
  >
    <h4 className="text-2xl lg:text-4xl bg-sundance p-4 text-ebonyclay font-bold mt-0">
      {title}
    </h4>
    <ul className="list-disc border-2 border-bg-rollingstone py-4 pl-8">
      <li className="text-lg lg:text-2xl font-sans text-ebonyclay font-medium mt-0">
        {questionOne}
      </li>
      <li className="text-lg lg:text-2xl font-sans text-ebonyclay font-medium mt-0">
        {questionTwo}
      </li>
    </ul>
    <p className="font-serif text-sundance bg-ebonyclay shadow p-6 text-md lg:text-xl">
      {paragraph}
    </p>
  </div>
);
