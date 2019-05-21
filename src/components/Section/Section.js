import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Section.module.scss';

const Section = ({
    title,
    description,
    children,
    isTextBlock,
}) => (
    <section className={styles.section}>
        <div className={styles.header}>
            <div className={styles.cell}>
                {title.length && (
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                )}
                {description.length && (
                    <div>
                        {description}
                    </div>
                )}
            </div>
        </div>
        <div className={styles.content}>
            <div
                className={cn({
                    [styles.cell]: true,
                    [styles.textBlock]: isTextBlock,
                })}
            >
                {children}
            </div>
        </div>
    </section>
);

Section.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    isTextBlock: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

Section.defaultProps = {
    title: null,
    description: null,
    isTextBlock: false,
};

export { Section };
