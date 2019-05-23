import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticQuery, graphql } from 'gatsby';
import styles from './SocialButtons.module.scss';

const SocialButtons = ({ ...rest }) => (
    <StaticQuery
        query={graphql`
            {
                buttons: dataYaml(slug: {eq: "social-buttons"}) {
                    items {
                        key
                        title
                        href
                        icon
                    }
                }
            }
    `}
        render={data => (
            <ul className={`o-headline__social-buttons ${styles.list}`}>
                {data.buttons.items.map(button => (
                    rest[button.key] && (
                        <li key={button.key} className={styles.item}>
                            <a
                                className={styles.button}
                                href={button.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={button.title}
                            >
                                {console.log(button.icon.split(' '))}
                                <FontAwesomeIcon size="lg" icon={button.icon.split(' ')} />
                            </a>
                        </li>
                    )
                ))}
            </ul>
        )}
    />
);

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
