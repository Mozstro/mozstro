import React, { FunctionComponent } from 'react';
import { format, parseISO } from 'date-fns';

import Link from 'next/link';
import { PostType } from '../types/post';
import { CallToAction } from './callToAction';

type PostProps = {
  post: PostType;
};

export const PostCard: FunctionComponent<PostProps> = (
  {
    post,
  },
) => (
  <article className="border-r-2 px-4 my-4 border-palesky" key={post.slug}>
    <p className="mb-1 text-md text-palesky">
      {format(parseISO(post.date), 'MMMM dd, yyyy')}
    </p>
    <h3 className="mb-2 text-2xl">
      <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
        {post.title}
      </Link>
    </h3>
    <h4 className="align-middle text-lg bg-equator rounded inline-block py-0.5 mb-2 shadow-sm px-2">
      Topic:
      {' '}
      {post.topic}
    </h4>
    <p className="font-serif text-md lg:text-xl mb-3">{post.description}</p>
    <CallToAction text="Read more" link={`/posts/${post.slug}`}  />
  </article>
);
