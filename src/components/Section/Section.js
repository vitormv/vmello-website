import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Section.module.scss';

const Section = ({
    title,
    description,
    children,
    isTextBlock,
    isFullSize,
}) => (
    <section
        className={cn({
            [styles.section]: true,
            [styles.fullSize]: isFullSize,
        })}
    >
        <div className={styles.header}>
            {(title.length > 0 || description.length > 0) && (
                <div className={styles.cell}>
                    {(title.length > 0) && (
                        <h2 className={styles.title}>
                            {title}
                        </h2>
                    )}
                    {(description.length > 0) && (
                        <div>
                            {description}
                        </div>
                    )}
                </div>
            )}

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
    isFullSize: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

Section.defaultProps = {
    title: '',
    description: '',
    isTextBlock: false,
    isFullSize: false,
};

export { Section };
