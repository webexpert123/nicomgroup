import '@/styles/globals.css'
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      {/* Add the favicon */}
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Start | NicomGroup</title>
        <link rel="canonical" href="https://www.nicomgroup.net" />
        <meta property="og:title" content="Start | NicomGroup" />
        <meta property="og:url" content="https://www.nicomgroup.net" />
        <meta property="og:site_name" content="NicomGroup" />
        <meta property="og:type" content="website" />        
        <meta name="keywords" content="Back, Life., to" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Start | NicomGroup" />
      </Head>
      {/* Add the favicon */}
      {/* Note that the path doesn't include "public" */}
      <Component {...pageProps} />
    </>
  )
}

export default App;