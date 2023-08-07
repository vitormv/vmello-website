import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { goToAnchorSmoothly } from 'src/functions/goToAnchorSmoothly';

const Footer = () => (
  <div className="mx-auto mb-16 mt-32 flex justify-between px-10 text-gray md:px-24 lg:max-w-screen-xl">
    <div className="basis-1/2 text-sm lg:basis-1/3">
      Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js
      and Tailwind CSS, deployed with Vercel.
    </div>

    <div className="flex grow-0 basis-0 items-center gap-4">
      <a
        href="https://www.linkedin.com/in/vitormv"
        target="blank"
        aria-label="LinkedIn profile"
        rel="noopener noreferrer"
        className="px-4 text-gray transition-colors hover:text-black"
      >
        <FontAwesomeIcon size="lg" icon={['fab', 'linkedin']} />
      </a>
      <a
        href="https://www.github.com/vitormv"
        target="blank"
        aria-label="Github profile"
        rel="noopener noreferrer"
        className="px-4 text-gray transition-colors hover:text-black"
      >
        <FontAwesomeIcon size="lg" icon={['fab', 'github']} />
      </a>
    </div>
    <div className="flex shrink-0 grow-0 items-center gap-4">
      <a
        href="/#menu"
        onClick={goToAnchorSmoothly}
        className="text-gray transition-colors hover:text-black"
      >
        Top &uarr;
      </a>
    </div>
  </div>
);

export { Footer };
