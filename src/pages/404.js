import React from 'react';
import { Link } from 'gatsby';
import { Layout } from 'src/components/Layout';
import { SEO } from 'src/components/SEO';
import { FullPageHeadline } from 'src/components/FullPageHeadline/FullPageHeadline';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <FullPageHeadline name="" highlightedName="404">
      Whatever that was... it ain&#39;t here, ¯\_(ツ)_/¯.
      <p>
        <br />
        Feel like trying the&nbsp;
        <Link to="/">homepage</Link>
        &nbsp;instead?
      </p>
    </FullPageHeadline>
  </Layout>
);

export default NotFoundPage;
