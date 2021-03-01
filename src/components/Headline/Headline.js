import PropTypes from 'prop-types';
import cn from 'classnames';
import { SocialButtons } from 'src/components/SocialButtons/SocialButtons';
import { Brand } from 'src/components/Brand/Brand';
import styles from './Headline.module.scss';

const Headline = ({ children, small, extraClassName, ...rest }) => (
  <div
    className={cn({
      [styles.container]: true,
      [extraClassName]: extraClassName.length > 0,
      [styles.fullPage]: !small,
    })}
  >
    <Brand small={small} extraClassName={styles.brand} {...rest}>
      {children}
    </Brand>

    <SocialButtons extraClassName={styles.socialButtons} />
  </div>
);

Headline.propTypes = {
  children: PropTypes.node,
  small: PropTypes.bool,
  extraClassName: PropTypes.string,
};

Headline.defaultProps = {
  children: null,
  extraClassName: '',
  small: false,
};

export { Headline };
