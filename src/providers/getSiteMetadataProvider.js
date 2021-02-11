import { useStaticQuery, graphql } from 'gatsby';

export const getSiteMetadataProvider = () => {
  const { site } = useStaticQuery(graphql`
        query SiteMetaData {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `);

  return site.siteMetadata;
};
