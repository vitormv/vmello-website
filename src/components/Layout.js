import React from 'react';
import PropTypes from 'prop-types';
import 'src/styles/main.scss';
import { Header } from 'src/components/Header';

const Layout = ({ children }) => (
    <React.Fragment>
        <Header />
        {children}
    </React.Fragment>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export { Layout };
