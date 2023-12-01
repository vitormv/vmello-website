declare module 'src/content/resume.yml' {
  export type ResumeType = {
    slug: string;
    title: string;
    subtitle: string;
    summary: string[];
    links: ResumeLinkType[];
    education: EducationType[];
    work: ExperienceType[];
    skills: SkillType[];
    languages: LanguageType[];
  };

  export type ResumeLinkType = {
    name: string;
    href?: string;
  };

  export type EducationType = {
    institution: string;
    studyType: string;
    area: string;
    years: string;
  };

  export type ExperienceType = {
    company: string;
    logo?: string;
    location: string;
    duration: string;
    positions?: PositionType[];
    summary?: string;
    tags?: string;
  };

  export type PositionType = {
    position: string;
    date: string;
  };

  export type SkillType = {
    name: string;
    level: string;
  };

  export type LanguageType = {
    language: string;
    fluency: string;
  };

  const content: ResumeType;
  export default content;
}
