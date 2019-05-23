import { useStaticQuery, graphql } from 'gatsby';

export const getHomepageMetadataProvider = () => (
    useStaticQuery(graphql`
        {
            intro: homepageYaml(slug: {eq: "intro" }) {
                title
                description
                biography
            }
            expertise: homepageYaml(slug: {eq: "expertise" }) {
                title
                description
                items {
                    title
                    description
                }
            }
        }
    `)
);
