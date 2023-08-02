import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SocialButtons } from 'src/components/SocialButtons/SocialButtons';
import { Brand } from 'src/components/Brand/Brand';
import styles from './Headline.module.scss';
import { ReactNode } from 'react';

type HeadlineProps = {
  children: ReactNode,
  extraClassName: string,
  small: boolean,
}

const Headline = ({ children, small = false, extraClassName = '', ...rest }: HeadlineProps) => (
  <div
    className={clsx({
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

export { Headline };
