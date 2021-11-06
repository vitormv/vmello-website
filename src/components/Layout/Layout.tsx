import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import 'src/icons';
import { Menu } from 'src/components/Menu/Menu';

// import styles from './Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <main>
    <Menu />
    {children}
  </main>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
