import React from 'react';
import PropTypes from 'prop-types';
import 'src/styles/main.scss';

const Layout = ({ children }) => (
    <React.Fragment>
        {children}
    </React.Fragment>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export { Layout };
