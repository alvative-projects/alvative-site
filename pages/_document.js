import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script"

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL} /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Kanit:wght@300;400;500;700&display=swap" rel="stylesheet" />
        {/* <link rel="icon" href="/logo.png" /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        {/* <Script src="https://kit.fontawesome.com/5d105b5d88.js" crossorigin="anonymous"></Script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
