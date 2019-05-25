import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSocialButtonsProvider } from 'src/providers';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styles from './SocialButtons.module.scss';

const SocialButtons = ({ extraClassName, ...rest }) => {
    const { items } = getSocialButtonsProvider();

    return (
        <ul className={`${styles.list} ${extraClassName}`}>
            {items.map(button => (
                rest[button.key] && (
                    <li key={button.key} className={styles.item}>
                        <OutboundLink
                            className={styles.button}
                            href={button.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={button.title}
                        >
                            <FontAwesomeIcon size="lg" icon={button.icon.split(' ')} />
                        </OutboundLink>
                    </li>
                )
            ))}
        </ul>
    );
};

SocialButtons.propTypes = {
    extraClassName: PropTypes.string,
    resume: PropTypes.bool,
    email: PropTypes.bool,
    linkedin: PropTypes.bool,
    github: PropTypes.bool,
};

SocialButtons.defaultProps = {
    extraClassName: '',
    resume: true,
    email: true,
    linkedin: true,
    github: true,
};

export { SocialButtons };
