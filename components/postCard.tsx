import React, { FunctionComponent } from 'react';
import { format, parseISO } from 'date-fns';

import Link from 'next/link';
import { PostType } from '../types/post';

type PostProps = {
  post: PostType;
};


export const PostCard: FunctionComponent<PostProps> = (
  {
    post
  }) =>
  <article className="border-r-2 px-4 my-4 border-palesky"  key={post.slug}>
    <p className="mb-1 text-md text-palesky">
      {format(parseISO(post.date), 'MMMM dd, yyyy')}
    </p>
    <h3 className="mb-2 text-2xl">
      <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
        {post.title}
      </Link>
    </h3>
    <h4 className="align-middle text-lg bg-equator rounded inline-block py-0.5 mb-2 shadow-sm px-2">
      Topic: {post.topic}
    </h4>
    <p className="font-serif mb-3">{post.description}</p>
    <p className="m-4 text-indigo-500 bg-ebonyclay p-2 text-sundance text-3xl hover:bg-sundance
       hover:text-ebonyclay hover:shadow rounded-xl inline-flex items-center
       transform hover:scale-105 cursor-pointer mt-4 transform -rotate-1">
      <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
        Read More
      </Link>
    </p>
  </article>
;
