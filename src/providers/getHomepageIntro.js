import introYml from 'src/data/homepage/1-intro.yml';
import { recursiveMarkdownRender } from 'src/functions/recursiveMarkdownRender';

const getHomepageIntro = () => (
  recursiveMarkdownRender(introYml)
);

export { getHomepageIntro };
