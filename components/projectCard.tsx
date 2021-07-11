import React, { FunctionComponent } from 'react';
import { ProjectType } from '../types/project';

type ProjectCardProps = {
  project: ProjectType
}

export const ProjectCard:  FunctionComponent<ProjectCardProps> = ({
  project
}) =>
  <div className="bg-white rounded shadow border-ebonyclay p-6 w-full xl:w-1/2 m-4 z-10">
    <h4 className="text-3xl bg-sundance pt-4 px-4 text-ebonyclay font-medium mt-0">
      {project.title}
    </h4>
    <h5 className="text-l font-bold bg-sundance px-4 pb-1 text-rollingstone italic font-medium mt-0">
      {project.date}
    </h5>
    <hr className="px-12  border-ebonyclay border-2"/>
    <p className="text-palesky mt-2 text-lg">
      {project.description}
    </p>
  </div>
