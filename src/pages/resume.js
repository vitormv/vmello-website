import Head from 'next/head';
import { PageA4 } from 'src/components/PageA4/PageA4';
import resumeYml from 'src/data/resume.yml';

const ResumePage = ({ resume }) => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap" media="all" rel="stylesheet" />
    </Head>
    <PageA4 resume={resume} />
  </>
);

const getStaticProps = async () => ({
  props: {
    resume: resumeYml,
  },
});

export { getStaticProps };
export default ResumePage;
