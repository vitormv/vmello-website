import React from 'react';
import { Section } from 'src/components/Section';
import { Layout } from 'src/components/Layout';
import { SEO } from 'src/components/SEO';
import { Footer } from 'src/components/Footer';
import { SkillsList } from 'src/components/SkillsList';
import { getHomepageMetadataProvider } from 'src/providers';
import { TypeWriter } from 'src/components/TypeWriter';
import { FullPageHeadline } from 'src/components/FullPageHeadline';

const IndexPage = () => {
    const { intro, expertise } = getHomepageMetadataProvider();

    return (
        <Layout>
            <SEO title="Home" />

            {/* BRAND */}
            <FullPageHeadline>
                Senior Full-Stack Engineer &#x26;&nbsp;
                <TypeWriter
                    strings={['Forró', 'Snowboard']}
                    speed={200}
                    startDelay={500}
                    nextStringDelay={[1000, 750]}
                    breakLines={false}
                >
                    React.js
                </TypeWriter>
                &nbsp;Lover
            </FullPageHeadline>

            {/* BIOGRAPHY */}
            <Section
                title={intro.title}
                description={intro.description}
                isTextBlock
            >
                {intro.biography.map((content, index) => (
                    // Normally index should NEVER be used as key, but in this case, the order and
                    // subset of items is fixed and never changes.
                    // eslint-disable-next-line react/no-array-index-key
                    <p key={index}>{content}</p>
                ))}
            </Section>

            {/* EXPERTISE */}
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
