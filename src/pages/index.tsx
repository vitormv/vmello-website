import { Layout } from 'src/components/Layout';
import { Hero } from 'src/components/sections/Hero';
import { Intro } from 'src/components/sections/Intro';
import { Footer } from 'src/components/Footer/Footer';

// @todo eslint import order, ts Types, ensure double quotes in JSX, single quotes elsewhere
// @todo use website data from YML
const Homepage = () => (
  <Layout>
    <Hero />
    <Intro />
    <Footer />
  </Layout>
);

export default Homepage;
