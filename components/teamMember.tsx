import React, { FunctionComponent } from 'react';

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
    <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
      <div className="sm:flex sm:items-center px-6 py-4">
        <img className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
             src={`/${image}`}
             alt=""
        />
        <div className="text-center sm:text-left sm:flex-grow">
          <div className="mb-4">
            <p className="text-xl leading-tight text-ebonyclay">{name}</p>
            <p className="text-sm leading-tight text-sundance">{role}</p>
          </div>
          <div>
            <a
              href={`mailto:${email}`}
              className="text-xs font-semibold hover:text-ebonyclay rounded-full px-4 py-1 leading-normal border border-ebonyclay text-hippiegreen">
              Message
            </a>
          </div>
        </div>
      </div>
    </div>
  </article>;

