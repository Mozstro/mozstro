import React, { FunctionComponent } from 'react';
import Image from 'next/image';

type ServiceModelCardProps = {
  title: string,
  subtitle: string,
  image: string,
  children: React.ReactNode;
}

export const ServiceModelCard: FunctionComponent<ServiceModelCardProps> = ({
  title,
  subtitle,
  image,
  children,
}) => (
  <article className=" bg-sundance p-12 mt-10 flex flex-wrap xl:flex-nowrap justify-center rounded p-2">
    <div className='xl:flex text-center'>
    <div className='service-model-image xl:flex align-center'>
         <Image 
          className="rounded-3xl"
          src={`/${image}.png`}
          alt={`${image}`}
          width={300}
          height={225}
          priority
        />
    </div>
    <div className="text-left py-2 lg:px-6 ">
      <h3 className="text-3xl mt-4 xl:mt-0 text-equator font-bold">{title}</h3>
      <hr className="w-3/12 my-2 text-equator" />
      <h4 className="text-2xl text-ebonyclay">{subtitle}</h4>
      <hr className="w-1/12 my-2 text-equator" />
      <div className="">
        {children}
      </div>
    </div>
    </div>
  </article>
);
