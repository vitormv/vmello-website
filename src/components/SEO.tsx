import { FC } from 'react';
import Helmet, { HelmetProps } from 'react-helmet';

type SEOProps = {
  title: string,
  description?: string;
  lang?: string;
  meta?: HelmetProps['meta'],
};
const siteMetadata = {
  title: 'Vitor Mello',
  description: 'Vitor Mello is a fullstack software engineer who loves programming in React.js.',
  author: 'Vitor Mello',
};

const SEO: FC<SEOProps> = ({
  description, lang, meta = [], title,
}) => {
  const metaDescription = description || siteMetadata.description;

  const defaultMeta: HelmetProps['meta'] = [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[...defaultMeta, ...meta]}
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

export { SEO };
