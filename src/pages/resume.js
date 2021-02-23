import React from 'react';
import Head from 'next/head';
import { PaperPage } from 'src/components/PaperPage/PaperPage';
import resumeYml from 'src/data/resume.yml';

const ResumePage = ({ resume }) => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap" media="all" rel="stylesheet" />
    </Head>
    <PaperPage resume={resume} />
  </>
);

const getStaticProps = async () => ({
  props: {
    resume: resumeYml,
  },
});

export { getStaticProps };
export default ResumePage;
