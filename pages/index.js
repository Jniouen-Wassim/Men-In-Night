import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Man In Night</title>
        <meta name="description" content="Man In Night est un fast food qui offre ses services de nuit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <header>
         <div>
           <h1>Man <br /> <p className="textIn">In</p> Night</h1>
           <img src="/img/simple-mini.jpg" alt="Picture of the author" />
          </div>
       </header>
      </main>

     
    </div>
  )
}
