import { FC } from 'react';
import { Layout } from 'src/components/Layout';
import { SEO } from 'src/components/SEO';

const NotFoundPage: FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <p>
      <br />
      Feel like trying the&nbsp;
      <a href="/">homepage</a>
      &nbsp;instead?
    </p>
  </Layout>
);

export default NotFoundPage;