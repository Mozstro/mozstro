import { format, parseISO } from 'date-fns';
import { getAllPosts } from './api/posts';
import { PostType } from '../types/post';
import Layout from '../components/layout';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import {Header} from '../components/header';
import React from 'react';

type PostProps = {
  posts: PostType[];
};

export const Posts = ({ posts }: PostProps): JSX.Element => {
  return (
    <Layout>
      <Header>
        <h1 className="text-7xl text-center text-ebonyclay">
          <a className="font-bold italic text-sundance cursor-pointer inline-block"
             href="/"
             rel="noopener noreferrer">Mozstro
          </a>
          <span> spotlight.</span>
        </h1>
        <h2 className="text-center text-ebonyclay text-2xl">
          Browse our blog posts.
        </h2>
      </Header>
      {posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Posts;
