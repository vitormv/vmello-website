import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSocialButtonsProvider } from 'src/providers';
import styles from './SocialButtons.module.scss';

const SocialButtons = ({ ...rest }) => {
    const { items } = getSocialButtonsProvider();

    return (
        <ul className={`o-headline__social-buttons ${styles.list}`}>
            {items.map(button => (
                rest[button.key] && (
                    <li key={button.key} className={styles.item}>
                        <a
                            className={styles.button}
                            href={button.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={button.title}
                        >
                            <FontAwesomeIcon size="lg" icon={button.icon.split(' ')} />
                        </a>
                    </li>
                )
            ))}
        </ul>
    );
};

SocialButtons.propTypes = {
    resume: PropTypes.bool,
    email: PropTypes.bool,
    linkedin: PropTypes.bool,
    github: PropTypes.bool,
};

SocialButtons.defaultProps = {
    resume: true,
    email: true,
    linkedin: true,
    github: true,
};

export { SocialButtons };
