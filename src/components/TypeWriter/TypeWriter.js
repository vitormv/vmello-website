import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import TypeIt from 'typeit';
import styles from './TypeWriter.module.scss';

const TypeWriter = ({ children, ...rest }) => {
  const spanRef = useRef(null);

  useEffect(() => {
    new TypeIt(spanRef.current, rest).go();
  });

  return (
    <span className={styles.typeWriter} ref={spanRef}>
      {children}
    </span>
  );
};

TypeWriter.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TypeWriter };
