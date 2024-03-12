import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href='/images/favicon.png' sizes="40x40" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" crossOrigin="anonymous" />
       {/* elementor links start */}
       <link rel='stylesheet' id='elementor-icons-css' href='https://vkbs.coinage.host/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.29.0' media='all' />

       <link rel='stylesheet' id='vkbs-style-css' href='https://vkbs.coinage.host/wp-content/themes/vkbs/style.css?ver=1.0.0' media='all' />
        {/* elementor links end */}
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
