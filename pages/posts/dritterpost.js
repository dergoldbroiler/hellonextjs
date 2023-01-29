import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

import { Layout } from '../../components/Layout';




export default function Dritterpost() {
  return (
    <Layout>
        <Head>
        <title>My Dritter Post</title> 
      </Head>


      <h1>My Dritter Pos</h1>

  
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}

