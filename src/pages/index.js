import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Section } from 'src/components/Section';
import { Layout } from 'src/components/Layout';
import { SEO } from 'src/components/SEO';
import { Footer } from 'src/components/Footer';
import { SocialButtons } from 'src/components/SocialButtons';

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />

        <Section isFullSize>
            <div className="o-homepage">
                <div className="o-headline o-homepage__headline">
                    <div className="o-headline__brand o-brand">
                        <h1 className="o-brand__name o-headline__title">
                            <span className="o-brand__word">
                                Vitor
                            </span>
                            <span className="o-brand__word o-brand__word--highlight">
                                &nbsp;Mello
                            </span>
                        </h1>
                        <h2 className="o-brand__subtitle o-headline__subtitle">
                            Senior Full-Stack Developer &#x26;&nbsp;
                            <span
                                className="o-tooltip"
                                aria-label="It is the most widely known partner dance from Brazil, with lots of arm figures, footwork and style."
                            >
                                Forró
                            </span>
                            &nbsp;Lover
                        </h2>
                    </div>

                    <SocialButtons email={false} />
                </div>

                <div className="o-contact-info o-homepage__contact-info">
                    <hr />

                    <div className="o-contact-info__items">
                        <div className="o-contact-info__item">
                            <h4 className="o-contact-info__label">Location</h4>
                            <address className="o-contact-info__value">
                                Berlin, Germany
                            </address>
                        </div>

                        <div className="o-contact-info__item">
                            <h4 className="o-contact-info__label">Web</h4>
                            <span className="o-contact-info__value">
                                https://vmello.com
                            </span>
                        </div>

                        <div className="o-contact-info__item">
                            <h4 className="o-contact-info__label">Email</h4>
                            <span className="o-contact-info__value">
                                vitor@vmello.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>

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

        <Footer />
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
`;
