declare module 'src/data/homepage/1-intro.yml' {
  export type IntroType = {
    slug: string;
    title: string;
    description: string;
    biography: string[];
  };

  const content: IntroType;
  export default content;
}
