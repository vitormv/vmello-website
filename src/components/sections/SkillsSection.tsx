import { Section } from 'src/components/sections/Section';
import { SkillSectionType } from 'src/content/homepage.yml';

type SkillsSectionProps = {
  data: SkillSectionType;
};

const SkillsSection = ({ data }: SkillsSectionProps) => (
  <Section id="skills" title={data.title}>
    <div className="grid shrink-0 grow grid-cols-2 gap-4 text-left text-lg lg:grid-cols-4">
      {data.blocks.map((block) => (
        <ul key={block.name} className="list-none text-sm">
          <li className="text-base">
            <strong>{block.name}</strong>
          </li>

          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ))}
    </div>
  </Section>
);

export { SkillsSection };
