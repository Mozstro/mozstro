import React, { FunctionComponent } from 'react';

type ServiceCardProps = {
  title: string,
  paragraph: string
}

export const ServiceCard: FunctionComponent<ServiceCardProps> = ({
  title,
  paragraph,
}) => (
  <div className="bg-hippiegreen transform hover:scale-105 rounded shadow border-ebonyclay
                  p-6 md:w-11/12 xl:w-1/2 m-4 z-10"
  >
    <h3 className="text-2xl lg:text-4xl bg-sundance p-4 text-ebonyclay font-bold mt-0">
      {title}
    </h3>
    <p className="font-serif text-sundance bg-ebonyclay shadow p-4 lg:p-6 text-md lg:text-xl">
      {paragraph}
    </p>
  </div>
);
