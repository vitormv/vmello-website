import React from 'react';
import { Footer } from 'src/components/Footer/Footer';
import { FullPageHeadline } from 'src/components/FullPageHeadline/FullPageHeadline';
import { Layout } from 'src/components/Layout';
import { Section } from 'src/components/Section/Section';
import { SEO } from 'src/components/SEO';
import { SkillsList } from 'src/components/SkillsList/SkillsList';
import { TypeWriter } from 'src/components/TypeWriter/TypeWriter';
import { getHomepageMetadataProvider } from 'src/providers/getHomepageMetadataProvider';

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
        &nbsp;addict.
      </FullPageHeadline>

      {/* BIOGRAPHY */}
      <Section textOnly title={intro.title} description={intro.description}>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: intro.biography.join('') }} />
      </Section>

      {/* EXPERTISE */}
      <Section title={expertise.title} description={expertise.description}>
        <SkillsList skills={expertise.items} />
      </Section>

      <Footer />
    </Layout>
  );
};

export default IndexPage;
