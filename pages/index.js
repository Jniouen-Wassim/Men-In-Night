import Head from 'next/head'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Header from '../components/Header'
import Category from '../components/Category'

export default function Home() {
  return (
    <div> 
      <Head>
        <title>Man In Night</title>
        <meta name="description" content="Man In Night est un fast food qui offre ses services de nuit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <Header />
       <Category />
      </main>

    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}
