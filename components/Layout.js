import styles from './Layout.module.css';
import util_styles from '../styles/Utils.module.css'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export const Layout = ({children, home}) => {
    return (
        <div className={styles.container}>
            <Head>
                <meta
                    name="description"
                    content="This Description refers to the Layout Component"
                />
            </Head> 
            <header className={`${util_styles['bg-white']} ${styles['header']}` }>

                <Image
                    src="/images/me_small.jpg"
                    className={`${util_styles.rounded_img} ${util_styles['m-auto']}`}
                    width="100"
                    height="100"
                    alt="Me"
                />

                {home && <h1>Home</h1>}


            </header>

           

            {children}
           
            {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}

        </div>
        
    );
}