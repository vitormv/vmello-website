import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Section } from 'src/components/Section/Section';
import { Layout } from 'src/components/Layout';
import { SEO } from 'src/components/SEO';

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <Section
            title={data.intro.title}
            description={data.intro.description}
            isTextBlock
        >
            {data.intro.biography.map(content => (
                <p>{content}</p>
            ))}
        </Section>

        <Section
            title={data.expertise.title}
            description={data.expertise.description}
        >
            <ul className="o-skills">
                {data.expertise.items.map((item, index) => (
                    <li className="o-skills__item">
                        <span className="o-skills__prefix">{String(index + 1).padStart(2, '0')}</span>
                        <div className="o-skills__content">
                            <h3 className="o-skills__name">{item.title}</h3>
                            <p className="o-skills__description">
                                {item.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
        <footer className="l-section l-section--footer">
            <div className="l-section__header" />
            <div className="l-section__content">
                <div className="l-section__container">
                    <div className="o-headline">
                        <div className="o-headline__brand o-brand">
                            <h1 className="o-brand__name o-brand__name--small o-headline__title">
                                <span className="o-brand__word">
                                    Vitor
                                </span>
                                <span className="o-brand__word o-brand__word--highlight">
                                    Mello
                                </span>
                            </h1>
                        </div>

                        <ul className="o-headline__social-buttons o-social-buttons">
                            <li className="o-social-buttons__item">
                                <a
                                    className="o-social-buttons__button"
                                    href="https://www.github.com/vitormv"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Download CV/Resume"
                                >
                                    <i className="fa fa-lg fa-download" />
                                </a>
                            </li>
                            <li className="o-social-buttons__item">
                                <a
                                    className="o-social-buttons__button"
                                    href="mailto:vitor@vmello.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Email"
                                >
                                    <i className="fa fa-lg fa-envelope" />
                                </a>
                            </li>
                            <li className="o-social-buttons__item">
                                <a
                                    className="o-social-buttons__button"
                                    href="https://www.linkedin.com/in/vitormv"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="LinkedIn profile"
                                >
                                    <i className="fab fa-lg fa-linkedin" />
                                </a>
                            </li>
                            <li className="o-social-buttons__item">
                                <a
                                    className="o-social-buttons__button"
                                    href="https://www.github.com/vitormv"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="GitHub profile"
                                >
                                    <i className="fab fa-lg fa-github" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </Layout>
);

IndexPage.propTypes = {
    data: PropTypes.shape({
        intro: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            biography: PropTypes.arrayOf(PropTypes.string).isRequired,
        }).isRequired,
        expertise: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            items: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
};

export default IndexPage;

export const query = graphql`
    {
        intro: homepageYaml(slug: { eq: "intro" }) {
            title
            description
            biography
        }
        expertise: homepageYaml(slug: { eq: "expertise" }) {
            title
            description
            items {
                title
                description
            }
        }
    }
`;
