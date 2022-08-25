import { format, parseISO } from 'date-fns';
import { NextSeo } from 'next-seo';
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
import { NavButton } from '../../components/navButton';

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
  frontMatter,
}: ProjectPageProps): JSX.Element => {
  const customMeta: MetaProps = {
    description: frontMatter.description,
    image: `${frontMatter.image}`,
    date: frontMatter.date,
    type: 'article',
  };
  return (
    <Layout customMeta={customMeta}>
      <NextSeo
        title={`Mozstro Cloud Consulting - ${frontMatter.title}`}
      />
      <Header>
        <h1 className="text-4xl font-bold lg:text-7xl text-center text-sundance">
          Portfolio.
        </h1>
        <h2 className="text-center text-sundance text-3xl">
          Problems solved.
        </h2>
      </Header>
      <div className="absolute mt-4 md:mb-0 md:ml-12 md:mt-16">
        <NavButton text="← Back" link="/work" />
      </div>
      <article>
        <div>
          <div className="text-center mt-24 md:mt-28 xl:mt-10">
            <h3
              className="relative  z-50 text-equator text-4xl bg-sundance inline-block p-6 mt-4 lg:mt-0 mb-2
                      transform -rotate-2"
            >
              {frontMatter.title}
            </h3>
          </div>
          <div className="blog-image flex justify-center -mt-8 text-center ">
            <Image
              alt={frontMatter.imageAlt}
              src={frontMatter.image}
              width={600}
              height={300}
              priority
            />
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap mt-2 my-4 lg:my-8 justify-between w-full">
          <div className="flex flex-col">
            <p
              className="align-middle text-xl md:text-2xl bg-sundance transform -rotate-2
                          rounded inline-block py-1 mt-2  shadow-sm px-2"
            >
              Industry:
              {' '}
              {frontMatter.sector}
            </p>
          </div>
          <p className="mt-4 lg:mt-4 items-center flex text-lg text-sundance">
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
  const projectFilePath = path.join(PROJECTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(projectFilePath);

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
