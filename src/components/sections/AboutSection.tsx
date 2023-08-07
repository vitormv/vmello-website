import { Section } from 'src/components/sections/Section';
import { AboutSectionType } from 'src/content/homepage.yml';

type AboutSectionProps = {
  data: AboutSectionType;
};

const AboutSection = ({ data }: AboutSectionProps) => {
  const yearToday = new Date().getFullYear();
  const firstJobYear = 2008;

  const yearsExperience = String(yearToday - firstJobYear);

  return (
    <Section id="about" title={data.title}>
      <div
        className="mb-3 flex flex-col gap-4 text-lg"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: data.biography.join('').replace('{{YEARS_EXPERIENCE}}', yearsExperience),
        }}
      />
    </Section>
  );
};

export { AboutSection };
