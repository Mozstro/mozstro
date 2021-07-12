import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { MetaProps } from '../types/layout';

export const WEBSITE_HOST_URL = 'https://mozstro.com';

const Meta = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  const router = useRouter();
  const meta: MetaProps = {
    title: 'Mozstro - Secure cloud consulting',
    description:
      'Supercharged cloud native solutions to complex business problems.',
    image: `${WEBSITE_HOST_URL}/images/site-preview.png`,
    type: 'website',
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Mozstro - Secure cloud consulting" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mozstro_consulting" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <link rel="icon" href="/favicon.ico" />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </NextHead>
  );
};

export default Meta;
