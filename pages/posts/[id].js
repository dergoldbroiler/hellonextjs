import Link from 'next/link';

import Head from 'next/head';
import Script from 'next/script';



import { Layout } from '../../components/Layout';
import { getBlogPathIDs,getSinglePostData } from '../../public/js/api';



export default function Post({postData}) {
  return (
    <Layout>
        <Head>
        <title>My First Post</title> 
      </Head>


      <h1>{postData.contentData.title}</h1>
  
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      
  
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}


/* retuns a list of (all possbile) path objects */
export async function getStaticPaths() {
    const paths = getBlogPathIDs();

    return {
        paths,
        fallback:false
    }
}


export async function getStaticProps({params}){
    const postData = await getSinglePostData(params.id);

    return {
        props: {
            postData
        }
    }
}