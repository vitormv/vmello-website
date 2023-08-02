import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TrackingEye } from 'src/components/TrackingEye/TrackingEye';
import styles from './Menu.module.scss';
import { MouseEvent } from 'react';

// @todo use SVG icons directly and remove font-awesome from deps
const Menu = () => {
  const smoothScroll = (e: MouseEvent) => {
    e.preventDefault(); // Stop Page Reloading
    const el = document.getElementById('about');
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="relative mx-auto h-24 flex justify-start md:justify-around items-center text-lg lg:max-w-screen-xl px-10 md:px-24"
      id="menu"
    >
      <div className="flex shrink-0 grow-0">
        <TrackingEye />
        <a className={styles.logo} href="/" aria-label="back to homepage">
          <img alt="logo" src="/assets/images/logo.svg" />
        </a>
      </div>
      <div className="grow-0" />
      <div className="hidden md:flex grow justify-end items-center gap-4">
        <a className={`${styles.link} ${styles.active}`} href="/#">
          <span>Home</span>
        </a>
        <a className={styles.link} href="#about" onClick={smoothScroll}>
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
    </div>
  );
};

export { Menu };
