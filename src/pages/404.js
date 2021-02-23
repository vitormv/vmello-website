import React from 'react';
import Link from 'next/link';
import { Layout } from 'src/components/Layout';
import { SEO } from 'src/components/SEO';
import { FullPageHeadline } from 'src/components/FullPageHeadline/FullPageHeadline';
import contactInfoYml from 'src/data/contact-info.yml';

const NotFoundPage = ({ contactInfo }) => (
  <Layout>
    <SEO title="404: Not found" />

    <FullPageHeadline name="" highlightedName="404" contactInfo={contactInfo}>
      Whatever that was... it ain&#39;t here, ¯\_(ツ)_/¯.
      <p>
        <br />
        Feel like trying the&nbsp;
        <Link href="/">homepage</Link>
        &nbsp;instead?
      </p>
    </FullPageHeadline>
  </Layout>
);

const getStaticProps = async () => ({
  props: {
    contactInfo: contactInfoYml.items,
  },
});

export { getStaticProps };
export default NotFoundPage;
