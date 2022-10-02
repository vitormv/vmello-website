import { FC } from 'react';
import { GetStaticPropsResult } from 'next';
import { Layout } from 'src/components/Layout';
import { SEO } from 'src/components/SEO';
// import expertiseYml from 'src/data/homepage/2-expertise.yml';
// import contactInfoYml from 'src/data/contact-info.yml';
// import { getHomepageIntro } from 'src/providers/getHomepageIntro';
import { Hero } from 'src/components/Hero/Hero';

// type IndexPageProps = {
//   intro: IntroType;
//   expertise: ExpertiseType;
//   contactInfo: ContactInfoItemType[];
// };

const IndexPage: FC = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />

    {/* <Section textOnly title={intro.title} description={intro.description}>
      <div dangerouslySetInnerHTML={{ __html: intro.biography.join('') }} />
    </Section> */}

    {/* <Section title={expertise.title} description={expertise.description}>
      <SkillsList skills={expertise.items} />
    </Section> */}

    {/* <Footer /> */}
  </Layout>
);

const getStaticProps = async (): Promise<GetStaticPropsResult<{}>> => ({
  props: {},
});

export { getStaticProps };
export default IndexPage;
