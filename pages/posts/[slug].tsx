import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { MetaProps } from '../../types/layout';
import { PostType } from '../../types/post';
import { postFilePaths, POSTS_PATH } from '../../lib/mdx';
import Layout from '../../components/layout';
import { Header } from '../../components/header';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
  Image,
  Link,
};

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const PostPage = ({
  source,
  frontMatter,
}: PostPageProps): JSX.Element => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title} - Mozstro Consulting`,
    description: frontMatter.description,
    image: `${frontMatter.image}`,
    date: frontMatter.date,
    type: 'article',
  };
  return (
    <Layout customMeta={customMeta}>
      <Header>
        <h1 className="text-4xl lg:text-7xl text-center text-ebonyclay">
          <span>Welcome to</span>
          <a
            className="font-bold italic text-sundance hover:text-ebonyclay cursor-pointer"
            href="/"
            rel="noopener noreferrer"
          >
            Mozstro.
          </a>
        </h1>
        <h2 className="text-center text-ebonyclay text-2xl">
          <span className="font-bold italic text-sundance">Securely Supercharged </span>
          cloud native solutions to complex business problems.
        </h2>
      </Header>
      <div className="mt-8 lg:mt-0">
        <a
          className="text-4xl lg:text-3xl transform hover:scale-105 cursor-pointer font-bold
                     text-ebonyclay hover:shadow text-center hover:bg-palesky hover:text-sundance
                     transform hover:scale-110 border-opacity-50 border-2 border-geebung px-2"
          href="/posts"
          rel="noopener noreferrer"
        >
          ← Back
        </a>
      </div>
      <article>
        <div>
          <div className="text-center mt-8 lg:mt-0 mb-10 lg:-mb-10">
            <h3
              className="text-ebonyclay text-4xl bg-geebung inline-block p-6 xl:mt-0
                      transform -rotate-2"
            >
              {frontMatter.title}
            </h3>
            <p
              className="align-middle transform -rotate-2 text-sundance text-xl bg-ebonyclay
                         lg:-ml-32 lg:mt-20 inline-block py-1 mt-3 mb-2 shadow-sm px-2"
            >
              By&nbsp;
              {frontMatter.author}
            </p>
          </div>
          <img
            className="blog-image"
            alt={frontMatter.imageAlt}
            src={frontMatter.image}
          />
        </div>
        <div className="flex mt-2  my-4 lg:my-8 justify-between w-full">
          <div className="flex flex-col">
            <p
              className="align-middle text-xl md:text-2xl bg-equator transform -rotate-2
                          rounded inline-block py-1 mt-2  shadow-sm px-2"
            >
              Topic:
              {' '}
              {frontMatter.topic}
            </p>
          </div>

          <p className="items-center flex text-lg text-palesky">
            {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
          </p>
        </div>
        <div className="blog-content">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const {
    content,
    data,
  } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
