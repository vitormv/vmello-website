import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';
import { TrackingEye } from 'src/components/TrackingEye/TrackingEye';
import { useOnMount } from 'src/hooks/useOnMoun';
import styles from './Menu.module.scss';

const Menu = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [enableAnimations, setAnimations] = useState(false);

  useOnMount(() => { setAnimations(true); });

  return (
    <div className={clsx({
      'flex items-center pt-4 lg:pt-8 px-10 mx-auto h-16 text-lg lg:px-24 lg:max-w-screen-xl': true,
      'container relative justify-between': true,
      preventAnimations: !enableAnimations,
    })}
    >
      <div className="flex grow-0">
        <TrackingEye />

        <a className={styles.logo} href="/" aria-label="back to homepage">
          <img alt="logo" src="/assets/images/logo.svg" />
        </a>
      </div>

      <div className={clsx({
        [styles.navWrapper]: true,
        [styles.expanded]: isExpanded,
      })}
      >
        <button
          type="button"
          className="absolute top-6 right-6 md:hidden z-30 text-gray cursor-pointer group"
          onClick={() => setExpanded(!isExpanded)}
        >
          <div
            className={clsx({
              'tham tham-e-spin tham-w-8 ': true,
              'tham-active': isExpanded,
            })}
          >
            <div className="tham-box">
              <div className="tham-inner  group-hover:bg-red" />
            </div>
          </div>
        </button>

        <div className={clsx({
          [styles.nav]: true,
          [styles.navVisible]: isExpanded,
          'z-30': true,
          'flex flex-col items-center grow md:gap-4 md:justify-end md:flex-row md:items-center': true,
          'md:opacity-100': true,
        })}
        >
          <a className={`${styles.link}`} href="/"><span>Home</span></a>
          <a className={styles.link} href="/#"><span>About</span></a>
          <a className={styles.link} href="vitor-mello-resume.pdf" target="_blank"><span>Resume</span></a>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/vitormv"
              target="blank"
              aria-label="LinkedIn profile"
              rel="noopener noreferrer"
              className="px-4 text-black lg:text-gray hover:text-black transition-colors"
            >
              <FontAwesomeIcon size="lg" icon={['fab', 'linkedin']} />

            </a>
            <a
              href="https://www.github.com/vitormv"
              target="blank"
              aria-label="Github profile"
              rel="noopener noreferrer"
              className="px-4 text-black lg:text-gray hover:text-black transition-colors"
            >
              <FontAwesomeIcon size="lg" icon={['fab', 'github']} />

            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export { Menu };
