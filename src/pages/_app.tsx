import { AppProps } from 'next/app';
import Script from 'next/script';

import '../styles/global.css';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
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
