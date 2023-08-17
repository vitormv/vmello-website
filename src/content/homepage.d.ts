declare module 'src/content/homepage.yml' {
  export type AboutSectionType = {
    title: string;
    biography: string[];
  };

  export type SkillBlockType = {
    name: string;
    items: string[];
  };

  export type SkillSectionType = {
    title: string;
    blocks: SkillBlockType[];
  };

  export type SectionsType = {
    about: AboutSectionType;
    skills: SkillSectionType;
  };

  export type HomepageType = {
    slug: string;
    sections: SectionsType;
  };

  const content: HomepageType;
  export default content;
}
