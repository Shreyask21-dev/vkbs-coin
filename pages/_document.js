import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href='/images/favicon.png' sizes="40x40" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" crossOrigin="anonymous" />
       {/* elementor links start */}
       <link rel='stylesheet' id='elementor-icons-css' href='https://vkbs.coinage.host/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css' media='all' />
       <link rel='stylesheet' id='elementor-common-css' href='https://vkbs.coinage.host/wp-content/plugins/elementor/assets/css/common.min.css' media='all' />
       {/* <link rel='stylesheet' id='e-theme-ui-light-css' href='https://vkbs.coinage.host/wp-content/plugins/elementor/assets/css/theme-light.min.css' media='all' /> */}
       <link rel='stylesheet' id='elementor-frontend-css' href='https://vkbs.coinage.host/wp-content/plugins/elementor/assets/css/frontend-lite.min.css' media='all' />
       <link rel='stylesheet' id='swiper-css' href='https://vkbs.coinage.host/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css' media='all' />
       <link rel='stylesheet' id='elementor-post-6-css' href='https://vkbs.coinage.host/wp-content/uploads/elementor/css/post-6.css' media='all' />
       <link rel='stylesheet' id='elementor-global-css' href='https://vkbs.coinage.host/wp-content/uploads/elementor/css/global.css' media='all' />
       <link rel='stylesheet' id='vkbs-style-css' href='https://vkbs.coinage.host/wp-content/themes/vkbs/style.css' media='all' />
        {/* elementor links end */}


        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="pragma" content="no-cache" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
