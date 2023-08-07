import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { TrackingEye } from 'src/components/TrackingEye/TrackingEye';

import { goToAnchorSmoothly } from 'src/functions/goToAnchorSmoothly';
import styles from './Menu.module.scss';

const Menu = () => {
  const { route } = useRouter();
  return (
    <div
      className="relative mx-auto flex h-24 items-center justify-start px-10 text-lg md:justify-around md:px-24 lg:max-w-screen-xl"
      id="menu"
    >
      <div className="flex shrink-0 grow-0">
        <TrackingEye />
        <a className={styles.logo} href="/" aria-label="back to homepage">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="logo" src="/assets/images/logo.svg" />
        </a>
      </div>
      <div className="grow-0" />
      <div className="hidden grow items-center justify-end gap-4 md:flex">
        <a className={`${styles.link} ${route === '/' && styles.active}`} href="/#">
          <span>Home</span>
        </a>
        <a className={styles.link} href="#about" onClick={goToAnchorSmoothly}>
          <span>About</span>
        </a>
        <a className={styles.link} href="vitor-mello-resume.pdf" target="_blank">
          <span>Resume</span>
        </a>

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
    </div>
  );
};

export { Menu };
