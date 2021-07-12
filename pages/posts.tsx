import React from 'react';
import { GetStaticProps } from 'next';

import { getAllPosts } from './api/posts';
import { PostType } from '../types/post';
import Layout from '../components/layout';
import { Header } from '../components/header';
import { PostCard } from '../components/postCard';

type PostProps = {
  posts: PostType[];
};

export const Posts = ({ posts }: PostProps): JSX.Element => {
  return (
    <Layout>
      <Header>
        <h1 className="text-7xl text-center text-ebonyclay">
          <a className="font-bold italic text-sundance hover:text-ebonyclay cursor-pointer"
             href="/"
             rel="noopener noreferrer">Mozstro
          </a>
          <span> spotlight.</span>
        </h1>
        <h2 className="text-center text-ebonyclay text-2xl">
          Browse our blog posts.
        </h2>
      </Header>
      <div className="flex justify-center">
        <h3
          className="text-ebonyclay text-4xl bg-geebung inline-block
                     p-6 mt-6 lg:mt-2 mb-4 text-ebonyclay shadow-md transform -rotate-2">
          Our latest posts.
        </h3>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-8 gap-12 mt-12">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post}/>
        ))}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title', 'topic']);

  return {
    props: { posts },
  };
};

export default Posts;
