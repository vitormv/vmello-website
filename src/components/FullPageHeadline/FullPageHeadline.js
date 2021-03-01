import PropTypes from 'prop-types';
import { Section } from 'src/components/Section/Section';
import { Headline } from 'src/components/Headline/Headline';
import { ContactInfo } from 'src/components/ContactInfo/ContactInfo';
import styles from './FullPageHeadline.module.scss';

const FullPageHeadline = ({ children, withContactInfo, contactInfo, ...rest }) => (
  <Section fullSize>
    <div className={styles.section}>
      <Headline {...rest}>
        {children}
      </Headline>

      {withContactInfo && (
        <ContactInfo contactInfo={contactInfo} extraClassName={styles.contactInfo} />
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
