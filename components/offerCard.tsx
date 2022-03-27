import React, { FunctionComponent } from 'react';

type OfferCardProps = {
  title: string,
  children: React.ReactNode;
}

export const OfferCard: FunctionComponent<OfferCardProps> = ({
  title,
  children,
}) => (
  <div className="bg-hippiegreen  rounded shadow border-ebonyclay
                  p-2 sm:p-6 md:w-11/12 xl:w-1/2 m-4 z-10"
  >
    <h3 className="text-2xl lg:text-4xl bg-sundance p-4 text-ebonyclay font-bold mt-0">
      {title}
    </h3>
    {children}
  </div>
);
