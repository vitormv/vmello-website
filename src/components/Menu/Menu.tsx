import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';
import { TrackingEye } from 'src/components/TrackingEye/TrackingEye';
import styles from './Menu.module.scss';

const Menu = () => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="items-center pt-4 lg:pt-8 px-10 mx-auto h-16 text-lg lg:px-24 lg:max-w-screen-xl
                  container flex relative justify-between"
    >
      <div className="flex grow-0">
        <TrackingEye />

        <a className={styles.logo} href="/" aria-label="back to homepage">
          <img alt="logo" src="/assets/images/logo.svg" />
        </a>
      </div>

      <div className={clsx({
        [styles.expanded]: isExpanded,
      })}
      >
        {/* https://patrickgulas.com/hamburgers */}
        <button
          type="button"
          className="absolute top-6 right-6 z-20 md:hidden"
          onClick={() => setExpanded(!isExpanded)}
        >
          <FontAwesomeIcon size="lg" icon={['fas', 'bars']} />
        </button>

        <span className={`${styles.circle} z-0`} />

        <div className={`${styles.nav} z-10 absolute flex flex-col right-0 top-12 grow md:gap-4 md:justify-end md:flex-row md:items-center ${isExpanded ? 'block' : 'hidden'}`}>
          <a className={`${styles.link} ${styles.active}`} href="/#"><span>Home</span></a>
          <a className={styles.link} href="/#"><span>About</span></a>
          <a className={styles.link} href="vitor-mello-resume.pdf" target="_blank"><span>Resume</span></a>

          <a
            href="https://www.linkedin.com/in/vitormv"
            target="blank"
            aria-label="LinkedIn profile"
            rel="noopener noreferrer"
            className="px-4 text-gray hover:text-black transition-colors"
          >
            <FontAwesomeIcon size="lg" icon={['fab', 'linkedin']} />

          </a>
          <a
            href="https://www.github.com/vitormv"
            target="blank"
            aria-label="Github profile"
            rel="noopener noreferrer"
            className="px-4 text-gray hover:text-black transition-colors"
          >
            <FontAwesomeIcon size="lg" icon={['fab', 'github']} />

          </a>
        </div>

      </div>
    </div>
  );
};

export { Menu };
