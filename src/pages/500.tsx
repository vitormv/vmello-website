import { FC } from 'react';
import { Layout } from 'src/components/Layout';

// @todo proper error page
const NotFoundPage: FC = () => (
  <Layout>
    <p>Woops, error.</p>
  </Layout>
);

export default NotFoundPage;
