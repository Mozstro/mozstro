import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  <div>

    <div className="flex flex-col transform
                  hover:scale-105 lg:h-56 text-center"
    >
      <div className="m-auto">
        <div className="flex">
          <FontAwesomeIcon
            className="text-equator transform z -rotate-12 lg:-mt-6 -ml-3 -mb-6 inline"
            width="48"
            height="48"
            icon={icon}
          />
        </div>
        <div className="bg-ebonyclay p-2 sm:p-4">
          <h3 className="text-lg lg:text-2xl text-hippiegreen font-bold">{title}</h3>
          <p className="font-serif text-md lg:text-xl text-sundance">
            {text}
          </p>
        </div>
      </div>
    </div>
  </div>
);
