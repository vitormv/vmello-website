import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkillsList.module.scss';

const SkillsList = ({ skills }) => (
  <ul className={styles.list}>
    {skills.map((item, index) => (
      <li key={item.title} className={styles.item}>
        <span className={styles.count}>{String(index + 1).padStart(2, '0')}</span>
        <div className={styles.content}>
          <h3 className={styles.name}>{item.title}</h3>
          <p className={styles.description}>
            {item.description}
          </p>
        </div>
      </li>
    ))}
  </ul>
);

SkillsList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export { SkillsList };
