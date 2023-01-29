import Head from 'next/head'
import Script from 'next/script';
import styles from '../styles/Home.module.css';
import { Layout } from '../components/Layout';
import matter from 'gray-matter'
import Link from 'next/link';
import { Welcome } from '../components/Welcome';
import { Singlepostlistelement } from '../components/Singlepostlistelement';

import {getData} from '../public/js/api';

export default function Home({posts_list}) {

 const preparePosts = posts_list.map(
      post =>
         <Singlepostlistelement title={post.title} id={post.id} key={post.id}/>
       
    );


  return (

   
    <Layout home={true}>
      
    <div className={styles.home_container}>
        <Head>
          <title>Home</title>
        </Head>

        <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        />

      <main>
        <Welcome h2="Hello Next Blog List" />

        <p className={styles.description}>Hier findest du den Blogcontent</p>

        <ul>
         {preparePosts}
        </ul>
      
      </main>

    </div>
    </Layout>
  )
} 


export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const posts_list = await getData(); 


  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      posts_list
    }
  }
}