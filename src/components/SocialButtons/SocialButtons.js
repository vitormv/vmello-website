import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './SocialButtons.module.scss';

const SocialButtons = ({ email }) => (
    <ul className={`o-headline__social-buttons ${styles.list}`}>
        <li className={styles.item}>
            <a
                className={styles.button}
                href="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Download CV/Resume"
            >
                <FontAwesomeIcon size="lg" icon={faDownload} />
            </a>
        </li>

        {email && (
            <li className={styles.item}>
                <a
                    className={styles.button}
                    href="mailto:vitor@vmello.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Email"
                >
                    <FontAwesomeIcon size="lg" icon={faEnvelope} />
                </a>
            </li>
        )}

        <li className={styles.item}>
            <a
                className={styles.button}
                href="https://www.linkedin.com/in/vitormv"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn profile"
            >
                <FontAwesomeIcon size="lg" icon={faLinkedin} />
            </a>
        </li>

        <li className={styles.item}>
            <a
                className={styles.button}
                href="https://www.github.com/vitormv"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub profile"
            >
                <FontAwesomeIcon size="lg" icon={faGithub} />
            </a>
        </li>
    </ul>
);

SocialButtons.propTypes = {
    email: PropTypes.bool,
};

SocialButtons.defaultProps = {
    email: true,
};

export { SocialButtons };
