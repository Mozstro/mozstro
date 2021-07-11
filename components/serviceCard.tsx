import React, { FunctionComponent } from 'react';

type ServiceCardProps = {
  title: string,
  subtitle: string,
  paragraph: string
}

export const ServiceCard:  FunctionComponent<ServiceCardProps> = ({
  title,
  subtitle,
  paragraph
}) =>
  <div className="bg-white transform hover:scale-105 rounded shadow border-ebonyclay
                  p-6 w-10/12 md:w-11/12 xl:w-1/3 m-4 z-10">
    <h4 className="text-4xl bg-sundance p-4 text-ebonyclay font-bold mb-2 mt-0">
      {title}
    </h4>
    <h5 className="text-2xl font-sans text-ebonyclay italic font-medium mb-2 mt-0">
      {subtitle}
    </h5>
    <p className="font-serif text-palesky text-lg">
      {paragraph}
    </p>
  </div>
