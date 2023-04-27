import { AppProps } from 'next/app';
import Script from 'next/script';

import '../styles/global.css';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    {/* AdSense */}
    <Script
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
      crossOrigin="anonymous"
    ></Script>
    {/* Analytics */}
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
    />
    <Script
      id="gtag-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
 
        gtag('config', '${GA_ID}');
        `,
      }}
    />
    <Component {...pageProps} />
  </>
);

export default MyApp;
