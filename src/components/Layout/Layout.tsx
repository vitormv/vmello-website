import { ReactNode } from 'react';
import 'src/icons';
import { Menu } from 'src/components/Menu/Menu';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <main>
    <Menu />
    {children}
  </main>
);

export { Layout };
