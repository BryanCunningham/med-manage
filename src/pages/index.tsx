import Head from 'next/head';
import { CaregiverDashboard } from '../components';

const Home = () => {
  return (
    <>
      <Head>
        <title>MedManage</title>
        <meta name="description" content="Manage medications and schedules for care recipients." />
      </Head>
      <CaregiverDashboard />
    </>
  );
};

export default Home;
