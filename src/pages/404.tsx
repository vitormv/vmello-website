import { FC } from 'react';
import { Layout } from 'src/components/Layout';
import { SEO } from 'src/components/SEO';

const NotFoundPage: FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    {/*
    <FullPageHeadline name="" highlightedName="404" contactInfo={contactInfo}>
      Whatever that was... it ain&#39;t here, ¯\_(ツ)_/¯.
      <p>
        <br />
        Feel like trying the&nbsp;
        <Link href="/">homepage</Link>
        &nbsp;instead?
      </p>
    </FullPageHeadline> */}
  </Layout>
);

export default NotFoundPage;
