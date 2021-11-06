declare module 'src/data/homepage/2-expertise.yml' {
  export type ExpertiseItemType = {
    title: string;
    description: string;
  };

  export type ExpertiseType = {
    slug: string;
    title: string;
    description: string;
    items: ExpertiseItemType[];
  };

  const content: ExpertiseType;
  export default content;
}
