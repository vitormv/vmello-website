import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Brand.module.scss';

const Brand = ({
  name, highlightedName, children, small, extraClassName,
}) => (
  <div className={`${styles.wrapper} ${extraClassName} `}>
    <h1
      className={cn({
        [styles.name]: true,
        [styles.small]: small,
      })}
    >
      {name && (<span className={styles.word}>{name}</span>)}

      {highlightedName && (
        <span className={`${styles.word} ${styles.highlight}`}>
          {name && (<span>&nbsp;</span>)}
          {highlightedName}
        </span>
      )}

    </h1>

    {children && (
      <h2 className={styles.subtitle}>
        {children}
      </h2>
    )}
  </div>
);

Brand.propTypes = {
  name: PropTypes.string,
  highlightedName: PropTypes.string,
  children: PropTypes.node,
  small: PropTypes.bool,
  extraClassName: PropTypes.string,
};

Brand.defaultProps = {
  name: 'Vitor',
  highlightedName: 'Mello',
  children: null,
  extraClassName: false,
  small: false,
};

export { Brand };
