import { FC } from 'react';
import { Layout } from 'src/components/Layout';
import { Hero } from 'src/components/sections/Hero';
import { Footer } from 'src/components/Footer/Footer';
import { Intro } from 'src/components/sections/Intro';

// type IndexPageProps = {
//   intro: IntroType;
//   expertise: ExpertiseType;
//   contactInfo: ContactInfoItemType[];
// };

// @todo eslint import order, ts Types, ensure double quotes in JSX, single quotes elsewhere

const IndexPage: FC = () => (
  <Layout>
    <Hero />

    <Intro />

    <Footer />

    {/* <Section textOnly title={intro.title} description={intro.description}>
      <div dangerouslySetInnerHTML={{ __html: intro.biography.join('') }} />
    </Section> */}

    {/* <Section title={expertise.title} description={expertise.description}>
      <SkillsList skills={expertise.items} />
    </Section> */}

    {/* <Footer /> */}
  </Layout>
);

export default IndexPage;
