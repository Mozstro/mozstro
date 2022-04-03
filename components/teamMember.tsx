import React, { FunctionComponent } from 'react';
import { CallToAction } from './callToAction';
import Image from 'next/image';

type TeamMemberProps = {
  name: string,
  role: string,
  email: string
  image: string
}

export const TeamMember: FunctionComponent<TeamMemberProps> = ({
  name,
  role,
  email,
  image,
}) => (
  <article className="m-4">
    <div className="bg-sundance mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
      <div className="sm:flex sm:items-center px-6 py-4">
        <div   className=" text-center mr-4 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0">
           <Image
                className="rounded-full"
                  src={`/${image}`}
                  alt={`Team member ${name}`}
                  width={96}
                  height={96}
                  priority
                />
      
      </div>
        <div className="text-center sm:text-left sm:flex-grow">
          <div className="mb-4">
            <h5 className="text-2xl rounded mb-2 bg-sundance p-2 leading-tight text-ebonyclay">{name}</h5>
            <p className="text-lg leading-tight text-ebonyclay">
              Role:
              {' '}
              {role}
            </p>
          </div>
          <div>
            <CallToAction text="Message" link={`mailto:${email}`} />
          </div>
        </div>
      </div>
    </div>
  </article>
);
