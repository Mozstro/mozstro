import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud,  faServer } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type StatCardProps = {
  text: string,
  stat: string,
  icon: IconProp,
  credit: string
}

export const StatCard: FunctionComponent<StatCardProps> = ({
  text,
  stat,
  icon,
  credit
}) =>
  <div className="bg-white flex flex-col align-middle  mx-auto transform
                  hover:scale-105 text-center rounded shadow border-ebonyclay
                  px-4 lg:p-6 m-4">
    <FontAwesomeIcon className="text-equator transform -rotate-12 -mt-2 -ml-3 -mb-6 lg:-mb-4 inline"
                     width="48"
                     icon={icon} />

    <blockquote cite={`${credit}`}>
    <h4 className="text-xl lg:text-3xl bg-ebonyclay p-4 text-sundance font-bold mb-2 mt-0">
      <span className="text-hippiegreen">{stat}</span> {text}
    </h4>
    </blockquote>
  </div>;
