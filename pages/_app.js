import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <>
  {/* <Script
  id="Adsense-id"
  data-ad-client="ca-pub-7904408176093356"
  async="true"
  strategy="beforeInteractive"
   src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
/> */}
<Component {...pageProps} /></>
}

export default MyApp
