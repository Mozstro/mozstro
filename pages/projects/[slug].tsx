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
import { ProjectType } from '../../types/project';
import { projectFilePaths, PROJECTS_PATH } from '../../lib/mdx';
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

type ProjectPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: ProjectType;
};

const ProjectPage = ({
  source,
  frontMatter
}: ProjectPageProps): JSX.Element => {
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
        <h1 className="text-7xl text-center text-ebonyclay">
          <span>Welcome to</span>
          <a className="font-bold italic text-sundance hover:text-ebonyclay cursor-pointer"
             href="/"
             rel="noopener noreferrer"> Mozstro.
          </a>
        </h1>
        <h2 className="text-center text-ebonyclay text-2xl">
          <span className="font-bold italic text-sundance">Securely Supercharged </span>
          cloud native solutions to complex business problems.
        </h2>
      </Header>
      <article>
        <div className="flexjustify-start">
          <h3
            className="text-ebonyclay text-4xl bg-geebung inline-block p-6 mt-6 lg:mt-2 mb-4
                       text-ebonyclay transform -rotate-2">
            {frontMatter.title}
          </h3>
        </div>
        <div className="flex justify-between w-full lg:w-1/3">
          <h4
            className="align-middle text-lg bg-equator
                       rounded inline-block py-0.5 mt-2 mb-6 shadow-sm px-2">
            {frontMatter.topic}
          </h4>
          <p className="mb-10 text-lg text-palesky">
            {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
          </p>
        </div>
        <div className="blog-content">
          <MDXRemote {...source} components={components}/>
        </div>
      </article>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectFilePath = path.join(PROJECTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(projectFilePath);

  const {
    content,
    data
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
  const paths = projectFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default ProjectPage;
