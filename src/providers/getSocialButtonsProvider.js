import { useStaticQuery, graphql } from 'gatsby';

export const getSocialButtonsProvider = () => {
    const { buttons } = useStaticQuery(graphql`
    {
        buttons: dataYaml(slug: {eq: "social-buttons"}) {
            items {
                key
                title
                href
                icon
            }
        }
    }`);

    return buttons;
};
