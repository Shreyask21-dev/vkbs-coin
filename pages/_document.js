import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" href='/images/favicon.png' sizes="40x40" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" crossOrigin="anonymous" />
       <meta http-equiv="cache-control" content="no-cache" />
       <meta http-equiv="expires" content="0" />
       <meta http-equiv="pragma" content="no-cache" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
