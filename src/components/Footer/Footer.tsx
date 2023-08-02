import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { smoothScroll } from 'src/functions/smoothScroll';

const Footer = () => (
  <div className="mx-auto lg:max-w-screen-xl px-10 md:px-24 mt-32 mb-16 flex justify-between text-gray">
    <div className="basis-1/2 lg:basis-1/3 text-sm">
      Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS,
      deployed with Vercel.
    </div>

    <div className="flex grow-0 items-center gap-4 basis-0">
      <a
        href="https://www.linkedin.com/in/vitormv"
        target="blank"
        aria-label="LinkedIn profile"
        rel="noopener noreferrer"
        className="text-gray transition-colors hover:text-black px-4"
      >
        <FontAwesomeIcon size="lg" icon={['fab', 'linkedin']} />
      </a>
      <a
        href="https://www.github.com/vitormv"
        target="blank"
        aria-label="Github profile"
        rel="noopener noreferrer"
        className="text-gray transition-colors hover:text-black px-4"
      >
        <FontAwesomeIcon size="lg" icon={['fab', 'github']} />
      </a>
    </div>
    <div className="flex grow-0 items-center gap-4 shrink-0">
      <a href="/#menu" onClick={smoothScroll}>
        Top &uarr;
      </a>
    </div>
  </div>
);

export { Footer };
