import { TrackingEye } from 'src/components/TrackingEye/TrackingEye';
import styles from './Menu.module.scss';

const Menu = () => (
  <div className="relative mx-auto container lg:max-w-screen-xl md:px-24 h-16 flex justify-around items-center text-lg">
    <div className="flex-grow">
      <a className={styles.link} href="#"><span>Home</span></a>
    </div>
    <div className="flex-grow-0">
      <TrackingEye />
    </div>
    <div className="flex-grow flex justify-end">
      <a className={styles.link} href="#"><span>About</span></a>
    </div>
  </div>
);

export { Menu };
