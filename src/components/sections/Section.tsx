import { ReactNode } from 'react';

type SectionProps = {
  title: string;
  children: ReactNode;
  id: string;
};

const Section = ({ title, children, id }: SectionProps) => (
  <div className="mx-auto mb-24 px-10 md:px-24 lg:max-w-screen-xl">
    <div className="md:flex md:gap-20">
      <h3 className="mb-2 grow-0 basis-1/3 font-display text-2xl md:text-right" id={id}>
        {title}
      </h3>

      <div className="shrink-0 grow-0 basis-1/2">{children}</div>
    </div>
  </div>
);

export { Section };
