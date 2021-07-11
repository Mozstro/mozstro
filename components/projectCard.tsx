import React, { FunctionComponent } from 'react';
import { ProjectType } from '../types/project';
import Link from 'next/link';

type ProjectCardProps = {
  project: ProjectType
}

export const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  project
}) =>
  <article>
    <div className="bg-white rounded shadow border-ebonyclay p-6 w-full z-10">
      <h4 className="text-3xl bg-sundance pt-4 px-4 text-ebonyclay font-medium mt-0">
        <span className="bg-palesky text-sundance px-2"> Client:</span> {project.sector}
      </h4>
      <h5 className="text-lg bg-sundance px-4 pb-1 text-rollingstone mt-0">
        <span className="bg-rollingstone text-equator px-0.5"> Project name:&nbsp;</span>
        <span className="font-medium text-ebonyclay"> {project.title}.</span>
      </h5>
      <hr className="px-12  border-ebonyclay border-2"/>
      <p className="text-palesky mt-2 text-lg">
        {project.description}
      </p>
      <p className="m-4 text-indigo-500 bg-ebonyclay p-2 text-sundance text-3xl hover:bg-sundance
       hover:text-ebonyclay hover:shadow rounded-xl inline-flex items-center
       transform hover:scale-105 cursor-pointer mt-4 transform -rotate-1">
        <Link as={`/posts/${project.slug}`} href={`/posts/[slug]`}>
          Find out more
        </Link>
      </p>
    </div>
  </article>
;
