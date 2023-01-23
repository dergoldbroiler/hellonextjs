import Head from 'next/head'
import styles from '../styles/Home.module.css';

import Link from 'next/link';
import { Welcome } from '../components/Welcome';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blogliste</title>
      </Head>

      <main>
        <Welcome h1="Hello Next Blog List" />

        <p className={styles.description}>Hier findest du den Blogcontent</p>
      
      </main>

    </div>
  )
}