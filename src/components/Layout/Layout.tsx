import { FC, ReactNode } from 'react';
import 'src/icons';
import { Menu } from 'src/components/Menu/Menu';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <main>
    <Menu />
    {children}
  </main>
);

export { Layout };
