import { useStaticQuery, graphql } from 'gatsby';

export const getContactInfoProvider = () => {
    const { contactInfo } = useStaticQuery(graphql`
    {
        contactInfo: dataYaml(slug: {eq: "contact-info"}) {
            items {
                name
                value
            }
        }
    }`);

    return contactInfo.items;
};
