import { FC, useEffect, useRef } from 'react';
import { addMultipleEventListeners, removeMultipleEventListeners } from 'src/functions/multipleEventListenersHelper';
import styles from './TrackingEye.module.scss';

const TrackingEye: FC = () => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const eyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const eye = eyeRef.current;

    const onLinkMouseEnter = () => { linkRef.current?.classList.add(styles.active); };
    const onLinkMouseLeave = () => { linkRef.current?.classList.remove(styles.active); };
    const onMouseMove = (event: MouseEvent) => {
      if (!eye) return;

      // when the mouse moves, calculate the new iris position
      const offsets = eyeRef.current.getBoundingClientRect();
      const xCoordinate = (offsets.left) + (eye.offsetWidth / 2);
      const yCoordinate = (offsets.top) + (eye.offsetHeight / 2);
      const rad = Math.atan2(event.pageX - xCoordinate, event.pageY - yCoordinate);
      const degrees = (rad * (180 / Math.PI) * -1) + 180;

      eyeRef.current.style.transform = `rotate(${degrees}deg)`;
    };

    // open/close the eye whenever the cursor hovers over an "<a>" element
    addMultipleEventListeners('a', 'mouseenter', onLinkMouseEnter);
    addMultipleEventListeners('a', 'mouseleave', onLinkMouseLeave);

    // move the eye whenever the cursor moves
    document.addEventListener('mousemove', onMouseMove);

    // remove event listeners when unmounting
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      removeMultipleEventListeners('a', 'mouseenter', onLinkMouseEnter);
      removeMultipleEventListeners('a', 'mouseleave', onLinkMouseLeave);
    };
  }, []);

  return (
    <div className="flex w-10">
      <a className={styles.link} href="/" ref={linkRef}>
        <div className={styles.eye}>
          <div className={styles.iris} ref={eyeRef}>
            <div className={styles.pupil} />
          </div>
        </div>
      </a>
    </div>
  );
};

export { TrackingEye };
