import Head from 'next/head';
import LandingScreen from '../components/landing-screen';

export default function Home() {
  return (
    <div>
      <Head>
        <title>RAiD</title>
        <meta name="description" content="The unofficially official website for RAiD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingScreen />
    </div>
  );
}
