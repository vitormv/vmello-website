import { useStaticQuery, graphql } from 'gatsby';

export const getResumeDataProvider = () => {
    const { resume } = useStaticQuery(graphql`
    {
        resume: dataYaml(slug: {eq: "resume"}) {
            title
            subtitle
            summary
            links {
                name
                href
            }
            education {
                institution
                area
                studyType
                years
            }
            work {
                company
                location
                duration
                positions {
                    position
                    date
                }
                summary
                tags
            }
            skills {
                name
                level
            }
            languages {
                language
                fluency
            }
        }
    }
`);

    return resume;
};
