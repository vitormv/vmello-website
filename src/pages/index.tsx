import { Layout } from 'src/components/Layout';
import { Hero } from 'src/components/sections/Hero';
import { Footer } from 'src/components/Footer/Footer';
import { HomepageType } from 'src/content/homepage.yml';
import { AboutSection } from 'src/components/sections/AboutSection';
import { SkillsSection } from 'src/components/sections/SkillsSection';
import { recursiveMarkdownRender } from 'src/functions/recursiveMarkdownRender';

export const getStaticProps = async () => {
  const data = require('src/content/homepage.yml'); // eslint-disable-line global-require

  return {
    props: {
      homepageData: {
        ...data,
        sections: {
          about: recursiveMarkdownRender(data.sections.about),
          skills: data.sections.skills,
        },
      },
    },
  };
};

type HomepageProps = {
  homepageData: HomepageType;
};

// @todo eslint import order, ts Types, ensure double quotes in JSX, single quotes elsewhere
const Homepage = ({ homepageData }: HomepageProps) => (
  <Layout>
    <Hero />
    <AboutSection data={homepageData.sections.about} />
    <SkillsSection data={homepageData.sections.skills} />
    <Footer />
  </Layout>
);

export default Homepage;
