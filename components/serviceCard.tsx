import React, { FunctionComponent } from 'react';

type ServiceCardProps = {
  title: string,
  children: React.ReactNode;
}

export const ServiceCard: FunctionComponent<ServiceCardProps> = ({
  title,
  children,
}) => (
  <div className="bg-hippiegreen m-4 p-4">
    <h3 className="text-2xl text-equator font-bold">
      {title}
    </h3>
    <hr className="w-1/12 my-2 text-sundance" />
    <div className="py-4">
      {children}
    </div>
  </div>
);
