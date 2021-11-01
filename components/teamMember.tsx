import React, { FunctionComponent } from 'react';
import { CallToAction } from './callToAction';

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
  image
}) =>
  <article className="m-4">
    <div className="bg-palesky mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
      <div className="sm:flex sm:items-center px-6 py-4">
        <img className="block border-2 p-1 border-sundance h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
             src={`/${image}`}
             alt=""
        />
        <div className="text-center sm:text-left sm:flex-grow">
          <div className="mb-4">
            <h5 className="text-2xl mb-2 bg-sundance p-2 leading-tight text-ebonyclay">{name}</h5>
            <p className="text-lg leading-tight text-ebonyclay">Role: {role}</p>
          </div>
          <div>
            <CallToAction text="Message" link={`mailto:${email}`}/>
          </div>
        </div>
      </div>
    </div>
  </article>;

