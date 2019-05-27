import { useStaticQuery, graphql } from 'gatsby';

export const getResumeDataProvider = () => {
    const { resume } = useStaticQuery(graphql`
    {
        resume: dataYaml(slug: {eq: "resume"}) {
            title
            subtitle
            links {
                name
                href
            }
            intro
            education {
                name
                title
                year
            }
            experience {
                company
                location
                duration
                roles {
                    title
                    date
                }
                description
                tags
            }
        }
    }
`);

    return resume;
};
