import Head from 'next/head'
import Image from 'next/image'

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
