import React, { FunctionComponent } from 'react';
import { CallToAction } from './callToAction';
import { ProjectType } from '../types/project';

type ProjectCardProps = {
  project: ProjectType
}

export const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  project,
}) => (
  <article className="p-6 bg-hippiegreen">
    <div className="bg-equator rounded shadow border-ebonyclay p-4 w-full z-10">
      <div className="bg-sundance">
        <h4 className="text-xl  pt-4 px-4 text-ebonyclay font-medium mb-2 mt-0">
          <span className="bg-hippiegreen rounded text-equator py-1 px-2">
            Sector:
            {' '}
            {project.sector}
          </span>

        </h4>
        <h5 className="text-xl px-4 pb-1 text-rollingstone mt-0">
          <span className="bg-rollingstone rounded text-equator px-1"> Project title:&nbsp;</span>
          <span className="font-medium text-ebonyclay">

            {project.title}

          </span>
        </h5>
      </div>
      <hr className="px-12  border-ebonyclay border-2" />
      <p className="text-sundance font-serif px-4 mt-2 text-md lg:text-xl">
        {project.description}
      </p>
      <CallToAction text={`Learn about this ${project.sector} project`} link={`/projects/${project.slug}`} />
    </div>
  </article>
);
