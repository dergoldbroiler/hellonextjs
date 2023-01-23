import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

import { Layout } from '../../components/Layout';



export default function FirstPost() {
  return (
    <Layout>
    <Head>
        <title>My First Post</title> 
      </Head>

      <Script
        src="/js/testimport.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>First Post</h1>

      <Image
        src="/images/me.jpg"
        width={500}
        height={370}
        alt="BJörn Zschernack"
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}