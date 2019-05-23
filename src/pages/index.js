import React from 'react';
import { Section } from 'src/components/Section';
import { Layout } from 'src/components/Layout';
import { SEO } from 'src/components/SEO';
import { Footer } from 'src/components/Footer';
import { SocialButtons } from 'src/components/SocialButtons';
import { SkillsList } from 'src/components/SkillsList';
import { getHomepageMetadataProvider } from 'src/providers';

const IndexPage = () => {
    const { intro, expertise } = getHomepageMetadataProvider();

    return (
        <Layout>
            <SEO title="Home" />

            <Section fullSize>
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
                title={intro.title}
                description={intro.description}
                isTextBlock
            >
                {intro.biography.map(content => (
                    <p>{content}</p>
                ))}
            </Section>

            <Section
                title={expertise.title}
                description={expertise.description}
            >
                <SkillsList skills={expertise.items} />
            </Section>

            <Footer />
        </Layout>
    );
};

export default IndexPage;
