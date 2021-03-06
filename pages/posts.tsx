import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';

import { getAllPosts } from './api/posts';
import { PostType } from '../types/post';
import Layout from '../components/layout';
import { Header } from '../components/header';
import { PostCard } from '../components/postCard';
import { SectionText } from '../components/sectionText';

type PostProps = {
  posts: PostType[];
};

export const Posts = ({ posts }: PostProps): JSX.Element => (
  <Layout>
    <NextSeo
      title="Mozstro Cloud Consulting - Posts"
      description="Read our latest blog posts to find out what we are talking about."
    />
    <Header>
      <h1 className="text-4xl font-bold lg:text-7xl  text-center text-sundance">
        Posts.
      </h1>
      <h2 className="text-center text-sundance text-3xl">
        Browse our blog posts.
      </h2>
    </Header>
    <div className="flex my-4 justify-center">
      <SectionText text="Our latest posts." />
    </div>
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-8 gap-12 mt-12">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </section>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title', 'topic']);

  return {
    props: { posts },
  };
};

export default Posts;
