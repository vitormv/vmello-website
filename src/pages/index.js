import { Footer } from 'src/components/Footer/Footer';
import { FullPageHeadline } from 'src/components/FullPageHeadline/FullPageHeadline';
import { Layout } from 'src/components/Layout';
import { Section } from 'src/components/Section/Section';
import { SEO } from 'src/components/SEO';
import { SkillsList } from 'src/components/SkillsList/SkillsList';
import { TypeWriter } from 'src/components/TypeWriter/TypeWriter';
import expertiseYml from 'src/data/homepage/2-expertise.yml';
import contactInfoYml from 'src/data/contact-info.yml';
import { getHomepageIntro } from 'src/providers/getHomepageIntro';

const IndexPage = ({ intro, expertise, contactInfo }) => (
  <Layout>
    <SEO title="Home" />

    {/* BRAND */}
    <FullPageHeadline contactInfo={contactInfo}>
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
      addict.
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

const getStaticProps = async () => ({
  props: {
    intro: getHomepageIntro(),
    expertise: expertiseYml,
    contactInfo: contactInfoYml.items,
  },
});

export { getStaticProps };
export default IndexPage;
