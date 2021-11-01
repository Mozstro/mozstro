import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faServer } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type ChooseCardProps = {
  title: string,
  text: string,
  icon: IconProp,
}

export const ChooseCard: FunctionComponent<ChooseCardProps> = ({
  title,
  text,
  icon,
}) => (
  <div className="bg-rollingstone flex flex-col align-middle mx-auto transform
                  hover:scale-105 text-center rounded shadow border-ebonyclay
                  p-4 m-4"
  >
    <FontAwesomeIcon
      className="text-equator transform -rotate-12 lg:-mt-6 -ml-3 -mb-4 inline"
      width="44"
      icon={icon}
    />
    <div className="bg-ebonyclay p-4">
    <h3 className="text-lg lg:text-2xl text-hippiegreen font-bold">{title}</h3>
    <p className="text-md lg:text-xl text-sundance">   
      {text}
    </p>
    </div>
  </div>
);
