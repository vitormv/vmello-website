import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SocialButtons.module.scss';

const SocialButtons = ({ extraClassName }) => {
  const items = [
    {
      title: 'Download CV/Resume',
      href: '/vitor-mello-resume.pdf',
      iconClasses: ['fas', 'download'],
    },
    {
      title: 'Email',
      href: 'mailto:vitor@vmello.com',
      iconClasses: ['fas', 'envelope'],
    },
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/vitormv',
      iconClasses: ['fab', 'linkedin'],
    },
    {
      title: 'GitHub profile',
      href: 'https://www.github.com/vitormv',
      iconClasses: ['fab', 'github'],
    },
  ];

  return (
    <ul className={`${styles.list} ${extraClassName}`}>
      {items.map((button) => (
        <li key={button.title} className={styles.item}>
          <a
            className={styles.button}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            title={button.title}
          >
            <FontAwesomeIcon size="lg" icon={button.iconClasses} />
          </a>
        </li>
      ))}
    </ul>
  );
};

SocialButtons.propTypes = {
  extraClassName: PropTypes.string,
};

SocialButtons.defaultProps = {
  extraClassName: '',
};

export { SocialButtons };
