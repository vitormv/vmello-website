import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TrackingEye } from 'src/components/TrackingEye/TrackingEye';
import styles from './Menu.module.scss';

const Menu = () => (
  <div className="relative mx-auto container px-10 h-16 flex justify-around items-center text-lg lg:max-w-screen-xl lg:px-24">
    <div className="grow-0 flex">
      <TrackingEye />
      <a className={styles.logo} href="/" aria-label="back to homepage">
        <img alt="logo" src="/assets/images/logo.svg" />
      </a>
    </div>
    <div className="grow-0" />
    <div className="grow flex justify-end items-center gap-4">
      <a className={`${styles.link} ${styles.active}`} href="/#"><span>Home</span></a>
      <a className={styles.link} href="/#"><span>About</span></a>
      <a className={styles.link} href="vitor-mello-resume.pdf" target="_blank"><span>Resume</span></a>

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

export { Menu };
