import { FC } from 'react';
import { Layout } from 'src/components/Layout';

/** @todo proper 404 page */
const NotFoundPage: FC = () => (
  <Layout>
    <p>
      <br />
      Feel like trying the&nbsp;
      <a href="/">homepage</a>
      &nbsp;instead?
    </p>
  </Layout>
);

export default NotFoundPage;
