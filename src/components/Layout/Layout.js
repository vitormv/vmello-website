import React from 'react';
import PropTypes from 'prop-types';
import 'src/icons';
import 'src/styles/main.scss';
import 'normalize.css';
import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <main className={styles.main}>
    {children}
  </main>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
