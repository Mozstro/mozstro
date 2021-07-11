import React, { FunctionComponent } from 'react';

type ServiceProps = {
  title: string,
  paragraph: string
}

export const Service:  FunctionComponent<ServiceProps> = ({ title, paragraph }) =>
  <div className="bg-white rounded shadow border-ebonyclay p-6 w-96 m-4 z-10">
    <h5 className="text-2xl text-ebonyclay font-bold mb-4 mt-0">
      {title}
    </h5>
    <p className="text-palesky text-sm">
      {paragraph}
    </p>
  </div>
