import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const SEO = ({ description, lang, meta, title }) => {
  const siteMetadata = {
    title: 'Vitor Mello',
    description: 'Vitor Mello is a fullstack software engineer who loves programming in React.js.',
    author: 'Vitor Mello',
  };

  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
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
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export { SEO };
