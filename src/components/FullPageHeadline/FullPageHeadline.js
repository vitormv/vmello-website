import React from 'react';
import PropTypes from 'prop-types';
import { Headline } from 'src/components/Headline';
import { Section } from 'src/components/Section';
import { ContactInfo } from 'src/components/ContactInfo';
import styles from './FullPageHeadline.module.scss';

const FullPageHeadline = ({ children, withContactInfo, ...rest }) => (
    <Section fullSize>
        <div className={styles.section}>
            <Headline {...rest}>
                {children}
            </Headline>

            {withContactInfo && (
                <ContactInfo extraClassName={styles.contactInfo} />
            )}
        </div>
    </Section>
);

FullPageHeadline.propTypes = {
    children: PropTypes.node,
    withContactInfo: PropTypes.bool,
};

FullPageHeadline.defaultProps = {
    children: null,
    withContactInfo: true,
};

export { FullPageHeadline };
