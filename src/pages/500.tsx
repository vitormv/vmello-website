import { FC } from 'react';
import { Layout } from 'src/components/Layout';
import { SEO } from 'src/components/SEO';

const NotFoundPage: FC = () => (
  <Layout>
    <SEO title="500: Internal Server Error" />
    <p>
      Woops, error.
    </p>
  </Layout>
);

export default NotFoundPage;
