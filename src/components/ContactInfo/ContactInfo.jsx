import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './ContactInfo.module.scss';

const ContactInfo = ({ contactInfo, extraClassName }) => (
  <div
    className={clsx({
      [styles.contactInfo]: true,
      [extraClassName]: extraClassName.length > 0,
    })}
  >
    <hr />

    <div className={styles.items}>
      {contactInfo.map((item) => (
        <div key={item.name} className={styles.item}>
          <h4 className={styles.name}>{item.name}</h4>
          <address className={styles.value}>
            {item.value}
          </address>
        </div>
      ))}
    </div>
  </div>
);

ContactInfo.propTypes = {
  extraClassName: PropTypes.string,
};

ContactInfo.defaultProps = {
  extraClassName: '',
};

export { ContactInfo };
