import introYml, { IntroType } from 'src/data/homepage/1-intro.yml';
import { recursiveMarkdownRender } from 'src/functions/recursiveMarkdownRender';

const getHomepageIntro = (): IntroType => (
  recursiveMarkdownRender(introYml)
);

export { getHomepageIntro };
