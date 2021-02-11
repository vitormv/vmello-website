import React from 'react';
import PropTypes from 'prop-types';
import 'src/icons';
import 'normalize.css';
import 'src/styles/main.scss';

const Layout = ({ children }) => (
  <>
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
